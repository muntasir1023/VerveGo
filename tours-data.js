const toursData = [
  {
    "_id": "1",
    "title": "Mystical Bali Adventure",
    "image": "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960",
    "description": "Explore the magical island of Bali, from its serene temples to its vibrant coral reefs. This tour offers a perfect blend of cultural immersion and natural beauty, taking you through lush rice paddies, sacred monkey forests, and breathtaking volcanic landscapes. Experience the unique artistry of Ubud, the lively beaches of Seminyak, and the tranquil shores of Nusa Dua. Whether you're seeking spiritual enlightenment, thrilling adventures, or simply a relaxing getaway, Bali has something for everyone.",
    "shortDescription": "Discover the serene temples and vibrant culture of Bali.",
    "location": "Bali, Indonesia",
    "duration": "10 Days",
    "inclusions": ["Airport transfers", "Guided tours", "Daily breakfast", "Snorkeling gear"],
    "agencies": [
      { "name": "Wanderlust Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1200, "EUR": 1100, "GBP": 950, "INR": 99000, "BDT": 125000, "CAD": 1600 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1500, "EUR": 1380, "GBP": 1180, "INR": 124000, "BDT": 156000, "CAD": 2000 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2100, "EUR": 1932, "GBP": 1659, "INR": 174930, "BDT": 230160, "CAD": 2856 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 550, "GBP": 475, "INR": 49500, "BDT": 62500, "CAD": 800 }, "type": "one-way" }
      ] },
      { "name": "Island Hoppers", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 950, "EUR": 874, "GBP": 750, "INR": 79135, "BDT": 103970, "CAD": 1292 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1250, "EUR": 1150, "GBP": 990, "INR": 103000, "BDT": 130000, "CAD": 1650 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1550, "EUR": 1420, "GBP": 1220, "INR": 128000, "BDT": 161000, "CAD": 2050 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2150, "EUR": 1978, "GBP": 1698, "INR": 179065, "BDT": 235640, "CAD": 2924 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Bali Dreams", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 880, "EUR": 809, "GBP": 695, "INR": 73290, "BDT": 96448, "CAD": 1197 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1180, "EUR": 1080, "GBP": 930, "INR": 97000, "BDT": 123000, "CAD": 1580 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1330, "EUR": 1224, "GBP": 1051, "INR": 110789, "BDT": 145888, "CAD": 1809 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1480, "EUR": 1360, "GBP": 1160, "INR": 122000, "BDT": 154000, "CAD": 1980 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2080, "EUR": 1914, "GBP": 1643, "INR": 173264, "BDT": 227968, "CAD": 2829 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 540, "GBP": 465, "INR": 48500, "BDT": 61500, "CAD": 790 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Royal Pita Maha", "rating": 4.9, "address": "Ubud, Bali", "basePriceUSD": 250 },
      { "name": "Mulia Resort & Villas", "rating": 4.8, "address": "Nusa Dua, Bali", "basePriceUSD": 220 },
      { "name": "W Bali - Seminyak", "rating": 4.7, "address": "Seminyak, Bali", "basePriceUSD": 280 }
    ]
  },
  {
    "_id": "2",
    "title": "Enchanting Paris Escape",
    "image": "https://www.holidayscapesug.com/static/images/cruise-boat-night-paris-france-shutterstock_702361495.jpg",
    "description": "Experience the romance and charm of Paris, the City of Light. This tour will take you to iconic landmarks such as the Eiffel Tower, the Louvre Museum, and the Notre-Dame Cathedral. Stroll along the Seine, indulge in delicious pastries, and immerse yourself in the city's rich history and art. From the bohemian streets of Montmartre to the chic boutiques of the Champs-Élysées, Paris offers an unforgettable experience for every traveler.",
    "shortDescription": "Discover the romance and iconic landmarks of Paris.",
    "location": "Paris, France",
    "duration": "7 Days",
    "inclusions": ["Museum passes", "Seine river cruise", "Guided city tour", "Daily breakfast"],
    "agencies": [
      { "name": "Parisian Getaways", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1100, "EUR": 1012, "GBP": 869, "INR": 91300, "BDT": 115000, "CAD": 1496 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1500, "EUR": 1380, "GBP": 1180, "INR": 124000, "BDT": 156000, "CAD": 2000 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1800, "EUR": 1656, "GBP": 1422, "INR": 149940, "BDT": 197280, "CAD": 2448 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "French Connection", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 850, "EUR": 782, "GBP": 671, "INR": 70770, "BDT": 93140, "CAD": 1156 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1150, "EUR": 1058, "GBP": 909, "INR": 95435, "BDT": 120340, "CAD": 1564 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1550, "EUR": 1420, "GBP": 1220, "INR": 128000, "BDT": 161000, "CAD": 2050 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1850, "EUR": 1702, "GBP": 1462, "INR": 154175, "BDT": 202940, "CAD": 2516 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "City of Lights Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 780, "EUR": 718, "GBP": 616, "INR": 64974, "BDT": 85548, "CAD": 1061 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1080, "EUR": 994, "GBP": 853, "INR": 89634, "BDT": 117936, "CAD": 1469 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1480, "EUR": 1360, "GBP": 1160, "INR": 122000, "BDT": 154000, "CAD": 1980 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1780, "EUR": 1638, "GBP": 1406, "INR": 148274, "BDT": 195128, "CAD": 2421 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Le Bristol Paris", "rating": 5.0, "address": "112 Rue du Faubourg Saint-Honoré", "basePriceUSD": 800 },
      { "name": "Hotel de Crillon", "rating": 4.9, "address": "10 Place de la Concorde", "basePriceUSD": 750 },
      { "name": "The Peninsula Paris", "rating": 4.9, "address": "19 Avenue Kléber", "basePriceUSD": 780 }
    ]
  },
  {
    "_id": "3",
    "title": "Ancient Wonders of Rome",
    "image": "https://www.agoda.com/wp-content/uploads/2024/08/Colosseum-Rome-Featured-1244x700.jpg",
    "description": "Step back in time and explore the ancient wonders of Rome. Visit the Colosseum, the Roman Forum, and the Pantheon. Marvel at the art of the Vatican City, including St. Peter's Basilica and the Sistine Chapel. Toss a coin in the Trevi Fountain and enjoy authentic Italian cuisine. This tour offers a deep dive into the history, art, and culture of the Eternal City.",
    "shortDescription": "Explore the Colosseum, Vatican City, and ancient ruins.",
    "location": "Rome, Italy",
    "duration": "8 Days",
    "inclusions": ["Vatican City tour", "Colosseum tickets", "Guided historical tours", "Daily breakfast"],
    "agencies": [
      { "name": "Roman Holiday Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 750, "EUR": 690, "GBP": 592, "INR": 62475, "BDT": 82200, "CAD": 1020 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1300, "EUR": 1196, "GBP": 1027, "INR": 108290, "BDT": 142480, "CAD": 1768 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1400, "EUR": 1290, "GBP": 1100, "INR": 116000, "BDT": 146000, "CAD": 1850 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2300, "EUR": 2116, "GBP": 1817, "INR": 191590, "BDT": 252080, "CAD": 3128 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 650, "EUR": 598, "GBP": 514, "INR": 54145, "BDT": 71240, "CAD": 884 }, "type": "one-way" }
      ] },
      { "name": "Eternal City Explorers", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 780, "EUR": 718, "GBP": 616, "INR": 64974, "BDT": 85548, "CAD": 1061 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1450, "EUR": 1330, "GBP": 1140, "INR": 120000, "BDT": 151000, "CAD": 1900 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2350, "EUR": 2162, "GBP": 1856, "INR": 195725, "BDT": 257660, "CAD": 3196 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 675, "EUR": 621, "GBP": 533, "INR": 56228, "BDT": 74000, "CAD": 918 }, "type": "one-way" }
      ] },
      { "name": "Caesar's Travels", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 730, "EUR": 672, "GBP": 577, "INR": 60809, "BDT": 80008, "CAD": 993 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1280, "EUR": 1178, "GBP": 1011, "INR": 106624, "BDT": 140308, "CAD": 1741 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1380, "EUR": 1270, "GBP": 1080, "INR": 114000, "BDT": 144000, "CAD": 1830 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2280, "EUR": 2098, "GBP": 1799, "INR": 189924, "BDT": 249936, "CAD": 3101 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 640, "EUR": 589, "GBP": 506, "INR": 53312, "BDT": 70144, "CAD": 870 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Hotel Hassler Roma", "rating": 4.8, "address": "Piazza della Trinità dei Monti, 6", "basePriceUSD": 600 },
      { "name": "The St. Regis Rome", "rating": 4.9, "address": "Via Vittorio E. Orlando, 3", "basePriceUSD": 650 },
      { "name": "Hotel Eden", "rating": 4.8, "address": "Via Ludovisi, 49", "basePriceUSD": 620 }
    ]
  },
  {
    "_id": "4",
    "title": "Vibrant Tokyo Experience",
    "image": "https://sethlui.com/wp-content/uploads/2025/02/Travel-Tokyo-budget-Temple.webp",
    "description": "Immerse yourself in the vibrant culture of Tokyo. From the bustling streets of Shibuya to the serene gardens of the Imperial Palace, this tour offers a glimpse into the city's unique blend of tradition and modernity. Visit ancient temples, futuristic skyscrapers, and lively markets. Indulge in world-class cuisine and experience the city's renowned hospitality.",
    "shortDescription": "Experience the unique blend of tradition and modernity in Tokyo.",
    "location": "Tokyo, Japan",
    "duration": "9 Days",
    "inclusions": ["Sushi making class", "Sumo wrestling stable visit", "Guided city tour", "Daily breakfast"],
    "agencies": [
      { "name": "Tokyo Drift Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1800, "EUR": 1656, "GBP": 1422, "INR": 149940, "BDT": 197280, "CAD": 2448 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 2000, "EUR": 1840, "GBP": 1570, "INR": 166000, "BDT": 208000, "CAD": 2650 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2100, "EUR": 1932, "GBP": 1659, "INR": 174930, "BDT": 230160, "CAD": 2856 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "one-way" }
      ] },
      { "name": "Cherry Blossom Travels", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1850, "EUR": 1702, "GBP": 1462, "INR": 154175, "BDT": 202940, "CAD": 2516 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 2050, "EUR": 1880, "GBP": 1610, "INR": 170000, "BDT": 213000, "CAD": 2700 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2150, "EUR": 1978, "GBP": 1698, "INR": 179065, "BDT": 235640, "CAD": 2924 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 825, "EUR": 759, "GBP": 652, "INR": 68723, "BDT": 90470, "CAD": 1122 }, "type": "one-way" }
      ] },
      { "name": "Samurai Trails", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1780, "EUR": 1638, "GBP": 1406, "INR": 148274, "BDT": 195128, "CAD": 2421 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1980, "EUR": 1820, "GBP": 1550, "INR": 164000, "BDT": 206000, "CAD": 2630 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2080, "EUR": 1914, "GBP": 1643, "INR": 173264, "BDT": 227968, "CAD": 2829 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 790, "EUR": 727, "GBP": 624, "INR": 65807, "BDT": 86584, "CAD": 1074 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Park Hyatt Tokyo", "rating": 4.8, "address": "3-7-1-2 Nishi-Shinjuku", "basePriceUSD": 700 },
      { "name": "Aman Tokyo", "rating": 4.9, "address": "1-5-6 Otemachi", "basePriceUSD": 800 },
      { "name": "Mandarin Oriental, Tokyo", "rating": 4.8, "address": "2-1-1 Nihonbashi Muromachi", "basePriceUSD": 750 }
    ]
  },
  {
    "_id": "5",
    "title": "Spectacular Sydney Getaway",
    "image": "https://www.vanztravel.com/wp-content/uploads/2025/07/johnny-bhalla-DLbCETd599Y-unsplash_resultat_1.webp",
    "description": "Discover the stunning city of Sydney, from its world-famous Opera House to the iconic Harbour Bridge. Relax on the golden sands of Bondi Beach, explore the historic Rocks district, and take a ferry to Manly. This tour offers a perfect mix of city sightseeing, beach relaxation, and outdoor adventures in one of Australia's most beautiful cities.",
    "shortDescription": "Explore the iconic Opera House and Bondi Beach.",
    "location": "Sydney, Australia",
    "duration": "8 Days",
    "inclusions": ["Sydney Opera House tour", "Harbour Bridge climb", "Bondi Beach surf lesson", "Daily breakfast"],
    "agencies": [
      { "name": "Aussie Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1300, "EUR": 1196, "GBP": 1027, "INR": 108290, "BDT": 142480, "CAD": 1768 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1800, "EUR": 1650, "GBP": 1410, "INR": 149000, "BDT": 187000, "CAD": 2400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2800, "EUR": 2576, "GBP": 2212, "INR": 233240, "BDT": 306880, "CAD": 3808 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "Down Under Deals", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1850, "EUR": 1700, "GBP": 1450, "INR": 153000, "BDT": 192000, "CAD": 2450 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2850, "EUR": 2622, "GBP": 2251, "INR": 237375, "BDT": 312420, "CAD": 3876 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "Sydney Sights", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1280, "EUR": 1178, "GBP": 1011, "INR": 106624, "BDT": 140308, "CAD": 1741 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1780, "EUR": 1630, "GBP": 1390, "INR": 147000, "BDT": 185000, "CAD": 2380 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2780, "EUR": 2558, "GBP": 2196, "INR": 231574, "BDT": 304792, "CAD": 3781 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Four Seasons Hotel Sydney", "rating": 4.7, "address": "199 George St", "basePriceUSD": 400 },
      { "name": "Shangri-La Hotel, Sydney", "rating": 4.6, "address": "176 Cumberland St", "basePriceUSD": 380 },
      { "name": "The Langham, Sydney", "rating": 4.7, "address": "89-113 Kent St", "basePriceUSD": 420 }
    ]
  },
  {
    "_id": "6",
    "title": "Majestic Machu Picchu",
    "image": "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaHUrcGljY2h1fGVufDB8fDB8fHww",
    "description": "Embark on a journey to the lost city of the Incas, Machu Picchu. Hike the ancient Inca Trail, witness breathtaking mountain scenery, and explore the mysterious ruins of this UNESCO World Heritage site. This tour offers an unforgettable adventure for history buffs and nature lovers alike.",
    "shortDescription": "Hike the Inca Trail to the lost city of Machu Picchu.",
    "location": "Cusco, Peru",
    "duration": "7 Days",
    "inclusions": ["Inca Trail permit", "Guided tour of Machu Picchu", "Porter service", "All meals during hike"],
    "agencies": [
      { "name": "Inca Trail Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1600, "EUR": 1470, "GBP": 1250, "INR": 132000, "BDT": 166000, "CAD": 2150 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1900, "EUR": 1748, "GBP": 1501, "INR": 158270, "BDT": 208240, "CAD": 2584 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2700, "EUR": 2484, "GBP": 2133, "INR": 224910, "BDT": 295920, "CAD": 3672 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "Andean Peaks", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 950, "EUR": 874, "GBP": 750, "INR": 79135, "BDT": 103970, "CAD": 1292 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1650, "EUR": 1520, "GBP": 1290, "INR": 136000, "BDT": 171000, "CAD": 2200 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1950, "EUR": 1794, "GBP": 1540, "INR": 162405, "BDT": 213700, "CAD": 2652 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2750, "EUR": 2530, "GBP": 2173, "INR": 229075, "BDT": 301400, "CAD": 3740 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "Peru Pathfinders", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 880, "EUR": 809, "GBP": 695, "INR": 73290, "BDT": 96448, "CAD": 1197 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1580, "EUR": 1450, "GBP": 1230, "INR": 130000, "BDT": 164000, "CAD": 2130 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1880, "EUR": 1730, "GBP": 1485, "INR": 156604, "BDT": 205984, "CAD": 2557 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2680, "EUR": 2466, "GBP": 2117, "INR": 223244, "BDT": 293888, "CAD": 3645 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Belmond Hotel Monasterio", "rating": 4.8, "address": "Plazoleta Nazarenas 223", "basePriceUSD": 500 },
      { "name": "Inkaterra La Casona", "rating": 4.9, "address": "Plaza Las Nazarenas 211", "basePriceUSD": 550 },
      { "name": "Palacio del Inka", "rating": 4.7, "address": "Plazoleta Santo Domingo 259", "basePriceUSD": 480 }
    ]
  },
  {
    "_id": "7",
    "title": "Serengeti Safari Adventure",
    "image": "https://explorersafari.com/wp-content/uploads/2024/02/serengeti-10.png",
    "description": "Embark on an unforgettable safari adventure in the Serengeti National Park. Witness the Great Migration, spot the 'Big Five,' and experience the raw beauty of the African savanna. This tour offers a chance to connect with nature and create memories that will last a lifetime.",
    "shortDescription": "Witness the Great Migration and spot the 'Big Five'.",
    "location": "Serengeti, Tanzania",
    "duration": "7 Days",
    "inclusions": ["Game drives", "Park fees", "Full board accommodation", "Experienced guide"],
    "agencies": [
      { "name": "Savanna Safaris", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1800, "EUR": 1656, "GBP": 1422, "INR": 149940, "BDT": 197280, "CAD": 2448 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2400, "EUR": 2208, "GBP": 1896, "INR": 199920, "BDT": 262960, "CAD": 3264 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 3000, "EUR": 2760, "GBP": 2350, "INR": 249000, "BDT": 312000, "CAD": 4000 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3500, "EUR": 3220, "GBP": 2765, "INR": 291550, "BDT": 383600, "CAD": 4760 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 5000, "EUR": 4600, "GBP": 3950, "INR": 416500, "BDT": 548000, "CAD": 6800 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "one-way" }
      ] },
      { "name": "Wilderness Explorers", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1850, "EUR": 1702, "GBP": 1462, "INR": 154175, "BDT": 202940, "CAD": 2516 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2450, "EUR": 2254, "GBP": 1936, "INR": 204155, "BDT": 268520, "CAD": 3332 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 3100, "EUR": 2850, "GBP": 2420, "INR": 257000, "BDT": 322000, "CAD": 4100 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3600, "EUR": 3312, "GBP": 2844, "INR": 299880, "BDT": 394560, "CAD": 4896 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 5100, "EUR": 4692, "GBP": 4029, "INR": 424830, "BDT": 558960, "CAD": 6936 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "one-way" }
      ] },
      { "name": "Tanzania Trails", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1780, "EUR": 1638, "GBP": 1406, "INR": 148274, "BDT": 195128, "CAD": 2421 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2380, "EUR": 2189, "GBP": 1879, "INR": 198254, "BDT": 260848, "CAD": 3237 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2950, "EUR": 2710, "GBP": 2300, "INR": 245000, "BDT": 307000, "CAD": 3950 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3450, "EUR": 3174, "GBP": 2726, "INR": 287415, "BDT": 378040, "CAD": 4692 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4950, "EUR": 4554, "GBP": 3911, "INR": 412365, "BDT": 542460, "CAD": 6732 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Four Seasons Safari Lodge Serengeti", "rating": 4.9, "address": "Serengeti National Park", "basePriceUSD": 1200 },
      { "name": "Singita Grumeti", "rating": 5.0, "address": "Grumeti Reserves", "basePriceUSD": 1500 },
      { "name": "andBeyond Klein's Camp", "rating": 4.9, "address": "Serengeti National Park", "basePriceUSD": 1300 }
    ]
  },
  {
    "_id": "8",
    "title": "Grand Canyon Expedition",
    "image": "https://expeditionportal.com/media/2017/09/file63-1.jpg",
    "description": "Explore the majestic Grand Canyon, one of the seven natural wonders of the world. Hike along the rim, take a helicopter tour for a bird's-eye view, and watch the sunset paint the canyon walls in breathtaking colors. This tour is an adventure into the heart of the American Southwest.",
    "shortDescription": "Hike, fly, and watch the sunset over the Grand Canyon.",
    "location": "Arizona, USA",
    "duration": "5 Days",
    "inclusions": ["Helicopter tour", "Guided rim hike", "Sunset viewing", "National Park entry"],
    "agencies": [
      { "name": "Canyon Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1100, "EUR": 1010, "GBP": 860, "INR": 91000, "BDT": 114000, "CAD": 1450 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1300, "EUR": 1196, "GBP": 1027, "INR": 108290, "BDT": 142480, "CAD": 1768 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2400, "EUR": 2208, "GBP": 1896, "INR": 199920, "BDT": 262960, "CAD": 3264 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 550, "EUR": 506, "GBP": 435, "INR": 45815, "BDT": 60280, "CAD": 748 }, "type": "one-way" }
      ] },
      { "name": "Southwest Explorers", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 750, "EUR": 690, "GBP": 592, "INR": 62475, "BDT": 82200, "CAD": 1020 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1150, "EUR": 1060, "GBP": 900, "INR": 95000, "BDT": 119000, "CAD": 1500 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2450, "EUR": 2254, "GBP": 1936, "INR": 204155, "BDT": 268520, "CAD": 3332 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 575, "EUR": 529, "GBP": 455, "INR": 47948, "BDT": 63070, "CAD": 782 }, "type": "one-way" }
      ] },
      { "name": "Arizona Trails", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 680, "EUR": 626, "GBP": 537, "INR": 56644, "BDT": 74528, "CAD": 925 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1080, "EUR": 990, "GBP": 840, "INR": 89000, "BDT": 112000, "CAD": 1430 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1280, "EUR": 1178, "GBP": 1011, "INR": 106624, "BDT": 140308, "CAD": 1741 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2380, "EUR": 2189, "GBP": 1879, "INR": 198254, "BDT": 260848, "CAD": 3237 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 540, "EUR": 497, "GBP": 427, "INR": 44982, "BDT": 59184, "CAD": 734 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "El Tovar Hotel", "rating": 4.6, "address": "Grand Canyon Village", "basePriceUSD": 350 },
      { "name": "Bright Angel Lodge", "rating": 4.3, "address": "Grand Canyon Village", "basePriceUSD": 250 },
      { "name": "Yavapai Lodge", "rating": 4.2, "address": "Grand Canyon Village", "basePriceUSD": 200 }
    ]
  },
  {
    "_id": "9",
    "title": "The Great Wall of China",
    "image": "https://whc.unesco.org/uploads/thumbs/site_0438_0035-1200-630-20241024162522.jpg",
    "description": "Walk along the legendary Great Wall of China, a marvel of engineering and a testament to human perseverance. This tour takes you to the most scenic and well-preserved sections of the wall, offering stunning views and a deep sense of history. Explore ancient watchtowers and learn about the dynasties that built this incredible structure.",
    "shortDescription": "Walk along the legendary Great Wall of China.",
    "location": "Beijing, China",
    "duration": "6 Days",
    "inclusions": ["Great Wall guided tour", "Forbidden City entrance", "Peking duck dinner", "Daily breakfast"],
    "agencies": [
      { "name": "Dragon Treks", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1100, "EUR": 1012, "GBP": 869, "INR": 91300, "BDT": 115000, "CAD": 1496 }, "type": "two-way" },
        { "duration": 6, "price": { "USD": 1300, "EUR": 1200, "GBP": 1020, "INR": 108000, "BDT": 135000, "CAD": 1750 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "China Highlights", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 850, "EUR": 782, "GBP": 671, "INR": 70770, "BDT": 93140, "CAD": 1156 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1150, "EUR": 1058, "GBP": 909, "INR": 95435, "BDT": 120340, "CAD": 1564 }, "type": "two-way" },
        { "duration": 6, "price": { "USD": 1350, "EUR": 1240, "GBP": 1060, "INR": 112000, "BDT": 140000, "CAD": 1800 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Imperial Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 780, "EUR": 718, "GBP": 616, "INR": 64974, "BDT": 85548, "CAD": 1061 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1080, "EUR": 994, "GBP": 853, "INR": 89634, "BDT": 117936, "CAD": 1469 }, "type": "two-way" },
        { "duration": 6, "price": { "USD": 1280, "EUR": 1180, "GBP": 1000, "INR": 106000, "BDT": 133000, "CAD": 1730 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Peninsula Beijing", "rating": 4.7, "address": "8 Goldfish Lane", "basePriceUSD": 400 },
      { "name": "Rosewood Beijing", "rating": 4.8, "address": "Jing Guang Centre", "basePriceUSD": 450 },
      { "name": "Waldorf Astoria Beijing", "rating": 4.7, "address": "5-15 Jinyu Hutong", "basePriceUSD": 420 }
    ]
  },
  {
    "_id": "10",
    "title": "Egyptian Pyramids & Nile Cruise",
    "image": "https://www.nawas.com/wp-content/uploads/2020/08/Great-Pyramids-of-Giza-egypt-nile-river-cruise.jpg",
    "description": "Uncover the mysteries of ancient Egypt with a tour of the Great Pyramids of Giza and a luxurious cruise down the Nile River. Explore magnificent temples, visit the Valley of the Kings, and marvel at the treasures of Tutankhamun. This journey through time is an experience you'll never forget.",
    "shortDescription": "Explore the Pyramids and cruise the Nile River.",
    "location": "Cairo, Egypt",
    "duration": "12 Days",
    "inclusions": ["Nile cruise", "Pyramids of Giza tour", "Valley of the Kings visit", "All meals on cruise"],
    "agencies": [
      { "name": "Nile Explorers", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 2200, "EUR": 2020, "GBP": 1720, "INR": 182000, "BDT": 228000, "CAD": 2950 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "one-way" }
      ] },
      { "name": "Pharaoh's Treasures", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 2250, "EUR": 2070, "GBP": 1760, "INR": 186000, "BDT": 234000, "CAD": 3000 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 825, "EUR": 759, "GBP": 652, "INR": 68723, "BDT": 90470, "CAD": 1122 }, "type": "one-way" }
      ] },
      { "name": "Egypt Dreams", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 2180, "EUR": 2000, "GBP": 1700, "INR": 180000, "BDT": 226000, "CAD": 2930 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 790, "EUR": 727, "GBP": 624, "INR": 65807, "BDT": 86584, "CAD": 1074 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Marriott Mena House, Cairo", "rating": 4.7, "address": "6 Pyramids Road", "basePriceUSD": 300 },
      { "name": "Sofitel Legend Old Cataract Aswan", "rating": 4.8, "address": "Abtal El Tahrir Street", "basePriceUSD": 350 },
      { "name": "Hilton Luxor Resort & Spa", "rating": 4.6, "address": "New Karnak", "basePriceUSD": 280 }
    ]
  },
  {
    "_id": "11",
    "title": "New Zealand's Natural Wonders",
    "image": "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2023/06/Bay-of-Islands.jpg",
    "description": "From the dramatic fjords of Milford Sound to the geothermal wonders of Rotorua, New Zealand is a paradise for nature lovers. This tour will take you through stunning landscapes, including glaciers, rainforests, and pristine beaches. Experience Maori culture, go bungee jumping in Queenstown, and explore the locations where 'The Lord of the Rings' was filmed.",
    "shortDescription": "Explore fjords, glaciers, and geothermal wonders.",
    "location": "Queenstown, New Zealand",
    "duration": "14 Days",
    "inclusions": ["Milford Sound cruise", "Hobbiton movie set tour", "Maori cultural experience", "Glacier hike"],
    "agencies": [
      { "name": "Kiwi Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 3500, "EUR": 3220, "GBP": 2740, "INR": 290000, "BDT": 364000, "CAD": 4700 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4500, "EUR": 4140, "GBP": 3555, "INR": 374850, "BDT": 493200, "CAD": 6120 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "one-way" }
      ] },
      { "name": "Middle-earth Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 3600, "EUR": 3310, "GBP": 2820, "INR": 298000, "BDT": 374000, "CAD": 4800 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4600, "EUR": 4232, "GBP": 3634, "INR": 383180, "BDT": 503840, "CAD": 6256 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "one-way" }
      ] },
      { "name": "Pure NZ", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 3450, "EUR": 3170, "GBP": 2700, "INR": 286000, "BDT": 359000, "CAD": 4650 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4450, "EUR": 4094, "GBP": 3517, "INR": 370715, "BDT": 487660, "CAD": 6052 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Matakauri Lodge", "rating": 4.9, "address": "569 Glenorchy Road", "basePriceUSD": 1000 },
      { "name": "Huka Lodge", "rating": 4.8, "address": "Huka Falls Road", "basePriceUSD": 1200 },
      { "name": "Eichardt's Private Hotel", "rating": 4.9, "address": "Marine Parade", "basePriceUSD": 950 }
    ]
  },
  {
    "_id": "12",
    "title": "Canadian Rockies Explorer",
    "image": "https://www.odysseys-unlimited.com/wp-content/uploads/2023/05/Lead-AdobeStock_249908434-1536x1024.jpeg",
    "description": "Journey through the breathtaking landscapes of the Canadian Rockies. Visit the turquoise lakes of Banff and Jasper National Parks, drive the scenic Icefields Parkway, and marvel at the majestic glaciers. This tour is an outdoor enthusiast's dream, with opportunities for hiking, wildlife viewing, and kayaking.",
    "shortDescription": "Discover the turquoise lakes and majestic glaciers of the Rockies.",
    "location": "Banff, Canada",
    "duration": "10 Days",
    "inclusions": ["Icefields Parkway tour", "Lake Louise visit", "Wildlife viewing excursions", "National Park passes"],
    "agencies": [
      { "name": "Rocky Mountain Highs", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2100, "EUR": 1932, "GBP": 1659, "INR": 174930, "BDT": 230160, "CAD": 2856 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2500, "EUR": 2300, "GBP": 1960, "INR": 207000, "BDT": 260000, "CAD": 3350 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3500, "EUR": 3220, "GBP": 2765, "INR": 291550, "BDT": 383600, "CAD": 4760 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "one-way" }
      ] },
      { "name": "Canada By Design", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2150, "EUR": 1978, "GBP": 1698, "INR": 179065, "BDT": 235640, "CAD": 2924 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2600, "EUR": 2390, "GBP": 2030, "INR": 215000, "BDT": 270000, "CAD": 3450 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3600, "EUR": 3312, "GBP": 2844, "INR": 299880, "BDT": 394560, "CAD": 4896 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 925, "EUR": 851, "GBP": 731, "INR": 77008, "BDT": 101330, "CAD": 1258 }, "type": "one-way" }
      ] },
      { "name": "True North Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2080, "EUR": 1914, "GBP": 1643, "INR": 173264, "BDT": 227968, "CAD": 2829 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2450, "EUR": 2250, "GBP": 1920, "INR": 203000, "BDT": 255000, "CAD": 3300 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3450, "EUR": 3174, "GBP": 2726, "INR": 287415, "BDT": 378040, "CAD": 4692 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 890, "EUR": 819, "GBP": 703, "INR": 74137, "BDT": 97544, "CAD": 1210 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Fairmont Banff Springs", "rating": 4.6, "address": "405 Spray Ave", "basePriceUSD": 600 },
      { "name": "Fairmont Chateau Lake Louise", "rating": 4.7, "address": "111 Lake Louise Dr", "basePriceUSD": 700 },
      { "name": "Jasper Park Lodge", "rating": 4.5, "address": "Old Lodge Road", "basePriceUSD": 550 }
    ]
  },
  {
    "_id": "13",
    "title": "Iceland's Northern Lights",
    "image": "https://allthingsiceland.com/wp-content/uploads/2022/09/4.jpg",
    "description": "Chase the magical Northern Lights in the land of fire and ice. This tour will take you to Iceland's most stunning natural wonders, including glaciers, geysers, and waterfalls. Relax in the Blue Lagoon, explore ice caves, and witness the aurora borealis dance across the winter sky.",
    "shortDescription": "Chase the Northern Lights and explore glaciers and geysers.",
    "location": "Reykjavik, Iceland",
    "duration": "7 Days",
    "inclusions": ["Northern Lights tour", "Blue Lagoon entrance", "Golden Circle tour", "Ice cave exploration"],
    "agencies": [
      { "name": "Icelandic Sagas", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2800, "EUR": 2580, "GBP": 2200, "INR": 232000, "BDT": 291000, "CAD": 3750 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3300, "EUR": 3036, "GBP": 2607, "INR": 274890, "BDT": 361680, "CAD": 4488 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4800, "EUR": 4416, "GBP": 3792, "INR": 399840, "BDT": 526080, "CAD": 6528 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "one-way" }
      ] },
      { "name": "Arctic Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2900, "EUR": 2670, "GBP": 2270, "INR": 240000, "BDT": 301000, "CAD": 3850 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3400, "EUR": 3128, "GBP": 2686, "INR": 283220, "BDT": 372560, "CAD": 4624 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4900, "EUR": 4508, "GBP": 3871, "INR": 408170, "BDT": 537240, "CAD": 6664 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "one-way" }
      ] },
      { "name": "Nordic Visitor", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2750, "EUR": 2530, "GBP": 2160, "INR": 228000, "BDT": 286000, "CAD": 3700 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3250, "EUR": 2990, "GBP": 2568, "INR": 270755, "BDT": 356140, "CAD": 4420 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4750, "EUR": 4370, "GBP": 3753, "INR": 395705, "BDT": 520580, "CAD": 6460 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Retreat at Blue Lagoon", "rating": 4.8, "address": "Norðurljósavegur", "basePriceUSD": 1000 },
      { "name": "Hotel Rangá", "rating": 4.7, "address": "Suðurlandsvegur", "basePriceUSD": 800 },
      { "name": "Ion Adventure Hotel", "rating": 4.6, "address": "Nesjavellir", "basePriceUSD": 750 }
    ]
  },
  {
    "_id": "14",
    "title": "Colors of Morocco",
    "image": "https://assets.tourhero.com/f8o7x9txukzzgk4bg8zmdnsmjiqr",
    "description": "Immerse yourself in the vibrant colors and exotic culture of Morocco. Explore the bustling souks of Marrakech, ride a camel into the Sahara Desert, and wander through the blue city of Chefchaouen. This tour is a feast for the senses, with delicious cuisine, stunning architecture, and warm hospitality.",
    "shortDescription": "Explore bustling souks, the Sahara Desert, and the blue city.",
    "location": "Marrakech, Morocco",
    "duration": "10 Days",
    "inclusions": ["Sahara desert camel trek", "Chefchaouen visit", "Marrakech medina tour", "Traditional riad stays"],
    "agencies": [
      { "name": "Moroccan Dreams", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1700, "EUR": 1560, "GBP": 1330, "INR": 141000, "BDT": 177000, "CAD": 2250 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "Sahara Expeditions", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 950, "EUR": 874, "GBP": 750, "INR": 79135, "BDT": 103970, "CAD": 1292 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1750, "EUR": 1610, "GBP": 1370, "INR": 145000, "BDT": 182000, "CAD": 2300 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Kasbah Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 880, "EUR": 809, "GBP": 695, "INR": 73290, "BDT": 96448, "CAD": 1197 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1430, "EUR": 1316, "GBP": 1130, "INR": 119179, "BDT": 156868, "CAD": 1945 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1680, "EUR": 1540, "GBP": 1310, "INR": 139000, "BDT": 175000, "CAD": 2230 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "La Mamounia", "rating": 4.8, "address": "Avenue Bab Jdid", "basePriceUSD": 700 },
      { "name": "Royal Mansour Marrakech", "rating": 4.9, "address": "Rue Abou Abbas El Sebti", "basePriceUSD": 1200 },
      { "name": "Riad Kniza", "rating": 4.9, "address": "34 Derb l'Hotel", "basePriceUSD": 500 }
    ]
  },
  {
    "_id": "15",
    "title": "Galapagos Islands Discovery",
    "image": "https://discovery.sndimg.com/content/dam/images/discovery/stock/2019/12/24/GettyImages-1006485658.jpg.rend.hgtvcom.1280.1280.suffix/1577368138656.jpeg",
    "description": "Journey to the enchanted Galapagos Islands, a living laboratory of evolution. Snorkel with sea lions, walk among giant tortoises, and observe the unique wildlife that inspired Charles Darwin. This tour offers an unparalleled opportunity to get up close and personal with nature in one of the world's most pristine ecosystems.",
    "shortDescription": "Snorkel with sea lions and walk among giant tortoises.",
    "location": "Galapagos, Ecuador",
    "duration": "8 Days",
    "inclusions": ["Inter-island flights", "Guided wildlife excursions", "Snorkeling equipment", "National Park fees"],
    "agencies": [
      { "name": "Darwin's Footsteps", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2800, "EUR": 2576, "GBP": 2212, "INR": 233240, "BDT": 306880, "CAD": 3808 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 3500, "EUR": 3220, "GBP": 2765, "INR": 291550, "BDT": 383600, "CAD": 4760 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 4000, "EUR": 3680, "GBP": 3130, "INR": 332000, "BDT": 416000, "CAD": 5300 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 4500, "EUR": 4140, "GBP": 3555, "INR": 374850, "BDT": 493200, "CAD": 6120 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 6000, "EUR": 5520, "GBP": 4740, "INR": 499800, "BDT": 657600, "CAD": 8160 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "one-way" }
      ] },
      { "name": "Galapagos Insiders", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2850, "EUR": 2622, "GBP": 2251, "INR": 237375, "BDT": 312420, "CAD": 3876 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 3550, "EUR": 3266, "GBP": 2804, "INR": 295685, "BDT": 388960, "CAD": 4828 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 4100, "EUR": 3770, "GBP": 3210, "INR": 340000, "BDT": 426000, "CAD": 5400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 4600, "EUR": 4232, "GBP": 3634, "INR": 383180, "BDT": 503840, "CAD": 6256 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 6100, "EUR": 5612, "GBP": 4820, "INR": 508130, "BDT": 668160, "CAD": 8296 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "one-way" }
      ] },
      { "name": "Enchanted Isles", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2780, "EUR": 2558, "GBP": 2196, "INR": 231574, "BDT": 304792, "CAD": 3781 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 3480, "EUR": 3202, "GBP": 2749, "INR": 289884, "BDT": 381472, "CAD": 4733 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 3950, "EUR": 3630, "GBP": 3090, "INR": 328000, "BDT": 411000, "CAD": 5250 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 4450, "EUR": 4094, "GBP": 3517, "INR": 370715, "BDT": 487660, "CAD": 6052 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 5950, "EUR": 5474, "GBP": 4701, "INR": 495675, "BDT": 652040, "CAD": 8092 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Pikaia Lodge", "rating": 4.8, "address": "Santa Cruz Island", "basePriceUSD": 1500 },
      { "name": "Finch Bay Galapagos Hotel", "rating": 4.7, "address": "Santa Cruz Island", "basePriceUSD": 1200 },
      { "name": "Galapagos Safari Camp", "rating": 4.9, "address": "Santa Cruz Island", "basePriceUSD": 1300 }
    ]
  },
  {
    "_id": "16",
    "title": "The Heart of the Amazon",
    "image": "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6744bc3995dc50001d374f99.png",
    "description": "Venture deep into the heart of the Amazon rainforest. Stay in a jungle lodge, explore the diverse flora and fauna with expert guides, and learn about the indigenous cultures that call this incredible ecosystem home. This is an adventure for the truly intrepid traveler.",
    "shortDescription": "Explore the world's largest rainforest and its incredible biodiversity.",
    "location": "Manaus, Brazil",
    "duration": "7 Days",
    "inclusions": ["Jungle lodge accommodation", "Guided rainforest hikes", "Piranha fishing", "Night safaris"],
    "agencies": [
      { "name": "Amazon Eco Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1900, "EUR": 1750, "GBP": 1490, "INR": 157000, "BDT": 197000, "CAD": 2550 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2200, "EUR": 2024, "GBP": 1738, "INR": 183260, "BDT": 240920, "CAD": 2992 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3200, "EUR": 2944, "GBP": 2528, "INR": 266560, "BDT": 350720, "CAD": 4352 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "Jungle Trekkers", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1950, "EUR": 1790, "GBP": 1530, "INR": 161000, "BDT": 202000, "CAD": 2600 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2250, "EUR": 2070, "GBP": 1778, "INR": 187395, "BDT": 246540, "CAD": 3060 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3250, "EUR": 2990, "GBP": 2568, "INR": 270755, "BDT": 356140, "CAD": 4420 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "Rainforest Expeditions", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1880, "EUR": 1730, "GBP": 1470, "INR": 155000, "BDT": 195000, "CAD": 2530 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2180, "EUR": 2006, "GBP": 1723, "INR": 181594, "BDT": 239008, "CAD": 2965 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3180, "EUR": 2926, "GBP": 2512, "INR": 264894, "BDT": 348536, "CAD": 4325 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Anavilhanas Jungle Lodge", "rating": 4.8, "address": "Rio Negro", "basePriceUSD": 600 },
      { "name": "Juma Amazon Lodge", "rating": 4.7, "address": "Juma River", "basePriceUSD": 550 },
      { "name": "Cristalino Lodge", "rating": 4.9, "address": "Alta Floresta", "basePriceUSD": 650 }
    ]
  },
  {
    "_id": "17",
    "title": "Antarctica: The White Continent",
    "image": "https://www.marcadamus.com/images/xl/The-White-Continent-w.jpg",
    "description": "Embark on the expedition of a lifetime to Antarctica, the world's last great wilderness. Cruise through iceberg-filled waters, witness massive penguin colonies, and set foot on the pristine White Continent. This is a journey to the end of the Earth that you will never forget.",
    "shortDescription": "Cruise to the pristine wilderness of Antarctica.",
    "location": "Ushuaia, Argentina",
    "duration": "11 Days",
    "inclusions": ["Expedition cruise", "Zodiac excursions", "Polar expert lectures", "All meals on board"],
    "agencies": [
      { "name": "Polar Expeditions", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 4000, "EUR": 3680, "GBP": 3160, "INR": 333200, "BDT": 438400, "CAD": 5440 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 5500, "EUR": 5060, "GBP": 4345, "INR": 458150, "BDT": 602800, "CAD": 7480 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 6800, "EUR": 6256, "GBP": 5372, "INR": 566440, "BDT": 745280, "CAD": 9248 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 7800, "EUR": 7176, "GBP": 6162, "INR": 649740, "BDT": 855480, "CAD": 10608 }, "type": "two-way" },
        { "duration": 11, "price": { "USD": 8000, "EUR": 7360, "GBP": 6260, "INR": 664000, "BDT": 832000, "CAD": 10600 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 10000, "EUR": 9200, "GBP": 7900, "INR": 833000, "BDT": 1096000, "CAD": 13600 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "one-way" }
      ] },
      { "name": "Antarctic Dreams", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 4100, "EUR": 3772, "GBP": 3240, "INR": 341530, "BDT": 449360, "CAD": 5576 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 5600, "EUR": 5152, "GBP": 4424, "INR": 466480, "BDT": 613760, "CAD": 7616 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 6900, "EUR": 6348, "GBP": 5451, "INR": 574770, "BDT": 756240, "CAD": 9384 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 7900, "EUR": 7270, "GBP": 6241, "INR": 658070, "BDT": 865840, "CAD": 10744 }, "type": "two-way" },
        { "duration": 11, "price": { "USD": 8200, "EUR": 7540, "GBP": 6410, "INR": 680000, "BDT": 852000, "CAD": 10800 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 10100, "EUR": 9292, "GBP": 7979, "INR": 841330, "BDT": 1107000, "CAD": 13736 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "one-way" }
      ] },
      { "name": "White Continent Cruises", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 3950, "EUR": 3634, "GBP": 3121, "INR": 329035, "BDT": 432920, "CAD": 5372 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 5450, "EUR": 5014, "GBP": 4306, "INR": 453915, "BDT": 597220, "CAD": 7412 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 6750, "EUR": 6210, "GBP": 5333, "INR": 562275, "BDT": 740000, "CAD": 9180 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 7750, "EUR": 7129, "GBP": 6122, "INR": 645605, "BDT": 850000, "CAD": 10540 }, "type": "two-way" },
        { "duration": 11, "price": { "USD": 7900, "EUR": 7270, "GBP": 6180, "INR": 656000, "BDT": 822000, "CAD": 10500 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 9950, "EUR": 9154, "GBP": 7861, "INR": 828875, "BDT": 1090420, "CAD": 13532 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Arakur Ushuaia Resort & Spa", "rating": 4.7, "address": "Ushuaia", "basePriceUSD": 400 },
      { "name": "Los Cauquenes Resort + Spa", "rating": 4.8, "address": "Ushuaia", "basePriceUSD": 450 },
      { "name": "Las Hayas Ushuaia Resort", "rating": 4.6, "address": "Ushuaia", "basePriceUSD": 380 }
    ]
  },
  {
    "_id": "18",
    "title": "The Silk Road: Uzbekistan",
    "image": "https://www.andantetravels.co.uk/wp-content/uploads/sites/4/2023/09/kalta-minor-minaret-uzbekistan.jpg",
    "description": "Trace the ancient Silk Road through the heart of Uzbekistan. Discover the stunning Islamic architecture of Samarkand, Bukhara, and Khiva. Wander through bustling bazaars, admire intricate tilework, and immerse yourself in the rich history of this fascinating region.",
    "shortDescription": "Discover the stunning architecture of the Silk Road.",
    "location": "Tashkent, Uzbekistan",
    "duration": "9 Days",
    "inclusions": ["High-speed train tickets", "Guided city tours", "Entrance to historical sites", "Daily breakfast"],
    "agencies": [
      { "name": "Silk Road Caravans", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1100, "EUR": 1012, "GBP": 869, "INR": 91300, "BDT": 115000, "CAD": 1496 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1300, "EUR": 1196, "GBP": 1027, "INR": 108290, "BDT": 142480, "CAD": 1768 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1500, "EUR": 1380, "GBP": 1180, "INR": 124000, "BDT": 156000, "CAD": 2000 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2400, "EUR": 2208, "GBP": 1896, "INR": 199920, "BDT": 262960, "CAD": 3264 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "Central Asia Travels", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 850, "EUR": 782, "GBP": 671, "INR": 70770, "BDT": 93140, "CAD": 1156 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1150, "EUR": 1058, "GBP": 909, "INR": 95435, "BDT": 120340, "CAD": 1564 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1550, "EUR": 1420, "GBP": 1220, "INR": 128000, "BDT": 161000, "CAD": 2050 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2450, "EUR": 2254, "GBP": 1936, "INR": 204155, "BDT": 268520, "CAD": 3332 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Uzbek Journeys", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 780, "EUR": 718, "GBP": 616, "INR": 64974, "BDT": 85548, "CAD": 1061 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1080, "EUR": 994, "GBP": 853, "INR": 89634, "BDT": 117936, "CAD": 1469 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1280, "EUR": 1178, "GBP": 1011, "INR": 106624, "BDT": 140308, "CAD": 1741 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1480, "EUR": 1360, "GBP": 1160, "INR": 122000, "BDT": 154000, "CAD": 1980 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2380, "EUR": 2189, "GBP": 1879, "INR": 198254, "BDT": 260848, "CAD": 3237 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Hyatt Regency Tashkent", "rating": 4.7, "address": "Tashkent", "basePriceUSD": 250 },
      { "name": "Lotte City Hotel Tashkent Palace", "rating": 4.6, "address": "Tashkent", "basePriceUSD": 220 },
      { "name": "Hotel Minor", "rating": 4.8, "address": "Samarkand", "basePriceUSD": 180 }
    ]
  },
  {
    "_id": "19",
    "title": "Vietnam & Cambodia Highlights",
    "image": "https://cdn.scenicglobal.com/webfile/SARC-Halong-Bay-Vietnam-003.jpg",
    "description": "Explore the best of Vietnam and Cambodia in one incredible journey. Cruise through Halong Bay, wander the ancient streets of Hoi An, and discover the magnificent temples of Angkor Wat. This tour offers a rich tapestry of culture, history, and natural beauty.",
    "shortDescription": "Cruise Halong Bay and explore the temples of Angkor Wat.",
    "location": "Hanoi, Vietnam",
    "duration": "14 Days",
    "inclusions": ["Halong Bay cruise", "Angkor Wat guided tour", "Internal flights", "Cooking class"],
    "agencies": [
      { "name": "Indochina Explorers", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1900, "EUR": 1748, "GBP": 1501, "INR": 158270, "BDT": 208240, "CAD": 2584 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2100, "EUR": 1932, "GBP": 1659, "INR": 174930, "BDT": 230160, "CAD": 2856 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 2300, "EUR": 2120, "GBP": 1810, "INR": 191000, "BDT": 241000, "CAD": 3050 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "one-way" }
      ] },
      { "name": "Mekong River Adventures", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1950, "EUR": 1794, "GBP": 1540, "INR": 162405, "BDT": 213700, "CAD": 2652 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2150, "EUR": 1978, "GBP": 1698, "INR": 179065, "BDT": 235640, "CAD": 2924 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 2350, "EUR": 2160, "GBP": 1850, "INR": 195000, "BDT": 246000, "CAD": 3100 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 825, "EUR": 759, "GBP": 652, "INR": 68723, "BDT": 90470, "CAD": 1122 }, "type": "one-way" }
      ] },
      { "name": "Southeast Asia Dreams", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1880, "EUR": 1730, "GBP": 1485, "INR": 156604, "BDT": 205984, "CAD": 2557 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2080, "EUR": 1914, "GBP": 1643, "INR": 173264, "BDT": 227968, "CAD": 2829 }, "type": "two-way" },
        { "duration": 14, "price": { "USD": 2280, "EUR": 2100, "GBP": 1790, "INR": 189000, "BDT": 239000, "CAD": 3030 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 790, "EUR": 727, "GBP": 624, "INR": 65807, "BDT": 86584, "CAD": 1074 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Sofitel Legend Metropole Hanoi", "rating": 4.8, "address": "Hanoi", "basePriceUSD": 350 },
      { "name": "La Siesta Hoi An Resort & Spa", "rating": 4.9, "address": "Hoi An", "basePriceUSD": 250 },
      { "name": "Shinta Mani Angkor", "rating": 4.9, "address": "Siem Reap", "basePriceUSD": 300 }
    ]
  },
  {
    "_id": "20",
    "title": "Scottish Highlands & Islands",
    "image": "https://www.scottishtours.co.uk/images/tours/2957-Isle-of-Skye.jpg",
    "description": "Discover the rugged beauty of the Scottish Highlands and the mystical Isle of Skye. Search for the Loch Ness Monster, visit historic castles, and sample world-class whisky. This tour is a journey through a land of legends, breathtaking landscapes, and warm hospitality.",
    "shortDescription": "Explore Loch Ness, historic castles, and the Isle of Skye.",
    "location": "Edinburgh, Scotland",
    "duration": "8 Days",
    "inclusions": ["Loch Ness cruise", "Isle of Skye tour", "Whisky distillery visit", "Castle entrance fees"],
    "agencies": [
      { "name": "Highland Wanderers", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1300, "EUR": 1196, "GBP": 1027, "INR": 108290, "BDT": 142480, "CAD": 1768 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1600, "EUR": 1472, "GBP": 1264, "INR": 133280, "BDT": 175360, "CAD": 2176 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1800, "EUR": 1650, "GBP": 1410, "INR": 149000, "BDT": 187000, "CAD": 2400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2800, "EUR": 2576, "GBP": 2212, "INR": 233240, "BDT": 306880, "CAD": 3808 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "Scottish Clans Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1350, "EUR": 1242, "GBP": 1066, "INR": 112455, "BDT": 148000, "CAD": 1836 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1650, "EUR": 1518, "GBP": 1304, "INR": 137445, "BDT": 180840, "CAD": 2244 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1850, "EUR": 1700, "GBP": 1450, "INR": 153000, "BDT": 192000, "CAD": 2450 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2850, "EUR": 2622, "GBP": 2251, "INR": 237375, "BDT": 312420, "CAD": 3876 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "Thistle & Heather", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1280, "EUR": 1178, "GBP": 1011, "INR": 106624, "BDT": 140308, "CAD": 1741 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1580, "EUR": 1454, "GBP": 1248, "INR": 131614, "BDT": 173264, "CAD": 2149 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1780, "EUR": 1630, "GBP": 1390, "INR": 147000, "BDT": 185000, "CAD": 2380 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2780, "EUR": 2558, "GBP": 2196, "INR": 231574, "BDT": 304792, "CAD": 3781 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Balmoral Hotel", "rating": 4.7, "address": "Edinburgh", "basePriceUSD": 500 },
      { "name": "Inverlochy Castle Hotel", "rating": 4.8, "address": "Fort William", "basePriceUSD": 600 },
      { "name": "The Three Chimneys", "rating": 4.9, "address": "Isle of Skye", "basePriceUSD": 450 }
    ]
  },
  {
    "_id": "21",
    "title": "Patagonia: End of the World",
    "image": "https://www.kuodatravel.com/wp-content/uploads/2020/07/Travel-to-the-End-of-the-World-Patagonia.jpg",
    "description": "Explore the dramatic landscapes of Patagonia, a region of towering peaks, massive glaciers, and pristine wilderness. Hike in Torres del Paine National Park, witness the Perito Moreno Glacier, and experience the rugged beauty of the end of the world.",
    "shortDescription": "Hike among towering peaks and witness massive glaciers.",
    "location": "El Calafate, Argentina",
    "duration": "12 Days",
    "inclusions": ["Torres del Paine trek", "Perito Moreno Glacier tour", "Internal flights", "National Park fees"],
    "agencies": [
      { "name": "Patagonia Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2900, "EUR": 2668, "GBP": 2289, "INR": 241570, "BDT": 317840, "CAD": 3944 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 3200, "EUR": 2940, "GBP": 2510, "INR": 265000, "BDT": 332000, "CAD": 4250 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4000, "EUR": 3680, "GBP": 3160, "INR": 333200, "BDT": 438400, "CAD": 5440 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "one-way" }
      ] },
      { "name": "Andes Vertical", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2950, "EUR": 2714, "GBP": 2332, "INR": 245705, "BDT": 323300, "CAD": 4012 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 3300, "EUR": 3040, "GBP": 2590, "INR": 274000, "BDT": 343000, "CAD": 4350 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4100, "EUR": 3772, "GBP": 3240, "INR": 341530, "BDT": 449360, "CAD": 5576 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "one-way" }
      ] },
      { "name": "Southern Explorations", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2880, "EUR": 2649, "GBP": 2275, "INR": 239904, "BDT": 315744, "CAD": 3917 }, "type": "two-way" },
        { "duration": 12, "price": { "USD": 3150, "EUR": 2900, "GBP": 2470, "INR": 261000, "BDT": 328000, "CAD": 4200 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3950, "EUR": 3634, "GBP": 3121, "INR": 329035, "BDT": 432920, "CAD": 5372 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Explora Patagonia", "rating": 4.9, "address": "Torres del Paine", "basePriceUSD": 1300 },
      { "name": "Tierra Patagonia Hotel & Spa", "rating": 4.9, "address": "Torres del Paine", "basePriceUSD": 1200 },
      { "name": "Awasi Patagonia", "rating": 5.0, "address": "Torres del Paine", "basePriceUSD": 1500 }
    ]
  },
  {
    "_id": "22",
    "title": "The Golden Triangle of India",
    "image": "https://deih43ym53wif.cloudfront.net/shutterstock_400068991_d3c6d1513e.jpeg",
    "description": "Discover the rich history and vibrant culture of India's Golden Triangle. Explore the bustling streets of Delhi, marvel at the majestic Taj Mahal in Agra, and admire the royal palaces of Jaipur. This classic tour is a perfect introduction to the wonders of India.",
    "shortDescription": "Explore Delhi, the Taj Mahal, and the palaces of Jaipur.",
    "location": "Delhi, India",
    "duration": "7 Days",
    "inclusions": ["Taj Mahal sunrise tour", "Jaipur city tour", "Rickshaw ride in Delhi", "Daily breakfast"],
    "agencies": [
      { "name": "Incredible India Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1000, "EUR": 920, "GBP": 780, "INR": 83000, "BDT": 104000, "CAD": 1350 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 1800, "EUR": 1656, "GBP": 1422, "INR": 149940, "BDT": 197280, "CAD": 2448 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 400, "EUR": 368, "GBP": 316, "INR": 33320, "BDT": 43840, "CAD": 544 }, "type": "one-way" }
      ] },
      { "name": "Maharaja Journeys", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 825, "EUR": 759, "GBP": 652, "INR": 68723, "BDT": 90470, "CAD": 1122 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1050, "EUR": 970, "GBP": 820, "INR": 87000, "BDT": 109000, "CAD": 1400 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 1850, "EUR": 1702, "GBP": 1462, "INR": 154175, "BDT": 202940, "CAD": 2516 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 425, "EUR": 391, "GBP": 336, "INR": 35403, "BDT": 46580, "CAD": 578 }, "type": "one-way" }
      ] },
      { "name": "Golden Triangle Travels", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 790, "EUR": 727, "GBP": 624, "INR": 65807, "BDT": 86584, "CAD": 1074 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 980, "EUR": 900, "GBP": 760, "INR": 81000, "BDT": 102000, "CAD": 1330 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 1780, "EUR": 1638, "GBP": 1406, "INR": 148274, "BDT": 195128, "CAD": 2421 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 390, "EUR": 359, "GBP": 308, "INR": 32487, "BDT": 42744, "CAD": 530 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Oberoi Amarvilas", "rating": 4.9, "address": "Agra", "basePriceUSD": 700 },
      { "name": "Rambagh Palace", "rating": 4.9, "address": "Jaipur", "basePriceUSD": 650 },
      { "name": "The Leela Palace New Delhi", "rating": 4.8, "address": "New Delhi", "basePriceUSD": 500 }
    ]
  },
  {
    "_id": "23",
    "title": "South Africa: Cape Town & Kruger",
    "image": "https://www.moxleyandco.travel/wp-content/uploads/sites/2/2017/04/South-Africa-Cape-Town-cape_town_image-1920x800.jpg",
    "description": "Experience the best of South Africa, from the vibrant city of Cape Town to the wild plains of Kruger National Park. Hike Table Mountain, visit Robben Island, and go on a thrilling safari to spot the 'Big Five.' This tour offers a perfect blend of city, nature, and wildlife.",
    "shortDescription": "Hike Table Mountain and go on a 'Big Five' safari.",
    "location": "Cape Town, South Africa",
    "duration": "10 Days",
    "inclusions": ["Table Mountain cable car", "Kruger National Park safari", "Robben Island tour", "Internal flights"],
    "agencies": [
      { "name": "Rainbow Nation Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2400, "EUR": 2208, "GBP": 1896, "INR": 199920, "BDT": 262960, "CAD": 3264 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2800, "EUR": 2580, "GBP": 2200, "INR": 232000, "BDT": 291000, "CAD": 3750 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3800, "EUR": 3496, "GBP": 3002, "INR": 316540, "BDT": 416720, "CAD": 5168 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "one-way" }
      ] },
      { "name": "African Impact", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2450, "EUR": 2254, "GBP": 1936, "INR": 204155, "BDT": 268520, "CAD": 3332 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2900, "EUR": 2670, "GBP": 2270, "INR": 240000, "BDT": 301000, "CAD": 3850 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3900, "EUR": 3588, "GBP": 3079, "INR": 324870, "BDT": 427440, "CAD": 5304 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "one-way" }
      ] },
      { "name": "Go2Africa", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2380, "EUR": 2189, "GBP": 1879, "INR": 198254, "BDT": 260848, "CAD": 3237 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2750, "EUR": 2530, "GBP": 2160, "INR": 228000, "BDT": 286000, "CAD": 3700 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3750, "EUR": 3450, "GBP": 2963, "INR": 312375, "BDT": 410900, "CAD": 5100 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "The Silo Hotel", "rating": 4.9, "address": "Cape Town", "basePriceUSD": 1000 },
      { "name": "Lion Sands Ivory Lodge", "rating": 5.0, "address": "Sabi Sand Game Reserve", "basePriceUSD": 1500 },
      { "name": "One&Only Cape Town", "rating": 4.8, "address": "Cape Town", "basePriceUSD": 800 }
    ]
  },
  {
    "_id": "24",
    "title": "The Best of the Greek Islands",
    "image": "https://handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-17.jpg",
    "description": "Island-hop through the stunning Greek Islands. Watch the sunset in Santorini, party in Mykonos, and discover the ancient history of Crete. This tour is a sun-soaked adventure through paradise, with beautiful beaches, charming villages, and delicious food.",
    "shortDescription": "Watch the sunset in Santorini and party in Mykonos.",
    "location": "Athens, Greece",
    "duration": "10 Days",
    "inclusions": ["Ferry tickets", "Santorini sunset tour", "Mykonos beach club access", "Daily breakfast"],
    "agencies": [
      { "name": "Hellenic Travels", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2100, "EUR": 1930, "GBP": 1650, "INR": 174000, "BDT": 218000, "CAD": 2800 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3000, "EUR": 2760, "GBP": 2370, "INR": 249900, "BDT": 328800, "CAD": 4080 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "one-way" }
      ] },
      { "name": "Aegean Adventures", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2150, "EUR": 1980, "GBP": 1690, "INR": 178000, "BDT": 223000, "CAD": 2850 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 3050, "EUR": 2806, "GBP": 2409, "INR": 254085, "BDT": 334340, "CAD": 4148 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 825, "EUR": 759, "GBP": 652, "INR": 68723, "BDT": 90470, "CAD": 1122 }, "type": "one-way" }
      ] },
      { "name": "Mythical Greece", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 2080, "EUR": 1910, "GBP": 1630, "INR": 172000, "BDT": 216000, "CAD": 2780 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2980, "EUR": 2742, "GBP": 2354, "INR": 248234, "BDT": 326616, "CAD": 4053 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 790, "EUR": 727, "GBP": 624, "INR": 65807, "BDT": 86584, "CAD": 1074 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Canaves Oia Suites", "rating": 4.9, "address": "Santorini", "basePriceUSD": 900 },
      { "name": "Cavo Tagoo Mykonos", "rating": 4.8, "address": "Mykonos", "basePriceUSD": 800 },
      { "name": "Blue Palace, a Luxury Collection Resort and Spa, Crete", "rating": 4.7, "address": "Crete", "basePriceUSD": 600 }
    ]
  },
  {
    "_id": "25",
    "title": "Costa Rica: Pura Vida",
    "image": "https://www.en-vols.com/wp-content/uploads/afmm/2023/04/shutterstock_403688380-1.jpg",
    "description": "Experience the 'Pura Vida' in Costa Rica, a country of incredible biodiversity and natural beauty. Zipline through cloud forests, surf on pristine beaches, and spot exotic wildlife like monkeys, sloths, and toucans. This is an adventure for nature lovers and thrill-seekers alike.",
    "shortDescription": "Zipline through cloud forests and spot exotic wildlife.",
    "location": "San Jose, Costa Rica",
    "duration": "9 Days",
    "inclusions": ["Ziplining tour", "Guided rainforest hike", "Surfing lesson", "Volcano visit"],
    "agencies": [
      { "name": "Pura Vida Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1600, "EUR": 1470, "GBP": 1250, "INR": 132000, "BDT": 166000, "CAD": 2150 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1800, "EUR": 1656, "GBP": 1422, "INR": 149940, "BDT": 197280, "CAD": 2448 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "Costa Rica Experts", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 950, "EUR": 874, "GBP": 750, "INR": 79135, "BDT": 103970, "CAD": 1292 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1650, "EUR": 1520, "GBP": 1290, "INR": 136000, "BDT": 171000, "CAD": 2200 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1850, "EUR": 1702, "GBP": 1462, "INR": 154175, "BDT": 202940, "CAD": 2516 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Tico Travel", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 880, "EUR": 809, "GBP": 695, "INR": 73290, "BDT": 96448, "CAD": 1197 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1580, "EUR": 1450, "GBP": 1230, "INR": 130000, "BDT": 164000, "CAD": 2130 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1780, "EUR": 1638, "GBP": 1406, "INR": 148274, "BDT": 195128, "CAD": 2421 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Nayara Springs", "rating": 4.9, "address": "Arenal Volcano National Park", "basePriceUSD": 800 },
      { "name": "Four Seasons Resort Costa Rica at Peninsula Papagayo", "rating": 4.8, "address": "Peninsula Papagayo", "basePriceUSD": 1000 },
      { "name": "Pacuare Lodge", "rating": 4.9, "address": "Pacuare River", "basePriceUSD": 900 }
    ]
  },
  {
    "_id": "26",
    "title": "The Wilds of Alaska",
    "image": "https://www.motoquest.com/wp-content/uploads/2018/12/c269b146-4a8d-4ae3-a635-ef8f8c51109b.jpg",
    "description": "Explore the rugged and untamed wilderness of Alaska. Cruise through glacier-carved fjords, see bears fishing for salmon, and marvel at the towering peak of Denali. This is a journey into one of the last great frontiers on Earth.",
    "shortDescription": "Cruise through fjords and see bears in their natural habitat.",
    "location": "Anchorage, Alaska",
    "duration": "8 Days",
    "inclusions": ["Glacier cruise", "Denali National Park tour", "Wildlife viewing excursions", "Train journey"],
    "agencies": [
      { "name": "Alaska Wildland Adventures", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2000, "EUR": 1840, "GBP": 1580, "INR": 166600, "BDT": 219200, "CAD": 2720 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 3500, "EUR": 3220, "GBP": 2740, "INR": 290000, "BDT": 364000, "CAD": 4700 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3800, "EUR": 3496, "GBP": 3002, "INR": 316540, "BDT": 416720, "CAD": 5168 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 5000, "EUR": 4600, "GBP": 3950, "INR": 416500, "BDT": 548000, "CAD": 6800 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "one-way" }
      ] },
      { "name": "Knightly Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 2050, "EUR": 1886, "GBP": 1620, "INR": 170815, "BDT": 224780, "CAD": 2788 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 3600, "EUR": 3310, "GBP": 2820, "INR": 298000, "BDT": 374000, "CAD": 4800 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3900, "EUR": 3588, "GBP": 3079, "INR": 324870, "BDT": 427440, "CAD": 5304 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 5100, "EUR": 4692, "GBP": 4029, "INR": 424830, "BDT": 558960, "CAD": 6936 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "one-way" }
      ] },
      { "name": "Salmon Berry Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1980, "EUR": 1822, "GBP": 1564, "INR": 164934, "BDT": 216912, "CAD": 2693 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 3450, "EUR": 3170, "GBP": 2700, "INR": 286000, "BDT": 359000, "CAD": 4650 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 3750, "EUR": 3450, "GBP": 2963, "INR": 312375, "BDT": 410900, "CAD": 5100 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 4950, "EUR": 4554, "GBP": 3911, "INR": 412365, "BDT": 542460, "CAD": 6732 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Hotel Alyeska", "rating": 4.5, "address": "Girdwood", "basePriceUSD": 400 },
      { "name": "Denali Princess Wilderness Lodge", "rating": 4.3, "address": "Denali National Park", "basePriceUSD": 350 },
      { "name": "Kenai Fjords Wilderness Lodge", "rating": 4.7, "address": "Fox Island", "basePriceUSD": 500 }
    ]
  },
  {
    "_id": "27",
    "title": "Ireland: The Emerald Isle",
    "image": "https://oursoulfultravels.com/wp-content/uploads/2023/12/An-ancient-stone-circle-on-a-field-of-green-explains-why-Ireland-is-known-as-the-Emerald-Isle.jpeg",
    "description": "Discover the magic of the Emerald Isle. Drive the scenic Ring of Kerry, visit the dramatic Cliffs of Moher, and enjoy the lively pubs of Dublin. This tour is a journey through a land of stunning landscapes, rich history, and friendly locals.",
    "shortDescription": "Drive the Ring of Kerry and visit the Cliffs of Moher.",
    "location": "Dublin, Ireland",
    "duration": "9 Days",
    "inclusions": ["Ring of Kerry tour", "Cliffs of Moher visit", "Guinness Storehouse ticket", "Daily breakfast"],
    "agencies": [
      { "name": "Shamrocker Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 900, "EUR": 828, "GBP": 711, "INR": 74970, "BDT": 98640, "CAD": 1224 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1700, "EUR": 1560, "GBP": 1330, "INR": 141000, "BDT": 177000, "CAD": 2250 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1900, "EUR": 1748, "GBP": 1501, "INR": 158270, "BDT": 208240, "CAD": 2584 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2700, "EUR": 2484, "GBP": 2133, "INR": 224910, "BDT": 295920, "CAD": 3672 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "Paddywagon Tours", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 950, "EUR": 874, "GBP": 750, "INR": 79135, "BDT": 103970, "CAD": 1292 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1750, "EUR": 1610, "GBP": 1370, "INR": 145000, "BDT": 182000, "CAD": 2300 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1950, "EUR": 1794, "GBP": 1540, "INR": 162405, "BDT": 213700, "CAD": 2652 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2750, "EUR": 2530, "GBP": 2173, "INR": 229075, "BDT": 301400, "CAD": 3740 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "CIE Tours", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 880, "EUR": 809, "GBP": 695, "INR": 73290, "BDT": 96448, "CAD": 1197 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 9, "price": { "USD": 1680, "EUR": 1540, "GBP": 1310, "INR": 139000, "BDT": 175000, "CAD": 2230 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1880, "EUR": 1730, "GBP": 1485, "INR": 156604, "BDT": 205984, "CAD": 2557 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2680, "EUR": 2466, "GBP": 2117, "INR": 223244, "BDT": 293888, "CAD": 3645 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Ashford Castle", "rating": 4.8, "address": "Cong", "basePriceUSD": 700 },
      { "name": "The Shelbourne, Autograph Collection", "rating": 4.7, "address": "Dublin", "basePriceUSD": 500 },
      { "name": "Adare Manor", "rating": 4.9, "address": "Adare", "basePriceUSD": 800 }
    ]
  },
  {
    "_id": "28",
    "title": "The Wonders of Jordan",
    "image": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qplhqi1fhikwizlzir5g/2D1N%20Petra%20Tour%20from%20Jerusalem.jpg",
    "description": "Discover the ancient wonders of Jordan. Explore the lost city of Petra, float in the salty waters of the Dead Sea, and camp under the stars in the desert of Wadi Rum. This tour is a journey through a land of history, hospitality, and breathtaking beauty.",
    "shortDescription": "Explore the lost city of Petra and float in the Dead Sea.",
    "location": "Amman, Jordan",
    "duration": "7 Days",
    "inclusions": ["Petra guided tour", "Dead Sea experience", "Wadi Rum jeep tour", "Bedouin camp stay"],
    "agencies": [
      { "name": "Jordan Tracks", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1400, "EUR": 1290, "GBP": 1100, "INR": 116000, "BDT": 146000, "CAD": 1850 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2500, "EUR": 2300, "GBP": 1975, "INR": 208250, "BDT": 274000, "CAD": 3400 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 550, "EUR": 506, "GBP": 435, "INR": 45815, "BDT": 60280, "CAD": 748 }, "type": "one-way" }
      ] },
      { "name": "Petra Night Tours", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 750, "EUR": 690, "GBP": 592, "INR": 62475, "BDT": 82200, "CAD": 1020 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1450, "EUR": 1330, "GBP": 1140, "INR": 120000, "BDT": 151000, "CAD": 1900 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2550, "EUR": 2346, "GBP": 2014, "INR": 212485, "BDT": 279480, "CAD": 3468 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 575, "EUR": 529, "GBP": 455, "INR": 47948, "BDT": 63070, "CAD": 782 }, "type": "one-way" }
      ] },
      { "name": "Experience Jordan", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 680, "EUR": 626, "GBP": 537, "INR": 56644, "BDT": 74528, "CAD": 925 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1380, "EUR": 1270, "GBP": 1080, "INR": 114000, "BDT": 144000, "CAD": 1830 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2480, "EUR": 2282, "GBP": 1959, "INR": 206584, "BDT": 271808, "CAD": 3373 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 540, "EUR": 497, "GBP": 427, "INR": 44982, "BDT": 59184, "CAD": 734 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Mövenpick Resort Petra", "rating": 4.6, "address": "Petra", "basePriceUSD": 250 },
      { "name": "Kempinski Hotel Ishtar Dead Sea", "rating": 4.7, "address": "Dead Sea", "basePriceUSD": 300 },
      { "name": "Wadi Rum Night Luxury Camp", "rating": 4.8, "address": "Wadi Rum", "basePriceUSD": 200 }
    ]
  },
  {
    "_id": "29",
    "title": "The Best of Spain",
    "image": "https://assets.vogue.com/photos/6603d64d13a27b5703522946/16:9/w_4496,h_2529,c_limit/509288876",
    "description": "Experience the passion and flair of Spain. Explore the architectural wonders of Barcelona, admire the art in Madrid's Prado Museum, and soak up the sun on the beaches of the Costa del Sol. This tour is a celebration of Spanish culture, cuisine, and zest for life.",
    "shortDescription": "Explore Barcelona, Madrid, and the Costa del Sol.",
    "location": "Madrid, Spain",
    "duration": "10 Days",
    "inclusions": ["Sagrada Familia tickets", "Prado Museum entrance", "Flamenco show", "Tapas tour"],
    "agencies": [
      { "name": "Spain on a Fork", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 1000, "EUR": 920, "GBP": 790, "INR": 83300, "BDT": 109600, "CAD": 1360 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1400, "EUR": 1288, "GBP": 1106, "INR": 116620, "BDT": 153440, "CAD": 1904 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1700, "EUR": 1564, "GBP": 1343, "INR": 141610, "BDT": 186320, "CAD": 2312 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1900, "EUR": 1750, "GBP": 1490, "INR": 157000, "BDT": 197000, "CAD": 2550 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2800, "EUR": 2576, "GBP": 2212, "INR": 233240, "BDT": 306880, "CAD": 3808 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 700, "EUR": 644, "GBP": 553, "INR": 58310, "BDT": 76760, "CAD": 952 }, "type": "one-way" }
      ] },
      { "name": "Tapas & Travels", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 1050, "EUR": 966, "GBP": 829, "INR": 87465, "BDT": 114990, "CAD": 1428 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1450, "EUR": 1334, "GBP": 1146, "INR": 120785, "BDT": 158980, "CAD": 1972 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1750, "EUR": 1610, "GBP": 1383, "INR": 145845, "BDT": 191880, "CAD": 2380 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1950, "EUR": 1790, "GBP": 1530, "INR": 161000, "BDT": 202000, "CAD": 2600 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2850, "EUR": 2622, "GBP": 2251, "INR": 237375, "BDT": 312420, "CAD": 3876 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 725, "EUR": 667, "GBP": 573, "INR": 60393, "BDT": 79490, "CAD": 986 }, "type": "one-way" }
      ] },
      { "name": "Viva España", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 980, "EUR": 902, "GBP": 774, "INR": 81634, "BDT": 107408, "CAD": 1333 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1380, "EUR": 1270, "GBP": 1090, "INR": 114954, "BDT": 151308, "CAD": 1877 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1680, "EUR": 1546, "GBP": 1327, "INR": 139944, "BDT": 184248, "CAD": 2285 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1880, "EUR": 1730, "GBP": 1470, "INR": 155000, "BDT": 195000, "CAD": 2530 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2780, "EUR": 2558, "GBP": 2196, "INR": 231574, "BDT": 304792, "CAD": 3781 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 690, "EUR": 635, "GBP": 545, "INR": 57477, "BDT": 75624, "CAD": 938 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Hotel Arts Barcelona", "rating": 4.7, "address": "Barcelona", "basePriceUSD": 600 },
      { "name": "Mandarin Oriental Ritz, Madrid", "rating": 4.8, "address": "Madrid", "basePriceUSD": 700 },
      { "name": "Marbella Club Hotel", "rating": 4.8, "address": "Marbella", "basePriceUSD": 800 }
    ]
  },
  {
    "_id": "30",
    "title": "The Soul of Cuba",
    "image": "https://cdn5.travelconline.com/images/fit-in/2000x0/filters:quality(75):strip_metadata():format(webp)/https%3A%2F%2Fd16ci2lruxstkn.cloudfront.net%2Fpublic%2Fpics%2FTOUR%2F0%2F16778%2Fpic2full.jpg",
    "description": "Step back in time and experience the unique culture of Cuba. Ride in a classic American car, wander the colorful streets of Havana, and relax on the white-sand beaches of Varadero. This tour is a journey into a country of music, history, and undeniable soul.",
    "shortDescription": "Ride in a classic car and wander the streets of Havana.",
    "location": "Havana, Cuba",
    "duration": "8 Days",
    "inclusions": ["Classic car tour", "Havana city tour", "Tobacco farm visit", "Salsa dancing class"],
    "agencies": [
      { "name": "Cuban Adventures", "rating": 4.8, "packages": [
        { "duration": 3, "price": { "USD": 800, "EUR": 736, "GBP": 632, "INR": 66640, "BDT": 87680, "CAD": 1088 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1100, "EUR": 1012, "GBP": 869, "INR": 91300, "BDT": 115000, "CAD": 1496 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1200, "EUR": 1104, "GBP": 948, "INR": 99960, "BDT": 131520, "CAD": 1632 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1300, "EUR": 1200, "GBP": 1020, "INR": 108000, "BDT": 135000, "CAD": 1750 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1500, "EUR": 1380, "GBP": 1185, "INR": 124950, "BDT": 164400, "CAD": 2040 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2200, "EUR": 2024, "GBP": 1738, "INR": 183260, "BDT": 240920, "CAD": 2992 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 600, "EUR": 552, "GBP": 474, "INR": 49980, "BDT": 65760, "CAD": 816 }, "type": "one-way" }
      ] },
      { "name": "Hola Cuba", "rating": 4.7, "packages": [
        { "duration": 3, "price": { "USD": 850, "EUR": 782, "GBP": 671, "INR": 70770, "BDT": 93140, "CAD": 1156 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1150, "EUR": 1058, "GBP": 909, "INR": 95435, "BDT": 120340, "CAD": 1564 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1250, "EUR": 1150, "GBP": 988, "INR": 104125, "BDT": 136900, "CAD": 1700 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1350, "EUR": 1240, "GBP": 1060, "INR": 112000, "BDT": 140000, "CAD": 1800 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1550, "EUR": 1426, "GBP": 1225, "INR": 129155, "BDT": 170020, "CAD": 2108 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2250, "EUR": 2070, "GBP": 1778, "INR": 187395, "BDT": 246540, "CAD": 3060 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 625, "EUR": 575, "GBP": 495, "INR": 51500, "BDT": 65000, "CAD": 825 }, "type": "one-way" }
      ] },
      { "name": "Mi Cuba", "rating": 4.9, "packages": [
        { "duration": 3, "price": { "USD": 780, "EUR": 718, "GBP": 616, "INR": 64974, "BDT": 85548, "CAD": 1061 }, "type": "two-way" },
        { "duration": 5, "price": { "USD": 1080, "EUR": 994, "GBP": 853, "INR": 89634, "BDT": 117936, "CAD": 1469 }, "type": "two-way" },
        { "duration": 7, "price": { "USD": 1180, "EUR": 1086, "GBP": 932, "INR": 98294, "BDT": 129328, "CAD": 1605 }, "type": "two-way" },
        { "duration": 8, "price": { "USD": 1280, "EUR": 1180, "GBP": 1000, "INR": 106000, "BDT": 133000, "CAD": 1730 }, "type": "two-way" },
        { "duration": 10, "price": { "USD": 1480, "EUR": 1362, "GBP": 1170, "INR": 123284, "BDT": 162128, "CAD": 2013 }, "type": "two-way" },
        { "duration": 20, "price": { "USD": 2180, "EUR": 2006, "GBP": 1723, "INR": 181594, "BDT": 239008, "CAD": 2965 }, "type": "two-way" },
        { "duration": 0, "price": { "USD": 590, "EUR": 543, "GBP": 466, "INR": 49147, "BDT": 64664, "CAD": 802 }, "type": "one-way" }
      ] }
    ],
    "hotels": [
      { "name": "Gran Hotel Manzana Kempinski La Habana", "rating": 4.7, "address": "Havana", "basePriceUSD": 400 },
      { "name": "Iberostar Grand Packard", "rating": 4.6, "address": "Havana", "basePriceUSD": 350 },
      { "name": "Royalton Hicacos Varadero Resort & Spa", "rating": 4.5, "address": "Varadero", "basePriceUSD": 300 }
    ]
  }
]