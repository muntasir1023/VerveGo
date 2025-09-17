document.addEventListener('DOMContentLoaded', () => {
    const toursContainer = document.getElementById('tours-container');
    const searchBar = document.getElementById('search-bar');
    const departureCountrySelect = document.getElementById('departure-country');
    const currencySelect = document.getElementById('currency-select');
    // Removed bookingModal, bookingFormModal, cancelBookingButton declarations

    let currentCurrency = localStorage.getItem('selectedCurrency') || 'USD';
    if(currencySelect) {
        currencySelect.value = currentCurrency;
    }
    let currentDepartureCountry = departureCountrySelect ? departureCountrySelect.value : '';
    let currentSearchTerm = searchBar ? searchBar.value : '';

    // Hardcoded exchange rates relative to USD for demonstration purposes
    const currencyExchangeRates = {
        'USD': 1,
        'EUR': 0.92, // 1 USD = 0.92 EUR (example rate)
        'GBP': 0.79, // 1 USD = 0.79 GBP (example rate)
        'INR': 83.30, // 1 USD = 83.30 INR (example rate)
        'BDT': 109.60, // 1 USD = 109.60 BDT (example rate)
        'CAD': 1.36 // 1 USD = 1.36 CAD (example rate)
    };

    // Function to get currency symbol
    const getCurrencySymbol = (currencyCode) => {
        switch (currencyCode) {
            case 'USD': return '$';
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'INR': return '₹';
            case 'BDT': return '৳';
            case 'CAD': return 'C$';
            default: return '$';
        }
    };

    const convertPrice = (priceUSD, targetCurrency) => {
        if (currencyExchangeRates[targetCurrency]) {
            return (priceUSD * currencyExchangeRates[targetCurrency]).toFixed(2);
        }
        return priceUSD; // Fallback to USD if currency not found
    };

    const renderTours = () => {
        if(!toursContainer) return;
        toursContainer.innerHTML = ''; // Clear existing tours

        const filteredTours = toursData.filter(tour => {
            const matchesSearch = tour.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                  tour.location.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                                  tour.shortDescription.toLowerCase().includes(currentSearchTerm.toLowerCase());
            return matchesSearch;
        });

        filteredTours.forEach(tour => {
            const tourCard = document.createElement('div');
            tourCard.className = 'bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col';

            let bestAgencyPrice = Infinity;
            let bestAgencyName = '';
            let currencySymbol = getCurrencySymbol(currentCurrency);

            if (tour.agencies && tour.agencies.length > 0) {
                tour.agencies.forEach(agency => {
                    agency.packages.forEach(pkg => {
                        if (pkg.price[currentCurrency] < bestAgencyPrice) {
                            bestAgencyPrice = pkg.price[currentCurrency];
                            bestAgencyName = agency.name;
                        }
                    });
                });
            }

            if(bestAgencyPrice === Infinity) {
                bestAgencyPrice = 'N/A';
            }

            let hotelPriceDisplay = 'N/A';
            if (tour.hotels && tour.hotels.length > 0) {
                const basePriceUSD = tour.hotels[0].basePriceUSD;
                const convertedHotelPrice = convertPrice(basePriceUSD, currentCurrency);
                hotelPriceDisplay = `${currencySymbol}${convertedHotelPrice}`;
            }


            tourCard.innerHTML = `
                <img src="${tour.image}" alt="${tour.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex-grow flex flex-col">
                    <h3 class="text-2xl font-bold text-white mb-2">${tour.title}</h3>
                    <p class="text-gray-400 text-sm mb-4 flex-grow">${tour.shortDescription}</p>
                    <div class="flex items-center text-gray-400 text-sm mb-2">
                        <i data-lucide="map-pin" class="w-4 h-4 mr-2"></i>
                        <span>${tour.location}</span>
                    </div>
                    <div class="flex items-center text-gray-400 text-sm mb-4">
                        <i data-lucide="clock" class="w-4 h-4 mr-2"></i>
                        <span>${tour.duration}</span>
                    </div>
                    <div class="mt-auto">
                        <p class="text-lg font-semibold text-teal-400">Agency Price: ${currencySymbol}${bestAgencyPrice} (from ${bestAgencyName})</p>
                        <p class="text-md text-gray-500">Hotel Base Price: ${hotelPriceDisplay}</p>
                        <div class="mt-4 flex space-x-2">
                            <a href="tour-details.html?id=${tour._id}" class="flex-1 text-center bg-teal-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-700 transition-all">Select Package</a>
                        </div>
                    </div>
                </div>
            `;
            toursContainer.appendChild(tourCard);
        });
        lucide.createIcons(); // Re-render lucide icons for new elements
    };

    if(searchBar) {
        searchBar.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            renderTours();
        });
    }

    if(currencySelect) {
        currencySelect.addEventListener('change', (e) => {
            currentCurrency = e.target.value;
            localStorage.setItem('selectedCurrency', currentCurrency); // Save to local storage
            renderTours();
        });
    }

    if(departureCountrySelect) {
        departureCountrySelect.addEventListener('change', (e) => {
            currentDepartureCountry = e.target.value;
            renderTours();
        });
    }

    // Initial render
    renderTours();
});