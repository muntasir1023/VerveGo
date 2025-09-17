document.addEventListener('DOMContentLoaded', () => {
    const tourDetailContent = document.getElementById('tour-detail-content');
    const agencySelect = document.getElementById('agency-select');
    const hotelSelect = document.getElementById('hotel-select');
    const travelerNameInput = document.getElementById('traveler-name');
    const travelerEmailInput = document.getElementById('traveler-email');
    const travelerPhoneInput = document.getElementById('traveler-phone');
    const totalCostSpan = document.getElementById('total-cost');
    const bookingForm = document.getElementById('booking-form');
    const departureDateInput = document.getElementById('departure-date');
    const returnDateInput = document.getElementById('return-date');
    const checkinDateInput = document.getElementById('checkin-date');
    const checkoutDateInput = document.getElementById('checkout-date');
    const cancelBookingButton = document.getElementById('cancel-booking-button');

    const tourHeroSection = document.getElementById('tour-hero');
    const tourTitleHero = document.getElementById('tour-title-hero');
    const tourLocationHero = document.getElementById('tour-location-hero');

    const tourDescriptionElement = document.getElementById('tour-description');
    const tourInclusionsElement = document.getElementById('tour-inclusions');
    const agencyCardsContainer = document.getElementById('agency-cards');
    const hotelCardsContainer = document.getElementById('hotel-cards');

    let currentTour = null;
    let currentCurrency = localStorage.getItem('selectedCurrency') || 'USD';
    let selectedAgencyPackagePrice = 0;
    let selectedHotelPricePerNight = 0;
    let selectedPackageDuration = 0;
    let totalCost = 0;

    const currencyExchangeRates = {
        'USD': 1,
        'EUR': 0.92,
        'GBP': 0.79,
        'INR': 83.30,
        'BDT': 109.60,
        'CAD': 1.36
    };

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
            return (priceUSD * currencyExchangeRates[targetCurrency]);
        }
        return priceUSD; 
    };

    const calculateNights = (checkin, checkout) => {
        if (!checkin || !checkout) return 0;
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);
        const diffTime = Math.abs(checkoutDate - checkinDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const updateTotalCost = () => {
        const currencySymbol = getCurrencySymbol(currentCurrency);
        let hotelCost = 0;
        const nights = calculateNights(checkinDateInput.value, checkoutDateInput.value);

        if (selectedHotelPricePerNight > 0 && nights > 0) {
            hotelCost = selectedHotelPricePerNight * nights;
        }

        totalCost = parseFloat(selectedAgencyPackagePrice) + parseFloat(hotelCost);
        totalCostSpan.textContent = `${currencySymbol}${totalCost.toFixed(2)}`;
    };

    const renderTourDetails = (tour) => {
        if (!tour) {
            tourDetailContent.innerHTML = '<p class="text-center text-gray-500">Tour not found.</p>';
            return;
        }

        currentTour = tour;
        const currencySymbol = getCurrencySymbol(currentCurrency);

        if (tourHeroSection) {
            tourHeroSection.style.backgroundImage = `url('${tour.image}')`;
        }
        if (tourTitleHero) {
            tourTitleHero.textContent = tour.title;
        }
        if (tourLocationHero) {
            tourLocationHero.textContent = tour.location;
        }

        if(tourDescriptionElement) {
            tourDescriptionElement.textContent = tour.description;
        }

        if(tourInclusionsElement) {
            tourInclusionsElement.innerHTML = tour.inclusions.map(item => `<li>${item}</li>`).join('');
        }

        // Agency cards
        if (agencyCardsContainer) {
            agencyCardsContainer.innerHTML = tour.agencies.map((agency, index) => {
                const packagesHTML = agency.packages.map(pkg => {
                    const price = pkg.price[currentCurrency] ? pkg.price[currentCurrency] : convertPrice(pkg.price['USD'], currentCurrency);
                    return `
                        <div class="flex justify-between items-center mt-2">
                            <span class="text-white">${pkg.duration > 0 ? `${pkg.duration} days` : 'One-way'}</span>
                            <span class="text-xl font-bold text-teal-600">${currencySymbol}${price.toFixed(2)}</span>
                        </div>
                    `;
                }).join('');

                return `
                    <div class="bg-gray-800 rounded-lg shadow-md p-4">
                        <h4 class="text-lg font-semibold text-white mb-2">${agency.name}</h4>
                        <div class="flex items-center mb-2">
                            <span class="text-yellow-400 mr-1">★</span>
                            <span class="text-gray-300">${agency.rating}/5</span>
                        </div>
                        <p class="text-sm text-gray-400 mb-4">${agency.description || 'Reliable tour agency with excellent service.'}</p>
                        <div>
                            <h5 class="text-md font-semibold text-white mb-2">Packages</h5>
                            ${packagesHTML}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Hotel cards
        if (hotelCardsContainer) {
            hotelCardsContainer.innerHTML = tour.hotels.map((hotel, index) => {
                const price = convertPrice(hotel.basePriceUSD, currentCurrency);
                return `
                    <div class="bg-gray-800 rounded-lg shadow-md p-4">
                        <h4 class="text-lg font-semibold text-white mb-2">${hotel.name}</h4>
                        <p class="text-2xl font-bold text-teal-600 mb-2">${currencySymbol}${price.toFixed(2)} / night</p>
                        <div class="flex items-center mb-2">
                            <span class="text-yellow-400 mr-1">★</span>
                            <span class="text-gray-300">${hotel.rating}/5</span>
                        </div>
                        <p class="text-sm text-gray-400">${hotel.description || 'Comfortable accommodation with great amenities.'}</p>
                    </div>
                `;
            }).join('');
        }

        // Populate agency select dropdown
        agencySelect.innerHTML = '<option value="">-- Select an Agency Package --</option>' +
                                 tour.agencies.map((agency, agencyIndex) => {
                                     return agency.packages.map((pkg, pkgIndex) => {
                                         const price = pkg.price[currentCurrency] ? pkg.price[currentCurrency] : convertPrice(pkg.price['USD'], currentCurrency);
                                         return `<option value="${agencyIndex}-${pkgIndex}">${agency.name} - ${pkg.duration > 0 ? `${pkg.duration} days` : 'One-way'} (${currencySymbol}${price.toFixed(2)})</option>`;
                                     }).join('');
                                 }).join('');

        // Populate hotel select dropdown
        hotelSelect.innerHTML = '<option value="">-- Select a Hotel (Optional) --</option>' +
                                tour.hotels.map((hotel, index) => {
                                    const price = convertPrice(hotel.basePriceUSD, currentCurrency);
                                    return `<option value="${index}">${hotel.name} (${currencySymbol}${price.toFixed(2)} / night)</option>`;
                                }).join('');

        updateTotalCost();
    };

    // Event Listeners for booking form
    agencySelect.addEventListener('change', (e) => {
        if (e.target.value) {
            const [agencyIndex, pkgIndex] = e.target.value.split('-').map(Number);
            const selectedAgency = currentTour.agencies[agencyIndex];
            const selectedPackage = selectedAgency.packages[pkgIndex];
            selectedAgencyPackagePrice = selectedPackage.price[currentCurrency] ? selectedPackage.price[currentCurrency] : convertPrice(selectedPackage.price['USD'], currentCurrency);
            selectedPackageDuration = selectedPackage.duration;

            if (selectedPackage.type === 'one-way') {
                returnDateInput.disabled = true;
                returnDateInput.value = '';
            } else {
                returnDateInput.disabled = false;
            }

        } else {
            selectedAgencyPackagePrice = 0;
            selectedPackageDuration = 0;
        }
        updateTotalCost();
    });

    hotelSelect.addEventListener('change', (e) => {
        if (e.target.value !== '') {
            const selectedHotel = currentTour.hotels[parseInt(e.target.value)];
            selectedHotelPricePerNight = convertPrice(selectedHotel.basePriceUSD, currentCurrency);
            checkinDateInput.required = true;
            checkoutDateInput.required = true;
        } else {
            selectedHotelPricePerNight = 0;
            checkinDateInput.required = false;
            checkoutDateInput.required = false;
            checkinDateInput.value = '';
            checkoutDateInput.value = '';
        }
        updateTotalCost();
    });

    departureDateInput.addEventListener('change', () => {
        if (selectedPackageDuration > 0 && departureDateInput.value) {
            const departureDate = new Date(departureDateInput.value);
            const returnDate = new Date(departureDate.getTime() + selectedPackageDuration * 24 * 60 * 60 * 1000);
            returnDateInput.value = returnDate.toISOString().split('T')[0];
        }
        updateTotalCost();
    });
    returnDateInput.addEventListener('change', updateTotalCost);
    checkinDateInput.addEventListener('change', updateTotalCost);
    checkoutDateInput.addEventListener('change', updateTotalCost);

    if (cancelBookingButton) {
        cancelBookingButton.addEventListener('click', () => {
            bookingForm.reset();
            selectedAgencyPackagePrice = 0;
            selectedHotelPricePerNight = 0;
            selectedPackageDuration = 0;
            updateTotalCost();
            returnDateInput.disabled = false; // Re-enable return date input
        });
    }

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!agencySelect.value) {
            alert('Please select an agency package to book this tour.');
            return;
        }

        const travelerName = travelerNameInput.value.trim();
        const travelerEmail = travelerEmailInput.value.trim();
        const travelerPhone = travelerPhoneInput.value.trim();
        const departureDate = departureDateInput.value;
        const returnDate = returnDateInput.value;
        const checkinDate = checkinDateInput.value;
        const checkoutDate = checkoutDateInput.value;

        if (!travelerName || !travelerEmail || !travelerPhone || !departureDate) {
            alert('Please fill in all required traveler and date details.');
            return;
        }

        // Basic email validation
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(travelerEmail)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Date validation
        const depDate = new Date(departureDate);
        const retDate = new Date(returnDate);
        const chkInDate = checkinDate ? new Date(checkinDate) : null;
        const chkOutDate = checkoutDate ? new Date(checkoutDate) : null;

        if (returnDate && depDate > retDate) {
            alert('Return date cannot be before departure date.');
            return;
        }
        if (chkInDate && chkOutDate && chkInDate > chkOutDate) {
            alert('Check-out date cannot be before check-in date.');
            return;
        }
        if (chkInDate && !checkinDateInput.disabled && (!checkinDate || !checkoutDate)) {
            alert('Please provide both check-in and check-out dates for hotel booking.');
            return;
        }

        const [agencyIndex, pkgIndex] = agencySelect.value.split('-').map(Number);
        const selectedAgency = currentTour.agencies[agencyIndex];
        const selectedPackage = selectedAgency.packages[pkgIndex];

        const bookingDetails = {
            tourId: currentTour._id,
            tourName: currentTour.title,
            name: travelerName,
            email: travelerEmail,
            phone: travelerPhone,
            agency: selectedAgency.name,
            package: selectedPackage,
            flightDeparture: departureDate,
            flightReturn: returnDate,
            hotel: hotelSelect.value !== '' ? currentTour.hotels[parseInt(hotelSelect.value)].name : 'N/A',
            hotelCheckin: checkinDate || 'N/A',
            hotelCheckout: checkoutDate || 'N/A',
            totalCost: totalCost,
            currency: currentCurrency
        };

        try {
            const response = await fetch('http://localhost:5000/api/bookings/public', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            if (response.ok) {
                alert('Booking confirmed! A confirmation email has been sent.');
                bookingForm.reset();
                selectedAgencyPackagePrice = 0;
                selectedHotelPricePerNight = 0;
                selectedPackageDuration = 0;
                updateTotalCost();
                returnDateInput.disabled = false; // Re-enable return date input
            } else {
                const errorData = await response.json();
                alert(`Booking failed: ${errorData.message || 'Something went wrong.'}`);
            }
        } catch (error) {
            console.error('Error during booking:', error);
            alert('An error occurred during booking. Please try again later.');
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');

    const tour = toursData.find(t => t._id === tourId);
    renderTourDetails(tour);
});