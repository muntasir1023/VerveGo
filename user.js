<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VerveGo: Where Agents Create Journeys, and Travelers Find Them.</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>


    <style>
        /* Custom styles to apply the chosen fonts */
        body {
            font-family: 'Lato', sans-serif;
            background-color: #f8fafc; /* Off-white background */
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
        }
        /* Custom class for the hero video background */
        .hero-video-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translate(-50%, -50%);
            z-index: -1;
        }
        /* Style for active nav link */
        .nav-link-active {
            color: #14b8a6; /* Teal accent color */
            font-weight: 600;
        }
        /* Smooth transition for page sections */
        .page-section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .page-section.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Modal transition */
        .modal, .modal-content {
            transition: all 0.3s ease-out;
        }

        /* --- Updated Card Hover Effects --- */
        .tour-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            transform: scale(1);
        }
        .tour-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        /* Search Suggestions Styling */
        #search-suggestions {
            max-height: 200px;
            overflow-y: auto;
        }
        .suggestion-item {
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        .suggestion-item:hover {
            background-color: #3f4757;
        }
        
    </style>
</head>
<body class="bg-gray-900 text-gray-300">

    <!-- Header & Navigation -->
    <header id="header" class="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="index.html" class="nav-link text-2xl font-bold text-white">
                    Verve<span class="text-teal-500">Go</span>
                </a>
                
                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">Home</a>
                    <a href="vervego_tours.html" class="nav-link nav-link-active text-gray-300 hover:text-teal-400 transition-colors">Tours</a>
                    <a href="index.html#why-join" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">Why Join Us</a>
                    <a href="index.html#how-it-works" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">How It Works</a>
                    <a href="index.html#testimonials" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">Testimonials</a>
                    <a href="index.html#pricing" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">Pricing</a>
                    <a href="index.html#faq" class="nav-link text-gray-300 hover:text-teal-400 transition-colors">FAQ</a>
                </nav>

                <!-- CTA and Login Buttons -->
                <div class="hidden md:flex items-center space-x-4">
                    <a href="vervego_agent_portal.html" class="text-gray-300 hover:text-white">Agent Login</a>
                    <a href="index.html#apply" class="bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-600 transition-all">Apply Now</a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="text-white focus:outline-none">
                        <svg id="menu-open-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        <svg id="menu-close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-gray-900">
            <nav class="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
                <a href="index.html" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">Home</a>
                <a href="vervego_tours.html" class="nav-link nav-link-active text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">Tours</a>
                <a href="index.html#why-join" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">Why Join Us</a>
                <a href="index.html#how-it-works" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">How It Works</a>
                <a href="index.html#testimonials" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">Testimonials</a>
                <a href="index.html#pricing" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">Pricing</a>
                <a href="index.html#faq" class="nav-link text-gray-300 hover:text-teal-400 transition-colors w-full text-center py-2">FAQ</a>
                <div class="border-t border-gray-700 w-full my-4"></div>
                <a href="vervego_agent_portal.html" class="text-gray-300 hover:text-white w-full text-center py-2">Agent Login</a>
                <a href="index.html#apply" class="bg-teal-500 text-white font-semibold px-5 py-3 rounded-lg hover:bg-teal-600 transition-all w-full text-center">Apply Now</a>
            </nav>
        </div>
    </header>
    
    <main>
        <!-- Tours Hero Section -->
        <section class="relative h-[60vh] min-h-[400px] flex items-center text-white overflow-hidden">
            <div class="absolute inset-0 bg-gray-900 opacity-60 z-0"></div>
            <img src="https://c1.wallpaperflare.com/preview/929/926/321/plane-sunset-sunrise-wing.jpg" alt="Beautiful Scenenry" class="hero-video-bg">
            <div class="relative z-10 p-6 container mx-auto">
                <h1 class="text-5xl font-bold font-poppins mb-2">Explore Our Tours</h1>
                <p class="text-xl max-w-2xl text-gray-200">
                    Discover unforgettable journeys crafted by our expert travel agents.
                </p>
            </div>
        </section>

        <!-- Search Bar -->
        <div class="bg-gray-800 py-6">
            <div class="container mx-auto px-6">
                <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div class="relative w-full sm:w-2/5 z-20">
                        <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input id="search-input" type="text" placeholder="Search destinations, tours, or keywords..." class="w-full bg-gray-700 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                        <!-- Search Suggestions Dropdown -->
                        <div id="search-suggestions" class="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg hidden">
                            <!-- Suggestions will be populated here -->
                        </div>
                    </div>
                    <div class="relative w-full sm:w-1/5">
                        <i data-lucide="calendar" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="date" class="w-full bg-gray-700 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                    </div>
                    <div class="relative w-full sm:w-1/5">
                        <i data-lucide="users" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="number" placeholder="Travelers" class="w-full bg-gray-700 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                    </div>
                    <button id="find-tours-btn" class="w-full sm:w-1/5 bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors">
                        Find Tours
                    </button>
                </div>
            </div>
        </div>

        <!-- Tours Grid Section -->
        <section id="tours" class="page-section py-20 px-6 bg-slate-50 text-gray-900">
            <div class="container mx-auto">
                <h2 class="text-4xl font-bold font-poppins text-center mb-12">Our Most Popular Journeys</h2>
                <div id="tour-cards-container" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Tour cards will be dynamically added here -->
                </div>
            </div>
        </section>

    </main>
    
    <!-- Toast Notification -->
    <div id="toast-container" class="fixed bottom-4 right-4 z-[100]"></div>

    <!-- Tour Details Modal -->
    <div id="tour-details-modal" class="modal fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-[1000] opacity-0 pointer-events-none transition-all duration-300">
        <div class="modal-content bg-white p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative scale-95 transition-all duration-300">
            <button id="close-tour-details-modal-btn" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <div id="modal-content-container">
                <!-- Content will be dynamically injected here -->
            </div>
        </div>
    </div>

    <!-- Hotel Booking Modal -->
    <div id="hotel-booking-modal" class="modal fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-[1001] opacity-0 pointer-events-none transition-all duration-300">
        <div class="modal-content bg-white p-8 rounded-xl max-w-md w-full shadow-2xl relative scale-95 transition-all duration-300">
            <button id="close-hotel-booking-modal-btn" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <h3 class="text-2xl font-bold font-poppins text-gray-900 mb-6">Book Hotel</h3>
            <form id="hotel-booking-form" class="space-y-4">
                <div>
                    <label for="booking-hotel-name" class="block text-sm font-semibold text-gray-700">Hotel</label>
                    <input type="text" id="booking-hotel-name" readonly class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-gray-100 p-2">
                </div>
                <div>
                    <label for="booking-client-name" class="block text-sm font-semibold text-gray-700">Your Name</label>
                    <input type="text" id="booking-client-name" required class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="booking-check-in" class="block text-sm font-semibold text-gray-700">Check-in Date</label>
                        <input type="date" id="booking-check-in" required class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2">
                    </div>
                    <div>
                        <label for="booking-check-out" class="block text-sm font-semibold text-gray-700">Check-out Date</label>
                        <input type="date" id="booking-check-out" required class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2">
                    </div>
                </div>
                <div>
                    <label for="booking-guests" class="block text-sm font-semibold text-gray-700">Number of Guests</label>
                    <input type="number" id="booking-guests" value="1" min="1" required class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500 p-2">
                </div>
                <button type="submit" class="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Confirm Hotel Booking
                </button>
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-2xl font-bold text-white mb-4">Verve<span class="text-teal-500">Go</span></h3>
                    <p class="text-sm">Empowering travel agents, one booking at a time.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
                        <li><a href="vervego_tours.html" class="hover:text-white transition-colors">Tours</a></li>
                        <li><a href="index.html#why-join" class="hover:text-white transition-colors">Why Join Us</a></li>
                        <li><a href="index.html#testimonials" class="hover:text-white transition-colors">Testimonials</a></li>
                        <li><a href="index.html#pricing" class="hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Agent Links</h4>
                    <ul class="space-y-2">
                        <li><a href="vervego_agent_portal.html" class="hover:text-white transition-colors">Agent Login</a></li>
                        <li><a href="index.html#apply" class="hover:text-white transition-colors">Apply Now</a></li>
                        <li><a href="index.html#faq" class="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Contact Us</h4>
                    <p class="text-sm">123 Travel Lane, Adventure City</p>
                    <p class="text-sm">info@vervego.com</p>
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="facebook" class="w-6 h-6"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="twitter" class="w-6 h-6"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors"><i data-lucide="instagram" class="w-6 h-6"></i></a>
                    </div>
                </div>
            </div>
            <div class="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-8">
                &copy; 2024 VerveGo. All rights reserved.
            </div>
        </div>
    </footer>

    <!-- Cookie Banner -->
    <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 transform translate-y-full transition-transform duration-500 ease-in-out z-[100]">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p class="text-sm mb-4 md:mb-0">
                This website uses cookies to ensure you get the best experience. By continuing to use our site, you agree to our <a href="#" id="learn-more-link" class="text-teal-400 hover:underline">Privacy Policy</a>.
            </p>
            <div class="flex space-x-2">
                <button id="accept-cookies-button" class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-all text-sm">
                    Got it!
                </button>
            </div>
        </div>
    </div>
    
    <!-- Privacy Policy Modal -->
    <div id="privacy-modal" class="modal fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-4 z-[1000] opacity-0 pointer-events-none transition-all duration-300">
        <div class="modal-content bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative scale-95 transition-all duration-300">
            <button id="close-modal-button" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            <h2 class="text-3xl font-bold font-poppins text-gray-900 mb-4">Privacy Policy</h2>
            <p class="text-gray-700 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your data.
            </p>
            <p class="text-gray-700 mb-4">
                We use cookies to enhance your experience on our site, personalize content, and analyze our traffic. We do not sell or share your personal information with third parties without your explicit consent.
            </p>
            <h3 class="text-2xl font-semibold font-poppins text-gray-900 mb-2">Data We Collect</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Travel preferences and booking history</li>
                <li>Website usage data via cookies and analytics</li>
            </ul>
            <h3 class="text-2xl font-semibold font-poppins text-gray-900 mb-2">How We Use Your Data</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>To process your bookings and provide customer support</li>
                <li>To personalize your experience and show relevant travel offers</li>
                <li>To improve our website and services</li>
            </ul>
            <h3 class="text-2xl font-semibold font-poppins text-gray-900 mb-2">Your Rights</h3>
            <p class="text-gray-700 mb-4">
                You have the right to access, correct, or delete your personal data. You can also opt-out of receiving marketing communications at any time.
            </p>
            <button id="close-modal-button-2" class="mt-4 bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-600 transition-all">
                Close
            </button>
        </div>
    </div>


    <script>
        // Initialize Lucide Icons
        lucide.createIcons();
        
        // Function to show toast notifications
        function showToast(message, type = 'info') {
            const toastContainer = document.getElementById('toast-container');
            const toast = document.createElement('div');
            let icon = '';
            let bgColor = '';
            
            switch (type) {
                case 'success':
                    icon = '<i data-lucide="check-circle" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-teal-500';
                    break;
                case 'error':
                    icon = '<i data-lucide="x-circle" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-red-500';
                    break;
                case 'info':
                default:
                    icon = '<i data-lucide="info" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-blue-500';
                    break;
            }

            toast.innerHTML = `
                <div class="flex items-center p-4 mb-2 text-white ${bgColor} rounded-lg shadow-md transition-all duration-300">
                    ${icon}
                    <span>${message}</span>
                </div>
            `;
            
            toastContainer.appendChild(toast);
            lucide.createIcons();
            
            setTimeout(() => {
                toast.remove();
            }, 5000);
        }

        // --- Data for Tourist Spots ---
        const touristSpots = [
            {
                id: 'spot-1',
                title: 'Eiffel Tower, Paris',
                image: 'https://cdn.britannica.com/31/255531-050-B7E07090/eiffel-tower-paris-france-champ-de-mars-view.jpg',
                description: 'A global icon of France and one of the most recognizable structures in the world. Enjoy panoramic views of the City of Love from its observation decks.',
                shortDescription: 'Experience the magic of Paris from the iconic Eiffel Tower. A must-see landmark in the City of Love.',
                agencies: [
                    { name: 'Voyage Luxe', price: 450, rating: 4.8 },
                    { name: 'City Escapes', price: 435, rating: 4.5 },
                    { name: 'Budget Globetrotter', price: 420, rating: 4.2 }
                ],
                hotels: [
                    { name: 'Hotel De Crillon', price: 250, rating: 4.9, address: '10 Place de la Concorde, 75008 Paris', roomNumber: '254', beds: 2 },
                    { name: 'Le Bristol Paris', price: 200, rating: 4.8, address: '112 Rue du Faubourg Saint-Honoré, 75008 Paris', roomNumber: '180', beds: 1 }
                ]
            },
            {
                id: 'spot-2',
                title: 'Great Wall of China',
                image: 'https://whc.unesco.org/uploads/thumbs/site_0438_0035-1200-630-20241024162522.jpg',
                description: 'An ancient series of walls and fortifications located in northern China, built around 7th century BC. It is the world\'s largest military structure.',
                shortDescription: 'Walk along the historic Great Wall of China, an epic symbol of human ingenuity and resilience.',
                agencies: [
                    { name: 'Eastern Odyssey', price: 450, rating: 4.9 },
                    { name: 'Dragon Tours', price: 420, rating: 4.7 },
                    { name: 'Silk Road Adventures', price: 480, rating: 4.9 }
                ],
                hotels: [
                    { name: 'Commune by the Great Wall', price: 100, rating: 4.7, address: 'Shuiguan section, Badaling, Yanqing District, Beijing', roomNumber: '88', beds: 2 },
                    { name: 'The Great Wall Courtyard Hostel', price: 80, rating: 4.2, address: 'Shuiguan Great Wall, Badaling Town, Yanqing District, Beijing', roomNumber: '12', beds: 4 }
                ]
            },
            {
                id: 'spot-3',
                title: 'Machu Picchu, Peru',
                image: 'https://media.audleytravel.com/-/media/images/home/south-america/peru/letterbox-images/new-istock/istock_000034717900_machu_picchu.jpg?q=79&w=1920&h=685',
                description: 'A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. It is often referred to as the "Lost City of the Incas".',
                shortDescription: 'Explore the mystical ruins of Machu Picchu, a UNESCO World Heritage site and a wonder of the ancient world.',
                agencies: [
                    { name: 'Andean Journeys', price: 800, rating: 5.0 },
                    { name: 'Inca Trail Expeditions', price: 780, rating: 4.8 },
                    { name: 'Peru Adventures', price: 750, rating: 4.6 }
                ],
                hotels: [
                    { name: 'Belmond Sanctuary Lodge', price: 390, rating: 5.0, address: 'Carretera Hiram Bingham Km 7.5, Machu Picchu Pueblo', roomNumber: '42', beds: 2 },
                    { name: 'Sumaq Machu Picchu Hotel', price: 325, rating: 4.8, address: 'Av. Hermanos Ayar Mz 1, Machu Picchu Pueblo', roomNumber: '78', beds: 1 }
                ]
            },
            {
                id: 'spot-4',
                title: 'Colosseum, Rome',
                image: 'https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg',
                description: 'The largest ancient amphitheatre ever built, located in the center of the city of Rome. It is considered one of the greatest works of Roman architecture and engineering.',
                shortDescription: 'Step back in time to the Roman Empire at the magnificent Colosseum. A symbol of Rome\'s power and history.',
                agencies: [
                    { name: 'Roman Holiday Tours', price: 250, rating: 4.7 },
                    { name: 'Gladiator Trips', price: 230, rating: 4.5 },
                    { name: 'Italia Explore', price: 260, rating: 4.9 }
                ],
                hotels: [
                    { name: 'Hotel Forum', price: 220, rating: 4.5, address: 'Via Tor de\' Conti, 25, 00184 Roma RM', roomNumber: '150', beds: 2 },
                    { name: 'Mercure Roma Centro Colosseo', price: 190, rating: 4.3, address: 'Via Labicana, 153, 00184 Roma RM', roomNumber: '210', beds: 1 }
                ]
            },
            {
                id: 'spot-5',
                title: 'Taj Mahal, India',
                image: 'https://media.architecturaldigest.com/photos/67acb9b0339bcbaaadeb91b5/16:9/w_2560%2Cc_limit/GettyImages-873536102.jpg',
                description: 'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife. It is the jewel of Muslim art in India.',
                shortDescription: 'Marvel at the stunning beauty of the Taj Mahal, a masterpiece of Mughal architecture and a symbol of eternal love.',
                agencies: [
                    { name: 'India Heritage Tours', price: 600, rating: 4.9 },
                    { name: 'Mughal Explorers', price: 580, rating: 4.7 },
                    { name: 'Golden Triangle Travel', price: 620, rating: 5.0 }
                ],
                hotels: [
                    { name: 'The Oberoi Amarvilas', price: 365, rating: 5.0, address: 'Taj East Gate Rd, Agra, Uttar Pradesh 282001', roomNumber: '100', beds: 2 },
                    { name: 'ITC Mughal, a Luxury Collection Resort & Spa', price: 300, rating: 4.6, address: 'Fatehabad Rd, Tajganj, Agra, Uttar Pradesh 282001', roomNumber: '230', beds: 1 }
                ]
            },
            {
                id: 'spot-6',
                title: 'Pyramids of Giza, Egypt',
                image: 'https://lp-cms-production.imgix.net/2020-11/GettyRF_1085205362.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800',
                description: 'The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. It is the oldest of the Seven Wonders of the Ancient World.',
                shortDescription: 'Uncover the mysteries of ancient Egypt at the Great Pyramids of Giza, a monumental feat of human engineering.',
                agencies: [
                    { name: 'Nile Adventures', price: 700, rating: 4.8 },
                    { name: 'Desert Explorer', price: 680, rating: 4.6 },
                    { name: 'Pharaoh\'s Journey', price: 720, rating: 4.9 }
                ],
                hotels: [
                    { name: 'Marriott Mena House', price: 220, rating: 4.8, address: 'Pyramids Road, Giza, Cairo, Egypt', roomNumber: '523', beds: 2 },
                    { name: 'Pyramids Park Resort', price: 150, rating: 4.1, address: 'Alexandria Desert Road, Giza, Cairo, Egypt', roomNumber: '345', beds: 1 }
                ]
            },
            {
                id: 'spot-7',
                title: 'The Louvre, Paris',
                image: 'https://media.architecturaldigest.com/photos/5900cc370638dd3b70018b33/16:9/w_2991,h_1682,c_limit/Secrets%20of%20Louvre%201.jpg',
                description: 'The Louvre is the world\'s most-visited museum and a historic monument in Paris, France. It is home to some of the most famous works of art, including the Mona Lisa.',
                shortDescription: 'Immerse yourself in art and history at The Louvre, home to thousands of masterpieces including the Mona Lisa.',
                agencies: [
                    { name: 'Artful Escapes', price: 180, rating: 4.6 },
                    { name: 'Parisian Passports', price: 170, rating: 4.4 },
                    { name: 'Museum Hoppers', price: 165, rating: 4.2 }
                ],
                hotels: [
                    { name: 'Hôtel Le Royal Monceau', price: 520, rating: 4.9, address: '37 Avenue Hoche, 75008 Paris', roomNumber: '175', beds: 2 },
                    { name: 'The Westin Paris', price: 450, rating: 4.7, address: '3 Rue de Castiglione, 75001 Paris', roomNumber: '290', beds: 1 }
                ]
            },
            {
                id: 'spot-8',
                title: 'Mount Fuji, Japan',
                image: 'https://cdn.gaijinpot.com/app/uploads/sites/6/2016/02/Mount-Fuji-New.jpg',
                description: 'An active stratovolcano that is the highest mountain in Japan. It is considered one of Japan\'s "Three Sacred Mountains" and has been a site of pilgrimage for centuries.',
                shortDescription: 'Witness the serene beauty of Mount Fuji, Japan\'s highest peak and a revered symbol of the nation.',
                agencies: [
                    { name: 'Zenith Tours', price: 550, rating: 4.9 },
                    { name: 'Samurai Travels', price: 530, rating: 4.8 },
                    { name: 'Rising Sun Adventures', price: 570, rating: 5.0 }
                ],
                hotels: [
                    { name: 'Fuji-Hakone Guest House', price: 120, rating: 4.3, address: '694-1 Sengokuhara, Hakone, Ashigarashimo District, Kanagawa 250-0631', roomNumber: '32', beds: 2 },
                    { name: 'Hotel New Grand', price: 210, rating: 4.5, address: '10 Yamashitacho, Naka Ward, Yokohama, Kanagawa 231-0023', roomNumber: '115', beds: 1 }
                ]
            }
        ];

        // --- DOM Elements ---
        const searchInput = document.getElementById('search-input');
        const searchSuggestionsContainer = document.getElementById('search-suggestions');
        const tourCardsContainer = document.getElementById('tour-cards-container');
        const modalContentContainer = document.getElementById('modal-content-container');
        const tourDetailsModal = document.getElementById('tour-details-modal');
        const closeTourDetailsModalBtn = document.getElementById('close-tour-details-modal-btn');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOpenIcon = document.getElementById('menu-open-icon');
        const menuCloseIcon = document.getElementById('menu-close-icon');
        const cookieBanner = document.getElementById('cookie-banner');
        const acceptCookiesButton = document.getElementById('accept-cookies-button');
        const privacyModal = document.getElementById('privacy-modal');
        const learnMoreLink = document.getElementById('learn-more-link');
        const closeModalButton = document.getElementById('close-modal-button');
        const closeModalButton2 = document.getElementById('close-modal-button-2');

        const hotelBookingModal = document.getElementById('hotel-booking-modal');
        const closeHotelBookingModalBtn = document.getElementById('close-hotel-booking-modal-btn');
        const hotelBookingForm = document.getElementById('hotel-booking-form');
        const bookingHotelNameInput = document.getElementById('booking-hotel-name');

        // Function to show toast notifications
        function showToast(message, type = 'info') {
            const toastContainer = document.getElementById('toast-container');
            const toast = document.createElement('div');
            let icon = '';
            let bgColor = '';
            
            switch (type) {
                case 'success':
                    icon = '<i data-lucide="check-circle" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-teal-500';
                    break;
                case 'error':
                    icon = '<i data-lucide="x-circle" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-red-500';
                    break;
                case 'info':
                default:
                    icon = '<i data-lucide="info" class="w-5 h-5 mr-2"></i>';
                    bgColor = 'bg-blue-500';
                    break;
            }

            toast.innerHTML = `
                <div class="flex items-center p-4 mb-2 text-white ${bgColor} rounded-lg shadow-md transition-all duration-300">
                    ${icon}
                    <span>${message}</span>
                </div>
            `;
            
            toastContainer.appendChild(toast);
            lucide.createIcons();
            
            setTimeout(() => {
                toast.remove();
            }, 5000);
        }

        // --- Render Tour Cards ---
        function renderTourCards(spotsToRender = touristSpots) {
            tourCardsContainer.innerHTML = '';
            if (spotsToRender.length === 0) {
                tourCardsContainer.innerHTML = '<p class="text-center col-span-full text-gray-500">No tours found matching your search.</p>';
                return;
            }
            spotsToRender.forEach(spot => {
                const card = document.createElement('div');
                card.classList.add('tour-card', 'bg-white', 'rounded-xl', 'shadow-lg', 'overflow-hidden', 'flex', 'flex-col');
                card.innerHTML = `
                    <img src="${spot.image}" alt="${spot.title}" class="h-56 w-full object-cover">
                    <div class="p-6 flex-grow">
                        <h3 class="text-2xl font-semibold font-poppins mb-2">${spot.title}</h3>
                        <p class="text-gray-600 mb-4 flex-grow">
                            ${spot.shortDescription}
                        </p>
                        <div class="flex items-center text-teal-600 mb-4">
                            <i data-lucide="star" class="w-5 h-5 fill-current mr-1"></i>
                            <span class="font-bold">${spot.agencies.length > 0 ? spot.agencies[0].rating : 'N/A'}</span>
                            <span class="text-gray-400 text-sm ml-2">(${spot.agencies.length > 0 ? spot.agencies[0].rating * 20 : 0} reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-bold text-gray-900">${spot.agencies.length > 0 ? `$${spot.agencies[0].price}` : 'Price Varies'}</span>
                            <button class="view-details-btn bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors" data-spot-id="${spot.id}">View Details</button>
                        </div>
                    </div>
                `;
                tourCardsContainer.appendChild(card);
            });
            lucide.createIcons();
        }
        
        // --- Modal Logic ---
        function openTourDetailsModal(spotId) {
            const spot = touristSpots.find(s => s.id === spotId);
            if (!spot) return;
            
            let agenciesHtml = '';
            spot.agencies.forEach(agency => {
                agenciesHtml += `
                    <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                        <div>
                            <h4 class="font-semibold text-gray-900">${agency.name}</h4>
                            <div class="flex items-center text-teal-600">
                                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                <span class="ml-1 text-sm font-semibold">${agency.rating}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-bold text-gray-900">$${agency.price}</p>
                            <button class="book-agency-btn bg-teal-500 text-white font-semibold px-4 py-1 mt-2 rounded-lg text-sm hover:bg-teal-600 transition-colors" data-agency-name="${agency.name}">Book Now</button>
                        </div>
                    </div>
                `;
            });

            // --- Generate Hotels HTML with Bed Info and Book Now button ---
            let hotelsHtml = '';
            if (spot.hotels && spot.hotels.length > 0) {
                hotelsHtml += `
                    <h4 class="text-2xl font-semibold font-poppins text-gray-900 mb-4 mt-8">Recommended Hotels</h4>
                    <div class="space-y-4">
                `;
                spot.hotels.forEach(hotel => {
                    hotelsHtml += `
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex justify-between items-center mb-2">
                                <h5 class="font-semibold text-gray-900">${hotel.name}</h5>
                                <div class="flex items-center text-teal-600">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <span class="ml-1 text-sm font-semibold">${hotel.rating}</span>
                                </div>
                            </div>
                            <div class="flex items-center text-gray-600 text-sm mb-1">
                                <i data-lucide="map-pin" class="w-4 h-4 mr-2"></i>
                                <span>${hotel.address}</span>
                            </div>
                            <div class="flex items-center text-gray-600 text-sm mb-1">
                                <i data-lucide="door-open" class="w-4 h-4 mr-2"></i>
                                <span>Room #${hotel.roomNumber}</span>
                            </div>
                            <div class="flex items-center text-gray-600 text-sm">
                                <i data-lucide="bed" class="w-4 h-4 mr-2"></i>
                                <span>${hotel.beds} beds</span>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <p class="text-xl font-bold text-gray-900">$${hotel.price} / night</p>
                                <button class="book-hotel-btn bg-teal-500 text-white font-semibold px-4 py-1 rounded-lg text-sm hover:bg-teal-600 transition-colors" data-hotel-name="${hotel.name}">Book Now</button>
                            </div>
                        </div>
                    `;
                });
                hotelsHtml += `</div>`;
            }

            modalContentContainer.innerHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img src="${spot.image}" alt="${spot.title}" class="rounded-xl object-cover w-full h-80 md:h-full">
                    </div>
                    <div>
                        <h3 class="text-4xl font-bold font-poppins text-gray-900 mb-4">${spot.title}</h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">${spot.description}</p>
                        <h4 class="text-2xl font-semibold font-poppins text-gray-900 mb-4">Agencies & Pricing</h4>
                        <div class="space-y-4">
                            ${agenciesHtml}
                        </div>
                        ${hotelsHtml} <!-- Inject the hotel content here -->
                    </div>
                </div>
            `;
            tourDetailsModal.classList.remove('opacity-0', 'pointer-events-none');
            tourDetailsModal.querySelector('.modal-content').classList.remove('scale-95');
            lucide.createIcons();
            
            // Add event listeners for the new buttons
            modalContentContainer.querySelectorAll('.book-agency-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const agencyName = button.dataset.agencyName;
                    showToast(`Booking with ${agencyName} has been confirmed!`, 'success');
                });
            });
            
            modalContentContainer.querySelectorAll('.book-hotel-btn').forEach(button => {
                button.addEventListener('click', () => {
                    const hotelName = button.dataset.hotelName;
                    openHotelBookingModal(hotelName);
                });
            });
        }

        function closeTourDetailsModal() {
            tourDetailsModal.classList.add('opacity-0', 'pointer-events-none');
            tourDetailsModal.querySelector('.modal-content').classList.add('scale-95');
        }

        function openHotelBookingModal(hotelName) {
            bookingHotelNameInput.value = hotelName;
            hotelBookingModal.classList.remove('opacity-0', 'pointer-events-none');
            hotelBookingModal.querySelector('.modal-content').classList.remove('scale-95');
            // Also close the tour details modal for a cleaner UI
            closeTourDetailsModal(); 
        }

        function closeHotelBookingModal() {
            hotelBookingModal.classList.add('opacity-0', 'pointer-events-none');
            hotelBookingModal.querySelector('.modal-content').classList.add('scale-95');
            hotelBookingForm.reset();
        }

        hotelBookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('booking-client-name').value;
            const hotelName = document.getElementById('booking-hotel-name').value;
            showToast(`Hotel booking for ${clientName} at ${hotelName} confirmed!`, 'success');
            closeHotelBookingModal();
        });

        closeHotelBookingModalBtn.addEventListener('click', closeHotelBookingModal);
        hotelBookingModal.addEventListener('click', (e) => {
            if (e.target === hotelBookingModal) {
                closeHotelBookingModal();
            }
        });


        // --- Search Functionality with Suggestions ---
        function showSuggestions(spots) {
            searchSuggestionsContainer.innerHTML = '';
            if (spots.length > 0 && searchInput.value.length > 0) {
                spots.slice(0, 5).forEach(spot => { // Show max 5 suggestions
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item', 'p-3', 'text-gray-300');
                    suggestionItem.textContent = spot.title;
                    suggestionItem.addEventListener('click', () => {
                        searchInput.value = spot.title;
                        filterSpots();
                        searchSuggestionsContainer.classList.add('hidden');
                    });
                    searchSuggestionsContainer.appendChild(suggestionItem);
                });
                searchSuggestionsContainer.classList.remove('hidden');
            } else {
                searchSuggestionsContainer.classList.add('hidden');
            }
        }

        function filterSpots() {
            const query = searchInput.value.toLowerCase();
            const filteredSpots = touristSpots.filter(spot => 
                spot.title.toLowerCase().includes(query) ||
                spot.shortDescription.toLowerCase().includes(query) ||
                spot.description.toLowerCase().includes(query)
            );
            renderTourCards(filteredSpots);
            showSuggestions(filteredSpots); // Also update suggestions
        }

        // Event listeners
        searchInput.addEventListener('input', filterSpots);
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchSuggestionsContainer.contains(e.target)) {
                searchSuggestionsContainer.classList.add('hidden');
            }
        });
        
        // --- Event listener to open the tour details modal on button click ---
        tourCardsContainer.addEventListener('click', (e) => {
            const viewDetailsButton = e.target.closest('.view-details-btn');
            if (viewDetailsButton) {
                const spotId = viewDetailsButton.dataset.spotId;
                openTourDetailsModal(spotId);
            }
        });
        
        closeTourDetailsModalBtn.addEventListener('click', closeTourDetailsModal);
        tourDetailsModal.addEventListener('click', (e) => {
            if (e.target === tourDetailsModal) {
                closeTourDetailsModal();
            }
        });

        // Mobile Menu Logic
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
            });
        });

        // Add 'is-visible' class to sections on scroll
        const pageSections = document.querySelectorAll('.page-section');
        const options = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, options);
        pageSections.forEach(section => observer.observe(section));

        // Cookie Banner Logic
        const hasConsent = localStorage.getItem('verveGoCookieConsent');
        if (!hasConsent) {
            setTimeout(() => { cookieBanner.style.transform = 'translateY(0)'; }, 1500);
        }
        acceptCookiesButton.addEventListener('click', () => {
            cookieBanner.style.transform = 'translateY(100%)';
            localStorage.setItem('verveGoCookieConsent', 'true');
        });

        // Privacy Modal Logic
        function openPrivacyModal() {
            privacyModal.classList.remove('opacity-0', 'pointer-events-none');
            privacyModal.querySelector('.modal-content').classList.remove('scale-95');
        }
        function closePrivacyModal() {
            privacyModal.classList.add('opacity-0', 'pointer-events-none');
            privacyModal.querySelector('.modal-content').classList.add('scale-95');
        }
        learnMoreLink.addEventListener('click', (e) => { e.preventDefault(); openPrivacyModal(); });
        closeModalButton.addEventListener('click', closePrivacyModal);
        closeModalButton2.addEventListener('click', closePrivacyModal);
        privacyModal.addEventListener('click', (e) => { if (e.target === privacyModal) closePrivacyModal(); });

        // Initial render of tour cards
        window.addEventListener('DOMContentLoaded', () => {
            renderTourCards();
        });
    </script>
</body>
</html>