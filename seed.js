const mongoose = require('mongoose');
const connectDB = require('../db');
const Tour = require('./models/tour');

const touristSpots = [
    {
        id: 'spot-1',
        title: 'Eiffel Tower, Paris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg',
        description: 'A global icon of France and one of the most recognizable structures in the world, the Eiffel Tower offers breathtaking panoramic views of Paris.',
        shortDescription: 'Experience the magic of Paris from the iconic Eiffel Tower.',
        location: 'Paris, France',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of the Eiffel Tower',
            'Seine River cruise',
            'Access to the Louvre Museum',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Voyage Luxe',
                prices: { USD: 450, EUR: 400, GBP: 350, INR: 50000, BDT: 55000, CAD: 580 },
                rating: 4.8
            },
            {
                name: 'Global Adventures',
                prices: { USD: 470, EUR: 420, GBP: 360, INR: 52000, BDT: 58000, CAD: 600 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Hotel Ritz Paris', rating: 5, address: '15 Place Vendôme, 75001 Paris', basePriceUSD: 1200 },
            { name: 'Le Bristol Paris', rating: 5, address: '112 Rue du Faubourg Saint-Honoré, 75008 Paris', basePriceUSD: 1500 },
            { name: 'Four Seasons Hotel George V', rating: 5, address: '31 Avenue George V, 75008 Paris', basePriceUSD: 1800 }
        ]
    },
    {
        id: 'spot-2',
        title: 'Great Wall of China, Beijing',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
        description: 'An ancient series of walls and fortifications located in northern China, the Great Wall is a UNESCO World Heritage site and a symbol of Chinese history and engineering.',
        shortDescription: 'Walk along one of the greatest wonders of the world.',
        location: 'Beijing, China',
        duration: '4 Days / 3 Nights',
        inclusions: [
            'Guided hike on the Great Wall',
            'Visit to the Forbidden City',
            'Peking duck dinner',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Eastern Journeys',
                prices: { USD: 600, EUR: 550, GBP: 500, INR: 70000, BDT: 75000, CAD: 780 },
                rating: 4.9
            },
            {
                name: 'Adventure Asia',
                prices: { USD: 620, EUR: 570, GBP: 520, INR: 72000, BDT: 78000, CAD: 800 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'The Peninsula Beijing', rating: 5, address: '8 Goldfish Lane, Wangfujing, Dongcheng, Beijing', basePriceUSD: 400 },
            { name: 'Rosewood Beijing', rating: 5, address: 'Jing Guang Centre, Hujialou, Chaoyang, Beijing', basePriceUSD: 350 },
            { name: 'The Opposite House', rating: 5, address: 'Taikoo Li Sanlitun North, No. 11 Sanlitun Road, Chaoyang, Beijing', basePriceUSD: 300 }
        ]
    },
    {
        id: 'spot-3',
        title: 'Taj Mahal, Agra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited_Version%29.jpg/800px-Taj_Mahal_%28Edited_Version%29.jpg',
        description: 'A stunning white marble mausoleum and a UNESCO World Heritage site, the Taj Mahal is a monument of eternal love and one of the Seven Wonders of the World.',
        shortDescription: 'Witness the timeless beauty and a symbol of eternal love.',
        location: 'Agra, India',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Guided tour of the Taj Mahal',
            'Visit to Agra Fort',
            'Tonga ride',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Indian Horizons',
                prices: { USD: 250, EUR: 220, GBP: 190, INR: 28000, BDT: 30000, CAD: 320 },
                rating: 4.7
            },
            {
                name: 'Bharat Tours',
                prices: { USD: 260, EUR: 230, GBP: 200, INR: 29000, BDT: 31000, CAD: 330 },
                rating: 4.4
            }
        ],
        hotels: [
            { name: 'The Oberoi Amarvilas', rating: 5, address: 'Taj East Gate Road, Agra', basePriceUSD: 500 },
            { name: 'ITC Mughal', rating: 5, address: 'Taj Ganj, Agra', basePriceUSD: 200 },
            { name: 'Trident, Agra', rating: 4.5, address: 'Fatehabad Road, Agra', basePriceUSD: 150 }
        ]
    },
    {
        id: 'spot-4',
        title: 'Machu Picchu, Peru',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/800px-Machu_Picchu%2C_Peru.jpg',
        description: 'An Incan citadel set high in the Andes Mountains, this UNESCO World Heritage site is a testament to the power of the Inca Empire and a breathtaking destination for hikers.',
        shortDescription: 'Explore the lost city of the Incas high in the Andes.',
        location: 'Cusco, Peru',
        duration: '5 Days / 4 Nights',
        inclusions: [
            'Guided trek on the Inca Trail',
            'Accommodation in Cusco',
            'Entrance to Machu Picchu',
            'All meals during the trek'
        ],
        agencies: [
            {
                name: 'Andean Treks',
                prices: { USD: 1200, EUR: 1100, GBP: 1000, INR: 140000, BDT: 150000, CAD: 1550 },
                rating: 4.9
            },
            {
                name: 'Peru Expeditions',
                prices: { USD: 1250, EUR: 1150, GBP: 1050, INR: 145000, BDT: 155000, CAD: 1600 },
                rating: 4.8
            }
        ],
        hotels: [
            { name: 'Belmond Hotel Monasterio', rating: 5, address: 'Plazoleta Nazarenas 223, Cusco', basePriceUSD: 400 },
            { name: 'Inkaterra La Casona', rating: 5, address: 'Plaza Las Nazarenas 211, Cusco', basePriceUSD: 500 },
            { name: 'Palacio del Inka', rating: 5, address: 'Plazoleta Santo Domingo 259, Cusco', basePriceUSD: 300 }
        ]
    },
    {
        id: 'spot-5',
        title: 'Pyramids of Giza, Cairo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giza_pyramid_complex.jpg/800px-Giza_pyramid_complex.jpg',
        description: 'Ancient wonders of the world, these monumental structures stand as a testament to the architectural prowess of the ancient Egyptians and remain one of the most visited sites in the world.',
        shortDescription: 'Uncover the mysteries of ancient Egypt.',
        location: 'Cairo, Egypt',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of the pyramids and the Sphinx',
            'Visit to the Egyptian Museum',
            'Camel ride in the desert',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Nile Adventures',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.6
            },
            {
                name: 'Egypt Uncovered',
                prices: { USD: 520, EUR: 470, GBP: 420, INR: 57000, BDT: 62000, CAD: 670 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Marriott Mena House', rating: 5, address: '6 Pyramids Road, Giza', basePriceUSD: 250 },
            { name: 'Four Seasons Hotel Cairo at Nile Plaza', rating: 5, address: '1089 Corniche El Nil, Garden City, Cairo', basePriceUSD: 300 },
            { name: 'The Nile Ritz-Carlton', rating: 5, address: '1113 Corniche El Nil, Cairo', basePriceUSD: 350 }
        ]
    },
    {
        id: 'spot-6',
        title: 'Colosseum, Rome',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1920px-Colosseo_2020.jpg',
        description: 'An iconic symbol of Imperial Rome, the Colosseum is an oval amphitheater in the center of the city of Rome, Italy. It is the largest ancient amphitheater ever built.',
        shortDescription: 'Step back in time at the magnificent Roman Colosseum.',
        location: 'Rome, Italy',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Skip-the-line entry to the Colosseum',
            'Guided tour of the Roman Forum',
            'Visit to the Vatican City',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Roman Holidays',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.8
            },
            {
                name: 'Italy Express',
                prices: { USD: 520, EUR: 470, GBP: 420, INR: 57000, BDT: 62000, CAD: 670 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel de la Ville', rating: 5, address: 'Via Sistina 69, 00187 Rome', basePriceUSD: 800 },
            { name: 'The St. Regis Rome', rating: 5, address: 'Via Vittorio E. Orlando 3, 00185 Rome', basePriceUSD: 900 },
            { name: 'Hotel Eden', rating: 5, address: 'Via Ludovisi 49, 00187 Rome', basePriceUSD: 1000 }
        ]
    },
    {
        id: 'spot-7',
        title: 'Santorini, Greece',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Santorini_180421_0035_fused.jpg/1920px-Santorini_180421_0035_fused.jpg',
        description: 'A volcanic island in the Cyclades group of the Greek islands, Santorini is famous for its dramatic views, stunning sunsets from Oia town, and its white-washed houses.',
        shortDescription: 'Discover the breathtaking beauty of the Greek isles.',
        location: 'Santorini, Greece',
        duration: '4 Days / 3 Nights',
        inclusions: [
            'Catamaran cruise with BBQ',
            'Wine tasting tour',
            'Sunset viewing in Oia',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Aegean Dreams',
                prices: { USD: 800, EUR: 720, GBP: 640, INR: 88000, BDT: 96000, CAD: 1040 },
                rating: 4.9
            },
            {
                name: 'Hellas Tours',
                prices: { USD: 830, EUR: 750, GBP: 660, INR: 91000, BDT: 99000, CAD: 1080 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Canaves Oia Suites', rating: 5, address: 'Oia, 84702 Santorini', basePriceUSD: 1000 },
            { name: 'Grace Hotel', rating: 5, address: 'Imerovigli, 84700 Santorini', basePriceUSD: 1200 },
            { name: 'Katikies Hotel', rating: 5, address: 'Oia, 84702 Santorini', basePriceUSD: 1100 }
        ]
    },
    {
        id: 'spot-8',
        title: 'Prague Castle, Prague',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Prague_Castle_from_Petrin_Lookout_Tower_2015.jpg/1920px-Prague_Castle_from_Petrin_Lookout_Tower_2015.jpg',
        description: 'A castle complex in Prague, Czech Republic, built in the 9th century. It is the official office of the President of the Czech Republic. The castle was a seat of power for kings of Bohemia, Holy Roman emperors, and presidents of Czechoslovakia.',
        shortDescription: 'Explore the largest ancient castle in the world.',
        location: 'Prague, Czech Republic',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of Prague Castle',
            'Vltava River cruise',
            'Visit to the Old Town Square',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Bohemian Tours',
                prices: { USD: 400, EUR: 360, GBP: 320, INR: 44000, BDT: 48000, CAD: 520 },
                rating: 4.7
            },
            {
                name: 'Prague Getaways',
                prices: { USD: 420, EUR: 380, GBP: 340, INR: 46000, BDT: 50000, CAD: 540 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Four Seasons Hotel Prague', rating: 5, address: 'Veleslavínova 2a/1098, 110 00 Prague 1', basePriceUSD: 500 },
            { name: 'Mandarin Oriental, Prague', rating: 5, address: 'Nebovidská 459/1, 118 00 Prague 1', basePriceUSD: 450 },
            { name: 'The Augustine', rating: 5, address: 'Letenská 12/33, 118 00 Prague 1', basePriceUSD: 400 }
        ]
    },
    {
        id: 'spot-9',
        title: 'Neuschwanstein Castle, Bavaria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Neuschwanstein_Castle_from_the_Marienbr%C3%BCcke.jpg/1920px-Neuschwanstein_Castle_from_the_Marienbr%C3%BCcke.jpg',
        description: 'A 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat and in honor of Richard Wagner.',
        shortDescription: 'Visit the fairytale castle that inspired Disney.',
        location: 'Bavaria, Germany',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Skip-the-line ticket to Neuschwanstein Castle',
            'Visit to Linderhof Palace',
            'Scenic drive through the Bavarian Alps',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Bavarian Adventures',
                prices: { USD: 350, EUR: 315, GBP: 280, INR: 38500, BDT: 42000, CAD: 455 },
                rating: 4.8
            },
            {
                name: 'German Roamers',
                prices: { USD: 370, EUR: 330, GBP: 295, INR: 40500, BDT: 44500, CAD: 480 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Müller', rating: 4, address: 'Alpseestraße 16, 87645 Hohenschwangau', basePriceUSD: 200 },
            { name: 'AMERON Neuschwanstein Alpsee Resort & Spa', rating: 4.5, address: 'Alpseestraße 21, 87645 Hohenschwangau', basePriceUSD: 300 },
            { name: 'Villa Ludwig Suite Hotel', rating: 4.5, address: 'Colomanstraße 12, 87645 Schwangau', basePriceUSD: 250 }
        ]
    },
    {
        id: 'spot-10',
        title: 'Cliffs of Moher, Ireland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cliffs_of_Moher_at_sunset.jpg/1920px-Cliffs_of_Moher_at_sunset.jpg',
        description: 'Sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. They run for about 14 kilometers. From the cliffs, and from atop the tower, visitors can see the Aran Islands in Galway Bay, the Maumturks and Twelve Pins mountain ranges to the north in County Galway, and Loop Head to the south.',
        shortDescription: 'Experience the dramatic beauty of Ireland\'s coastline.',
        location: 'County Clare, Ireland',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Entry to the Cliffs of Moher Visitor Experience',
            'Guided coastal walk',
            'Visit to the Burren',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Emerald Isle Tours',
                prices: { USD: 300, EUR: 270, GBP: 240, INR: 33000, BDT: 36000, CAD: 390 },
                rating: 4.9
            },
            {
                name: 'Wild Atlantic Ways',
                prices: { USD: 320, EUR: 290, GBP: 255, INR: 35000, BDT: 38500, CAD: 415 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Dromoland Castle Hotel', rating: 5, address: 'Newmarket-on-Fergus, Co. Clare', basePriceUSD: 500 },
            { name: 'Gregans Castle Hotel', rating: 4.5, address: 'Ballyvaughan, Co. Clare', basePriceUSD: 300 },
            { name: 'Vaughan Lodge Hotel', rating: 4, address: 'Lahinch, Co. Clare', basePriceUSD: 200 }
        ]
    },
    {
        id: 'spot-11',
        title: 'Acropolis of Athens, Athens',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Parthenon_on_the_Acropolis.jpg/1920px-Parthenon_on_the_Acropolis.jpg',
        description: 'An ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon.',
        shortDescription: 'Discover the cradle of Western civilization.',
        location: 'Athens, Greece',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of the Acropolis and Parthenon',
            'Visit to the Acropolis Museum',
            'Walking tour of Plaka',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Hellenic Adventures',
                prices: { USD: 450, EUR: 400, GBP: 350, INR: 50000, BDT: 55000, CAD: 580 },
                rating: 4.8
            },
            {
                name: 'Mythical Greece Tours',
                prices: { USD: 470, EUR: 420, GBP: 360, INR: 52000, BDT: 58000, CAD: 600 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Grande Bretagne', rating: 5, address: '1 Vasileos Georgiou A, Syntagma Square, 105 64 Athens', basePriceUSD: 600 },
            { name: 'King George', rating: 5, address: '3 Vasileos Georgiou A, Syntagma Square, 105 64 Athens', basePriceUSD: 550 },
            { name: 'Electra Metropolis', rating: 5, address: '15 Mitropoleos, 105 57 Athens', basePriceUSD: 400 }
        ]
    },
    {
        id: 'spot-12',
        title: 'Canals of Amsterdam, Amsterdam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Amsterdam_Canal_-_2017.jpg/1920px-Amsterdam_Canal_-_2017.jpg',
        description: 'Amsterdam\'s 17th-century canals, a UNESCO World Heritage site, are a symbol of the city. A canal cruise is one of the best ways to see the city\'s historic architecture.',
        shortDescription: 'Explore the charming canals of the Venice of the North.',
        location: 'Amsterdam, Netherlands',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Canal cruise',
            'Visit to the Anne Frank House',
            'Entry to the Rijksmuseum',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Dutch Delight Tours',
                prices: { USD: 480, EUR: 430, GBP: 380, INR: 53000, BDT: 59000, CAD: 620 },
                rating: 4.8
            },
            {
                name: 'Amsterdam Adventures',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Waldorf Astoria Amsterdam', rating: 5, address: 'Herengracht 542-556, 1017 CG Amsterdam', basePriceUSD: 900 },
            { name: 'The Dylan Amsterdam', rating: 5, address: 'Keizersgracht 384, 1016 GB Amsterdam', basePriceUSD: 800 },
            { name: 'Pulitzer Amsterdam', rating: 5, address: 'Prinsengracht 323, 1016 GZ Amsterdam', basePriceUSD: 700 }
        ]
    },
	{
        id: 'spot-13',
        title: 'Plitvice Lakes National Park, Croatia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Plitvice_Lakes_National_Park_September_2013.jpg/1920px-Plitvice_Lakes_National_Park_September_2013.jpg',
        description: 'A UNESCO World Heritage site, Plitvice Lakes National Park is renowned for its 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon. Walkways and hiking trails wind around and across the water, and an electric boat links the 12 upper and 4 lower lakes.',
        shortDescription: 'Discover a paradise of cascading waterfalls and turquoise lakes.',
        location: 'Plitvice, Croatia',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Entry to Plitvice Lakes National Park',
            'Guided walking tour',
            'Electric boat ride',
            'Accommodation with breakfast'
        ],
        agencies: [
            {
                name: 'Adriatic Gems',
                prices: { USD: 300, EUR: 270, GBP: 240, INR: 33000, BDT: 36000, CAD: 390 },
                rating: 4.9
            },
            {
                name: 'Croatian Trails',
                prices: { USD: 320, EUR: 290, GBP: 255, INR: 35000, BDT: 38500, CAD: 415 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Hotel Jezero', rating: 3, address: 'Plitvice Selo 81, 53231 Plitvička Jezera', basePriceUSD: 150 },
            { name: 'Ethno Houses Plitvica Selo', rating: 4, address: 'Plitvica Selo 66/1, 53231 Plitvička Jezera', basePriceUSD: 200 },
            { name: 'Hotel Degenija', rating: 4, address: 'Selište Drežničko 81, 47245 Rakovica', basePriceUSD: 180 }
        ]
    },
    {
        id: 'spot-14',
        title: 'Sagrada Familia, Barcelona',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Santuario_de_la_Sagrada_Familia.jpg/1920px-Santuario_de_la_Sagrada_Familia.jpg',
        description: 'A large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site.',
        shortDescription: 'Marvel at Gaudí\'s unfinished masterpiece.',
        location: 'Barcelona, Spain',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Skip-the-line entry to Sagrada Familia',
            'Guided tour of the basilica',
            'Access to the towers',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Barcelona Vibes',
                prices: { USD: 350, EUR: 315, GBP: 280, INR: 38500, BDT: 42000, CAD: 455 },
                rating: 4.8
            },
            {
                name: 'Catalan Adventures',
                prices: { USD: 370, EUR: 330, GBP: 295, INR: 40500, BDT: 44500, CAD: 480 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Arts Barcelona', rating: 5, address: 'Marina 19-21, 08005 Barcelona', basePriceUSD: 600 },
            { name: 'Mandarin Oriental, Barcelona', rating: 5, address: 'Passeig de Gràcia, 38-40, 08007 Barcelona', basePriceUSD: 700 },
            { name: 'W Barcelona', rating: 5, address: 'Plaça de la Rosa dels Vents, 1, 08039 Barcelona', basePriceUSD: 500 }
        ]
    },
    {
        id: 'spot-15',
        title: 'Matterhorn, Switzerland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Matterhorn_from_the_Stellisee_2.jpg/1920px-Matterhorn_from_the_Stellisee_2.jpg',
        description: 'A large, near-symmetrical pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres high, making it one of the highest summits in the Alps and Europe.',
        shortDescription: 'Conquer the iconic peak of the Swiss Alps.',
        location: 'Zermatt, Switzerland',
        duration: '4 Days / 3 Nights',
        inclusions: [
            'Guided climb to the summit',
            'Accommodation in a mountain hut',
            'All meals during the climb',
            'Glacier training'
        ],
        agencies: [
            {
                name: 'Swiss Alpine Guides',
                prices: { USD: 2500, EUR: 2250, GBP: 2000, INR: 275000, BDT: 300000, CAD: 3250 },
                rating: 4.9
            },
            {
                name: 'Zermatt Mountaineering',
                prices: { USD: 2600, EUR: 2350, GBP: 2100, INR: 285000, BDT: 310000, CAD: 3350 },
                rating: 4.8
            }
        ],
        hotels: [
            { name: 'The Omnia', rating: 5, address: 'Auf dem Fels, 3920 Zermatt', basePriceUSD: 800 },
            { name: 'Mont Cervin Palace', rating: 5, address: 'Bahnhofstrasse 31, 3920 Zermatt', basePriceUSD: 700 },
            { name: 'Cervo Mountain Resort', rating: 5, address: 'Riedweg 156, 3920 Zermatt', basePriceUSD: 600 }
        ]
    },
    {
        id: 'spot-16',
        title: 'The Blue Lagoon, Iceland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Blue_Lagoon_Iceland_2.jpg/1920px-Blue_Lagoon_Iceland_2.jpg',
        description: 'A geothermal spa in southwestern Iceland. The spa is located in a lava field near Grindavík and in front of Mount Þorbjörn on Reykjanes Peninsula, in a location favourable for geothermal power, and is supplied by water used in the nearby Svartsengi geothermal power station.',
        shortDescription: 'Relax in the geothermal waters of the Blue Lagoon.',
        location: 'Grindavík, Iceland',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Comfort entrance to the Blue Lagoon',
            'Silica mud mask',
            'Use of towel',
            'First drink of your choice'
        ],
        agencies: [
            {
                name: 'Icelandic Escapes',
                prices: { USD: 200, EUR: 180, GBP: 160, INR: 22000, BDT: 24000, CAD: 260 },
                rating: 4.7
            },
            {
                name: 'Nordic Retreats',
                prices: { USD: 220, EUR: 200, GBP: 180, INR: 24000, BDT: 26000, CAD: 280 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'The Retreat at Blue Lagoon', rating: 5, address: 'Norðurljósavegur, 240 Grindavík', basePriceUSD: 1500 },
            { name: 'Silica Hotel', rating: 4.5, address: 'Norðurljósavegur, 240 Grindavík', basePriceUSD: 700 },
            { name: 'Northern Light Inn', rating: 4, address: 'Norðurljósavegur 1, 240 Grindavík', basePriceUSD: 300 }
        ]
    },
    {
        id: 'spot-17',
        title: 'Dubrovnik, Croatia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dubrovnik_from_the_air.jpg/1920px-Dubrovnik_from_the_air.jpg',
        description: 'A city in southern Croatia fronting the Adriatic Sea. It\'s known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s Palace, now a history museum.',
        shortDescription: 'Walk the ancient walls of the Pearl of the Adriatic.',
        location: 'Dubrovnik, Croatia',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of the Old Town',
            'Walk on the city walls',
            'Cable car to Mount Srđ',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Dalmatian Discovery',
                prices: { USD: 400, EUR: 360, GBP: 320, INR: 44000, BDT: 48000, CAD: 520 },
                rating: 4.8
            },
            {
                name: 'Adriatic Adventures',
                prices: { USD: 420, EUR: 380, GBP: 340, INR: 46000, BDT: 50000, CAD: 540 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Excelsior', rating: 5, address: 'Frana Supila 12, 20000 Dubrovnik', basePriceUSD: 500 },
            { name: 'Villa Dubrovnik', rating: 5, address: 'Vlaha Bukovca 6, 20000 Dubrovnik', basePriceUSD: 600 },
            { name: 'Hotel Bellevue Dubrovnik', rating: 5, address: 'Pera Čingrije 7, 20000 Dubrovnik', basePriceUSD: 400 }
        ]
    },
    {
        id: 'spot-18',
        title: 'Sintra, Portugal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Pena_Palace_in_Sintra_Portugal_-_2017.jpg/1920px-Pena_Palace_in_Sintra_Portugal_-_2017.jpg',
        description: 'A resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon. A longtime royal sanctuary, its forested terrain is studded with pastel-colored villas and palaces. The Moorish- and Manueline-style Sintra National Palace is distinguished by dramatic twin chimneys and elaborate tilework. The 19th-century Pena National Palace is known for a whimsical design and sweeping views.',
        shortDescription: 'Explore the fairytale palaces and castles of Sintra.',
        location: 'Sintra, Portugal',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Skip-the-line entry to Pena Palace',
            'Visit to Quinta da Regaleira',
            'Guided tour of the historic center',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Lusitanian Journeys',
                prices: { USD: 300, EUR: 270, GBP: 240, INR: 33000, BDT: 36000, CAD: 390 },
                rating: 4.8
            },
            {
                name: 'Portugal Pathways',
                prices: { USD: 320, EUR: 290, GBP: 255, INR: 35000, BDT: 38500, CAD: 415 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Tivoli Palácio de Seteais', rating: 5, address: 'Av. Barbosa du Bocage 8, 2710-517 Sintra', basePriceUSD: 400 },
            { name: 'Penha Longa Resort', rating: 5, address: 'Estrada da Lagoa Azul, 2714-511 Sintra', basePriceUSD: 300 },
            { name: 'Sintra Marmoris Palace', rating: 5, address: 'R. Dr. Alfredo da Costa 24, 2710-524 Sintra', basePriceUSD: 350 }
        ]
    },
    {
        id: 'spot-19',
        title: 'Hallstatt, Austria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Hallstatt_and_Hallst%C3%A4tter_See_from_Salzberg.jpg/1920px-Hallstatt_and_Hallst%C3%A4tter_See_from_Salzberg.jpg',
        description: 'A village on Lake Hallstatt\'s western shore in Austria\'s mountainous Salzkammergut region. Its 16th-century Alpine houses and alleyways are home to cafes and shops. A funicular railway connects to Salzwelten, an ancient salt mine with a subterranean salt lake, and to the Skywalk Hallstatt viewing platform.',
        shortDescription: 'Discover the picturesque charm of an Austrian lakeside village.',
        location: 'Hallstatt, Austria',
        duration: '2 Days / 1 Night',
        inclusions: [
            'Visit to the Hallstatt Skywalk',
            'Tour of the Salzwelten salt mine',
            'Boat trip on Lake Hallstatt',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Alpine Adventures',
                prices: { USD: 350, EUR: 315, GBP: 280, INR: 38500, BDT: 42000, CAD: 455 },
                rating: 4.9
            },
            {
                name: 'Austrian Escapes',
                prices: { USD: 370, EUR: 330, GBP: 295, INR: 40500, BDT: 44500, CAD: 480 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Seehotel Grüner Baum', rating: 4, address: 'Marktpl. 104, 4830 Hallstatt', basePriceUSD: 300 },
            { name: 'Heritage Hotel Hallstatt', rating: 4, address: 'Landungspl. 101, 4830 Hallstatt', basePriceUSD: 250 },
            { name: 'Hallstatt Hideaway', rating: 4.5, address: 'Dr.-Friedrich-Morton-Weg 24, 4830 Hallstatt', basePriceUSD: 280 }
        ]
    },
    {
        id: 'spot-20',
        title: 'Budapest, Hungary',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Parliament_at_blue_hour.jpg/1920px-Budapest_Parliament_at_blue_hour.jpg',
        description: 'Hungary’s capital, is bisected by the River Danube. Its 19th-century Chain Bridge connects the hilly Buda district with flat Pest. A funicular runs up Castle Hill to Buda’s Old Town, where the Budapest History Museum traces city life from Roman times. Trinity Square is home to 13th-century Matthias Church and the turrets of the Fishermen’s Bastion, which offer sweeping views.',
        shortDescription: 'Explore the Pearl of the Danube.',
        location: 'Budapest, Hungary',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of the Hungarian Parliament Building',
            'Visit to Buda Castle',
            'Danube River cruise',
            'Entry to a thermal bath'
        ],
        agencies: [
            {
                name: 'Magyar Marvels',
                prices: { USD: 400, EUR: 360, GBP: 320, INR: 44000, BDT: 48000, CAD: 520 },
                rating: 4.7
            },
            {
                name: 'Budapest Breaks',
                prices: { USD: 420, EUR: 380, GBP: 340, INR: 46000, BDT: 50000, CAD: 540 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Four Seasons Hotel Gresham Palace', rating: 5, address: 'Széchenyi István tér 5-6, 1051 Budapest', basePriceUSD: 600 },
            { name: 'Aria Hotel Budapest', rating: 5, address: 'Hercegprímás u. 5, 1051 Budapest', basePriceUSD: 500 },
            { name: 'The Ritz-Carlton, Budapest', rating: 5, address: 'Erzsébet tér 9-10, 1051 Budapest', basePriceUSD: 550 }
        ]
    },
    {
        id: 'spot-21',
        title: 'Venice, Italy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Venice_in_February_2017_-_1.jpg/1920px-Venice_in_February_2017_-_1.jpg',
        description: 'The capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.',
        shortDescription: 'Get lost in the romantic canals of Venice.',
        location: 'Venice, Italy',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Gondola ride on the Grand Canal',
            'Guided tour of St. Mark\'s Basilica',
            'Visit to the Doge\'s Palace',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Venetian Voyages',
                prices: { USD: 600, EUR: 540, GBP: 480, INR: 66000, BDT: 72000, CAD: 780 },
                rating: 4.8
            },
            {
                name: 'Lagoon Escapes',
                prices: { USD: 630, EUR: 570, GBP: 500, INR: 69000, BDT: 75000, CAD: 810 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'The Gritti Palace', rating: 5, address: 'Campo Santa Maria del Giglio, 2467, 30124 Venezia VE', basePriceUSD: 1200 },
            { name: 'Hotel Danieli', rating: 5, address: 'Riva degli Schiavoni, 4196, 30122 Venezia VE', basePriceUSD: 1000 },
            { name: 'Belmond Hotel Cipriani', rating: 5, address: 'Giudecca 10, 30133 Venezia VE', basePriceUSD: 1500 }
        ]
    },
    {
        id: 'spot-22',
        title: 'Florence, Italy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Firenze_-_Duomo.jpg/1920px-Firenze_-_Duomo.jpg',
        description: 'Capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture. One of its most iconic sights is the Duomo, a cathedral with a terracotta-tiled dome engineered by Brunelleschi and a bell tower by Giotto. The Galleria dell\'Accademia displays Michelangelo’s “David” sculpture. The Uffizi Gallery exhibits Botticelli’s “The Birth of Venus” and da Vinci’s “Annunciation.”',
        shortDescription: 'Immerse yourself in the art and history of the Renaissance.',
        location: 'Florence, Italy',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Skip-the-line entry to the Uffizi Gallery',
            'Guided tour of the Duomo',
            'Visit to the Galleria dell\'Accademia',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Tuscan Treasures',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.9
            },
            {
                name: 'Renaissance Routes',
                prices: { USD: 530, EUR: 480, GBP: 420, INR: 58000, BDT: 63000, CAD: 680 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Four Seasons Hotel Firenze', rating: 5, address: 'Borgo Pinti, 99, 50121 Firenze FI', basePriceUSD: 1000 },
            { name: 'The St. Regis Florence', rating: 5, address: 'Piazza Ognissanti, 1, 50123 Firenze FI', basePriceUSD: 900 },
            { name: 'Hotel Lungarno', rating: 5, address: 'Borgo San Jacopo, 14, 50125 Firenze FI', basePriceUSD: 800 }
        ]
    },
    {
        id: 'spot-23',
        title: 'Lisbon, Portugal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lisbon_Bel%C3%A9m_Tower_2019-10-01.jpg/1920px-Lisbon_Bel%C3%A9m_Tower_2019-10-01.jpg',
        description: 'Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and the Ponte 25 de Abril suspension bridge. Nearby, the National Azulejo Museum displays 5 centuries of decorative ceramic tiles. Just outside Lisbon is a string of Atlantic beaches, from Cascais to Estoril.',
        shortDescription: 'Discover the vibrant culture and history of Lisbon.',
        location: 'Lisbon, Portugal',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Ride on the historic Tram 28',
            'Visit to Belém Tower',
            'Fado music show with dinner',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Lisbon Layers',
                prices: { USD: 400, EUR: 360, GBP: 320, INR: 44000, BDT: 48000, CAD: 520 },
                rating: 4.7
            },
            {
                name: 'Tagus Tours',
                prices: { USD: 430, EUR: 390, GBP: 340, INR: 47000, BDT: 51000, CAD: 550 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Four Seasons Hotel Ritz Lisbon', rating: 5, address: 'R. Rodrigo da Fonseca 88, 1099-039 Lisboa', basePriceUSD: 700 },
            { name: 'Bairro Alto Hotel', rating: 5, address: 'Praça Luís de Camões 2, 1200-243 Lisboa', basePriceUSD: 600 },
            { name: 'Valverde Hotel', rating: 5, address: 'Av. da Liberdade 164, 1250-146 Lisboa', basePriceUSD: 500 }
        ]
    },
    {
        id: 'spot-24',
        title: 'Dublin, Ireland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ha%27penny_Bridge_-_Dublin_-_Ireland.jpg/1920px-Ha%27penny_Bridge_-_Dublin_-_Ireland.jpg',
        description: 'Capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey. Its historic buildings include Dublin Castle, dating to the 13th century, and imposing St Patrick’s Cathedral, founded in 1191. City parks include landscaped St Stephen’s Green and huge Phoenix Park, containing Dublin Zoo. The National Museum of Ireland explores Irish heritage and culture.',
        shortDescription: 'Experience the lively pubs and rich history of Dublin.',
        location: 'Dublin, Ireland',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Tour of the Guinness Storehouse',
            'Visit to Trinity College and the Book of Kells',
            'Live Irish music session in Temple Bar',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Shamrock Shenanigans',
                prices: { USD: 450, EUR: 400, GBP: 350, INR: 50000, BDT: 55000, CAD: 580 },
                rating: 4.8
            },
            {
                name: 'Celtic Connections',
                prices: { USD: 470, EUR: 420, GBP: 360, INR: 52000, BDT: 58000, CAD: 600 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'The Shelbourne', rating: 5, address: '27 St Stephen\'s Green, Dublin 2', basePriceUSD: 500 },
            { name: 'The Merrion Hotel', rating: 5, address: 'Upper Merrion Street, Dublin 2', basePriceUSD: 600 },
            { name: 'The Westbury', rating: 5, address: 'Balgfe Street, Dublin 2', basePriceUSD: 550 }
        ]
    },
    {
        id: 'spot-25',
        title: 'Edinburgh, Scotland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Edinburgh_castle_from_calton_hill.jpg/1920px-Edinburgh_castle_from_calton_hill.jpg',
        description: 'Scotland’s compact, hilly capital. It has a medieval Old Town and elegant Georgian New Town with gardens and neoclassical buildings. Looming over the city is Edinburgh Castle, home to Scotland’s crown jewels and the Stone of Destiny, used in the coronation of Scottish rulers. Arthur’s Seat is an imposing peak in Holyrood Park with sweeping views.',
        shortDescription: 'Explore the historic streets and dramatic landscapes of Edinburgh.',
        location: 'Edinburgh, Scotland',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of Edinburgh Castle',
            'Walk the Royal Mile',
            'Hike up Arthur\'s Seat',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Highland Jaunts',
                prices: { USD: 420, EUR: 380, GBP: 340, INR: 46000, BDT: 50000, CAD: 540 },
                rating: 4.9
            },
            {
                name: 'Scottish Sojourns',
                prices: { USD: 440, EUR: 400, GBP: 350, INR: 48000, BDT: 52000, CAD: 560 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'The Balmoral Hotel', rating: 5, address: '1 Princes St, Edinburgh EH2 2EQ', basePriceUSD: 600 },
            { name: 'Waldorf Astoria Edinburgh - The Caledonian', rating: 5, address: 'Princes St, Edinburgh EH1 2AB', basePriceUSD: 500 },
            { name: 'Cheval Old Town Chambers', rating: 5, address: 'Royal Mile 329, Edinburgh EH1 1PN', basePriceUSD: 550 }
        ]
    },
    {
        id: 'spot-26',
        title: 'Berlin, Germany',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1920px-Brandenburger_Tor_abends.jpg',
        description: 'Germany’s capital, dates to the 13th century. Reminders of the city\'s turbulent 20th-century history include its Holocaust Memorial and the Berlin Wall\'s graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city\'s also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.',
        shortDescription: 'Immerse yourself in the history and vibrant culture of Berlin.',
        location: 'Berlin, Germany',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Visit to the Brandenburg Gate',
            'Tour of the Reichstag Building',
            'Walk along the East Side Gallery',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Berlin Breaks',
                prices: { USD: 380, EUR: 340, GBP: 300, INR: 42000, BDT: 46000, CAD: 500 },
                rating: 4.6
            },
            {
                name: 'German Getaways',
                prices: { USD: 400, EUR: 360, GBP: 320, INR: 44000, BDT: 48000, CAD: 520 },
                rating: 4.4
            }
        ],
        hotels: [
            { name: 'Hotel Adlon Kempinski Berlin', rating: 5, address: 'Unter den Linden 77, 10117 Berlin', basePriceUSD: 500 },
            { name: 'The Ritz-Carlton, Berlin', rating: 5, address: 'Potsdamer Platz 3, 10785 Berlin', basePriceUSD: 450 },
            { name: 'SO/ Berlin Das Stue', rating: 5, address: 'Drakestraße 1, 10787 Berlin', basePriceUSD: 400 }
        ]
    },
    {
        id: 'spot-27',
        title: 'Vienna, Austria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hofburg_-_Michaelerplatz_-_Vienna_-_2019.jpg/1920px-Hofburg_-_Michaelerplatz_-_Vienna_-_2019.jpg',
        description: 'Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence. In the MuseumsQuartier district, historic and contemporary buildings display works by Egon Schiele, Gustav Klimt and other artists.',
        shortDescription: 'Experience the imperial grandeur and musical heritage of Vienna.',
        location: 'Vienna, Austria',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Tour of Schönbrunn Palace',
            'Visit to the Hofburg Palace',
            'Classical music concert',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Vienna Voyages',
                prices: { USD: 450, EUR: 400, GBP: 350, INR: 50000, BDT: 55000, CAD: 580 },
                rating: 4.8
            },
            {
                name: 'Danube Dreams',
                prices: { USD: 470, EUR: 420, GBP: 360, INR: 52000, BDT: 58000, CAD: 600 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Sacher Wien', rating: 5, address: 'Philharmoniker Str. 4, 1010 Wien', basePriceUSD: 700 },
            { name: 'Palais Coburg Hotel Residenz', rating: 5, address: 'Coburgbastei 4, 1010 Wien', basePriceUSD: 800 },
            { name: 'The Ritz-Carlton, Vienna', rating: 5, address: 'Schubertring 5-7, 1010 Wien', basePriceUSD: 600 }
        ]
    },
    {
        id: 'spot-28',
        title: 'Madrid, Spain',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Madrid_-_Plaza_Mayor_-_2021.jpg/1920px-Madrid_-_Plaza_Mayor_-_2021.jpg',
        description: 'Spain’s central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry.',
        shortDescription: 'Experience the vibrant energy and artistic soul of Madrid.',
        location: 'Madrid, Spain',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Skip-the-line entry to the Prado Museum',
            'Guided tour of the Royal Palace',
            'Flamenco show with tapas',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Madrid Marvels',
                prices: { USD: 420, EUR: 380, GBP: 340, INR: 46000, BDT: 50000, CAD: 540 },
                rating: 4.7
            },
            {
                name: 'Iberian Itineraries',
                prices: { USD: 440, EUR: 400, GBP: 350, INR: 48000, BDT: 52000, CAD: 560 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Four Seasons Hotel Madrid', rating: 5, address: 'C. de Sevilla, 3, 28014 Madrid', basePriceUSD: 800 },
            { name: 'Mandarin Oriental, Ritz, Madrid', rating: 5, address: 'Pl. de la Lealtad, 5, 28014 Madrid', basePriceUSD: 900 },
            { name: 'Rosewood Villa Magna', rating: 5, address: 'P.º de la Castellana, 22, 28046 Madrid', basePriceUSD: 700 }
        ]
    },
    {
        id: 'spot-29',
        title: 'Copenhagen, Denmark',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nyhavn_Copenhagen_Denmark.jpg/1920px-Nyhavn_Copenhagen_Denmark.jpg',
        description: 'Denmark’s capital, sits on the coastal islands of Zealand and Amager. It\'s linked to Malmo in southern Sweden by the Öresund Bridge. Indre By, the city\'s historic center, contains Frederiksstaden, an 18th-century rococo district, home to the royal family’s Amalienborg Palace. Nearby is Christiansborg Palace and the Renaissance-era Rosenborg Castle, surrounded by gardens and home to the crown jewels.',
        shortDescription: 'Discover the charming canals and colorful houses of Copenhagen.',
        location: 'Copenhagen, Denmark',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Canal tour from Nyhavn',
            'Visit to Tivoli Gardens',
            'Guided tour of Christiansborg Palace',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Danish Delights',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.8
            },
            {
                name: 'Viking Voyages',
                prices: { USD: 520, EUR: 470, GBP: 420, INR: 57000, BDT: 62000, CAD: 670 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Nimb Hotel', rating: 5, address: 'Bernstorffsgade 5, 1577 København V', basePriceUSD: 800 },
            { name: 'Hotel d\'Angleterre', rating: 5, address: 'Kongens Nytorv 34, 1050 København K', basePriceUSD: 700 },
            { name: '71 Nyhavn Hotel', rating: 5, address: 'Nyhavn 71, 1051 København K', basePriceUSD: 600 }
        ]
    },
    {
        id: 'spot-30',
        title: 'Stockholm, Sweden',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Stockholm_Gamla_Stan_2019_01.jpg/1920px-Stockholm_Gamla_Stan_2019_01.jpg',
        description: 'The capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago. The cobblestone streets and ochre-colored buildings of Gamla Stan (the old town) are home to the 13th-century Storkyrkan Cathedral, the Kungliga Slottet Royal Palace and the Nobel Museum. Ferries and sightseeing boats shuttle passengers between the islands.',
        shortDescription: 'Explore the beautiful islands and historic old town of Stockholm.',
        location: 'Stockholm, Sweden',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Guided tour of Gamla Stan',
            'Visit to the Vasa Museum',
            'Archipelago boat tour',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Swedish Splendors',
                prices: { USD: 480, EUR: 430, GBP: 380, INR: 53000, BDT: 59000, CAD: 620 },
                rating: 4.7
            },
            {
                name: 'Nordic Navigators',
                prices: { USD: 500, EUR: 450, GBP: 400, INR: 55000, BDT: 60000, CAD: 650 },
                rating: 4.5
            }
        ],
        hotels: [
            { name: 'Grand Hôtel Stockholm', rating: 5, address: 'Södra Blasieholmshamnen 8, 103 27 Stockholm', basePriceUSD: 700 },
            { name: 'Ett Hem', rating: 5, address: 'Sköldungagatan 2, 114 27 Stockholm', basePriceUSD: 800 },
            { name: 'Lydmar Hotel', rating: 5, address: 'Södra Blasieholmshamnen 2, 111 48 Stockholm', basePriceUSD: 600 }
        ]
    },
    {
        id: 'spot-31',
        title: 'Helsinki, Finland',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Helsinki_Cathedral_2018.jpg/1920px-Helsinki_Cathedral_2018.jpg',
        description: 'Finland’s southern capital, sits on a peninsula in the Gulf of Finland. Its central avenue, Mannerheimintie, is flanked by institutions including the National Museum, tracing Finnish history from the Stone Age to the present. Also on Mannerheimintie are the imposing Parliament House and Kiasma, a contemporary art museum. Ornate red-brick Uspenski Cathedral overlooks a harbor.',
        shortDescription: 'Discover the vibrant design and seaside charm of Helsinki.',
        location: 'Helsinki, Finland',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Visit to Suomenlinna sea fortress',
            'Guided tour of the city center',
            'Visit to the Temppeliaukio Church (Rock Church)',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Finnish Finds',
                prices: { USD: 460, EUR: 410, GBP: 360, INR: 51000, BDT: 57000, CAD: 600 },
                rating: 4.8
            },
            {
                name: 'Suomi Sojourns',
                prices: { USD: 480, EUR: 430, GBP: 380, INR: 53000, BDT: 59000, CAD: 620 },
                rating: 4.6
            }
        ],
        hotels: [
            { name: 'Hotel Kämp', rating: 5, address: 'Pohjoisesplanadi 29, 00100 Helsinki', basePriceUSD: 500 },
            { name: 'The St. George Hotel', rating: 5, address: 'Yrjönkatu 13, 00120 Helsinki', basePriceUSD: 450 },
            { name: 'Hotel Haven', rating: 5, address: 'Unioninkatu 17, 00130 Helsinki', basePriceUSD: 400 }
        ]
    },
    {
        id: 'spot-32',
        title: 'Oslo, Norway',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Oslo_Opera_House_at_dusk.jpg/1920px-Oslo_Opera_House_at_dusk.jpg',
        description: 'The capital of Norway, sits on the country’s southern coast at the head of the Oslofjord. It’s known for its green spaces and museums. Many of these are on the Bygdøy Peninsula, including the Norwegian Maritime Museum and the Viking Ship Museum, with Viking ships from the 9th century. The Holmenkollbakken is a ski-jumping hill with panoramic views of the fjord. It also has a ski museum.',
        shortDescription: 'Explore the Viking history and modern architecture of Oslo.',
        location: 'Oslo, Norway',
        duration: '3 Days / 2 Nights',
        inclusions: [
            'Visit to the Viking Ship Museum',
            'Walk on the roof of the Oslo Opera House',
            'Guided tour of Vigeland Park',
            'Daily breakfast'
        ],
        agencies: [
            {
                name: 'Norwegian Trails',
                prices: { USD: 520, EUR: 470, GBP: 420, INR: 57000, BDT: 62000, CAD: 670 },
                rating: 4.9
            },
            {
                name: 'Fjord Explorers',
                prices: { USD: 540, EUR: 490, GBP: 430, INR: 59000, BDT: 64000, CAD: 690 },
                rating: 4.7
            }
        ],
        hotels: [
            { name: 'Grand Hotel', rating: 5, address: 'Karl Johans gate 31, 0159 Oslo', basePriceUSD: 400 },
            { name: 'The Thief', rating: 5, address: 'Landgangen 1, 0252 Oslo', basePriceUSD: 500 },
            { name: 'Amerikalinjen', rating: 5, address: 'Jernbanetorget 2, 0154 Oslo', basePriceUSD: 450 }
        ]
    }
];

const seedDB = async () => {
    await connectDB();
    await Tour.deleteMany({});
    await Tour.insertMany(touristSpots);
    console.log('Data Imported!');
    process.exit();
};

seedDB();
