document.addEventListener('DOMContentLoaded', () => {
    const toursContainer = document.getElementById('tours-container');
    const searchBar = document.getElementById('search-bar');
    // Removed bookingModal, bookingFormModal, cancelBookingButton declarations

    const displayTours = (tours) => {
        if(!toursContainer) return;
        if (!tours || tours.length === 0) {
            toursContainer.innerHTML = '<p class="text-center text-gray-500">No tours found matching your search.</p>';
            return;
        }

        toursContainer.innerHTML = tours.map(tour => {
            let bestAgencyPrice = Infinity;
            let bestAgencyName = '';

            if (tour.agencies && tour.agencies.length > 0) {
                tour.agencies.forEach(agency => {
                    agency.packages.forEach(pkg => {
                        if (pkg.price['USD'] < bestAgencyPrice) {
                            bestAgencyPrice = pkg.price['USD'];
                            bestAgencyName = agency.name;
                        }
                    });
                });
            }

            if(bestAgencyPrice === Infinity) {
                bestAgencyPrice = 'N/A';
            }

            return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
                <img src="${tour.image}" alt="${tour.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-bold font-poppins mb-2">${tour.title}</h3>
                    <p class="text-gray-600 mb-4 flex-grow">${tour.shortDescription}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <span>${tour.duration}</span>
                        <span>${tour.location}</span>
                    </div>
                    <div class="mt-auto">
                        <p class="text-lg font-semibold text-teal-500">Agency Price: $${bestAgencyPrice} (from ${bestAgencyName})</p>
                        </div>
                </div>
            </div>
        `}).join('');
    };

    const filterTours = () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredTours = toursData.filter(tour => 
            tour.title.toLowerCase().includes(searchTerm) || 
            tour.location.toLowerCase().includes(searchTerm) || 
            tour.description.toLowerCase().includes(searchTerm)
        );
        displayTours(filteredTours);
    };

    // Removed openBookingModal function as it's no longer needed here.
    // The booking form is now directly on tour-details.html

    // Removed if(cancelBookingButton) and if(bookingFormModal) blocks

    if(searchBar) {
        searchBar.addEventListener('input', filterTours);
    }

    // Initial display of all tours
    displayTours(toursData);
});