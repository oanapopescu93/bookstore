module.exports = Object.freeze({
    PRODUCTS: [
        {
            "id": 1,
            "title": "1984",
            "author": "George Orwell",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["dystopian", "classic", "political"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": true,
            "fileUrl": "1984_george_orwell"
        },
        {
            "id": 2,
            "title": "And Then There Were None",
            "author": "Agatha Christie",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A thrilling mystery novel about ten strangers lured to an island and killed one by one.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["mystery", "thriller", "classic"],
            "type": "fiction",
            "subtype": "mystery",
            "promo": false,
            "fileUrl": "and_then_there_were_none_agatha_christie"
        },
        {
            "id": 3,
            "title": "Charlotte's Web",
            "author": "E.B. White",
            "rating": 4.9,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A heartwarming story of a pig named Wilbur and his spider friend Charlotte.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["children", "classic", "animal"],
            "type": "children",
            "subtype": "other_children_books",
            "promo": true,
            "fileUrl": "charlottes_web_eb_white"
        },
        {
            "id": 4,
            "title": "Dracula",
            "author": "Bram Stoker",
            "rating": 4.5,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The classic horror novel about the infamous vampire Count Dracula.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["horror", "classic", "gothic"],
            "type": "fiction",
            "subtype": "horror",
            "promo": false,
            "fileUrl": "dracula_bram_stoker"
        },
        {
            "id": 5,
            "title": "Dune",
            "author": "Frank Herbert",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A science fiction epic set in a distant future amidst a huge interstellar empire.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["sf", "epic", "adventure"],
            "type": "fiction",
            "subtype": "sf",
            "promo": true,
            "fileUrl": "dune_frank_herbert"
        },
        {
            "id": 6,
            "title": "Ender's Game",
            "author": "Orson Scott Card",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A young boy is trained to be a military commander in a war against alien invaders.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["sf", "military", "young_adult"],
            "type": "fiction",
            "subtype": "sf",
            "promo": false,
            "fileUrl": "enders_game_orson_scott_card"
        },
        {
            "id": 7,
            "title": "Grimm's Fairy Tales",
            "author": "Brothers Grimm",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A collection of classic fairy tales by the Brothers Grimm.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fairy_tales", "classic", "children"],
            "type": "children",
            "subtype": "fairy_tales",
            "promo": true,
            "fileUrl": "grimms_fairy_tales_brothers_grimm"
        },
        {
            "id": 8,
            "title": "Harry Potter and the Sorcerer's Stone",
            "author": "J.K. Rowling",
            "rating": 4.9,
            "price": {
                "epub": 2,
            },
            "description": "The first book in the Harry Potter series, following a young wizard's adventures.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fantasy", "adventure", "young_adult"],
            "type": "fiction",
            "subtype": "fantasy",
            "promo": true,
            "fileUrl": "harry_potter_and_the_sorcerers_stone_jk_rowling"
        },
        {
            "id": 9,
            "title": "Into the Wild",
            "author": "Jon Krakauer",
            "rating": 4.6,
            "price": {
                "pdf": 1,
            },
            "description": "The true story of a young man who ventured into the Alaskan wilderness and met his fate.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "biography", "adventure"],
            "type": "non_fiction",
            "subtype": "biography",
            "promo": false,
            "fileUrl": "into_the_wild_jon_krakauer"
        },
        {
            "id": 10,
            "title": "It",
            "author": "Stephen King",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A horror novel about a group of friends facing an ancient evil that takes the form of a clown.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["horror", "thriller", "classic"],
            "type": "fiction",
            "subtype": "horror",
            "promo": false,
            "fileUrl": "it_stephen_king"
        },
        {
            "id": 11,
            "title": "Journey to the Center of the Earth",
            "author": "Jules Verne",
            "rating": 4.5,
            "price": {
                "epub": 2,
                "mobi": 2
            },
            "description": "A classic science fiction novel about an expedition to the Earth's core.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["sf", "adventure", "classic"],
            "type": "fiction",
            "subtype": "sf",
            "promo": true,
            "fileUrl": "journey_to_the_center_of_the_earth_jules_verne"
        },
        {
            "id": 12,
            "title": "Lord of the Rings: The Fellowship of the Ring",
            "author": "J.R.R. Tolkien",
            "rating": 4.9,
            "price": {
                "mobi": 2
            },
            "description": "The first part of J.R.R. Tolkien's epic fantasy trilogy.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fantasy", "epic", "adventure"],
            "type": "fiction",
            "subtype": "fantasy",
            "promo": true,
            "fileUrl": "lord_of_the_rings_jrr_tolkien01"
        },
        {
            "id": 13,
            "title": "Lord of the Rings: The Two Towers",
            "author": "J.R.R. Tolkien",
            "rating": 4.9,
            "price": {
                "mobi": 2
            },
            "description": "The second part of J.R.R. Tolkien's epic fantasy trilogy.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fantasy", "epic", "adventure"],
            "type": "fiction",
            "subtype": "fantasy",
            "promo": true,
            "fileUrl": "lord_of_the_rings_jrr_tolkien02"
        },
        {
            "id": 14,
            "title": "Lord of the Rings: The Return of the King",
            "author": "J.R.R. Tolkien",
            "rating": 4.9,
            "price": {
                "mobi": 2
            },
            "description": "The final part of J.R.R. Tolkien's epic fantasy trilogy.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fantasy", "epic", "adventure"],
            "type": "fiction",
            "subtype": "fantasy",
            "promo": true,
            "fileUrl": "lord_of_the_rings_jrr_tolkien03"
        },
        {
            "id": 15,
            "title": "Matilda",
            "author": "Roald Dahl",
            "rating": 4.9,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A beloved children's novel about a young girl with extraordinary intelligence and telekinetic powers.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["children", "fantasy", "classic"],
            "type": "children",
            "subtype": "other_children_books",
            "promo": true,
            "fileUrl": "matilda_roald_dahl"
        },
        {
            "id": 16,
            "title": "Maus: My Father Bleeds History",
            "author": "Art Spiegelman",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
            },
            "description": "The first part of Art Spiegelman's graphic novel about his father's experiences during the Holocaust.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["graphic_novel", "historical", "biography"],
            "type": "fiction",
            "subtype": "graphic_novel",
            "promo": false,
            "fileUrl": "maus_art_spiegelman01"
        },
        {
            "id": 17,
            "title": "Maus: And Here My Troubles Began",
            "author": "Art Spiegelman",
            "rating": 4.9,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The second part of Art Spiegelman's graphic novel about his father's experiences during the Holocaust.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["graphic_novel", "historical", "biography"],
            "type": "fiction",
            "subtype": "graphic_novel",
            "promo": false,
            "fileUrl": "maus_art_spiegelman02"
        },    
        {
            "id": 18,
            "title": "Outlander",
            "author": "Diana Gabaldon",
            "rating": 4.6,
            "price": {
                "epub": 2,
                "mobi": 2
            },
            "description": "A historical time travel novel that follows a nurse from 1945 who finds herself in 18th century Scotland.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["historical_fiction", "romance", "time_travel"],
            "type": "fiction",
            "subtype": "romance",
            "promo": false,
            "fileUrl": "outlander_diana_gabaldon"
        },
        {
            "id": 19,
            "title": "Persepolis: The Story of a Childhood",
            "author": "Marjane Satrapi",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The first part of Marjane Satrapi's graphic memoir about her childhood in Iran.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["graphic_novel", "memoir", "historical"],
            "type": "fiction",
            "subtype": "graphic_novel",
            "promo": false,
            "fileUrl": "persepolis_marjane_satrapi01"
        },
        {
            "id": 20,
            "title": "Persepolis: The Story of a Return",
            "author": "Marjane Satrapi",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The second part of Marjane Satrapi's graphic memoir about her return to Iran as an adult.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["graphic_novel", "memoir", "historical"],
            "type": "fiction",
            "subtype": "graphic_novel",
            "promo": false,
            "fileUrl": "persepolis_marjane_satrapi02"
        },
        {
            "id": 21,
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A classic novel about the social issues and romantic entanglements of the Bennet family.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["classic", "romance", "historical"],
            "type": "fiction",
            "subtype": "romance",
            "promo": true,
            "fileUrl": "pride_and_prejudice_jane_austen"
        },
        {
            "id": 22,
            "title": "Robinson Crusoe",
            "author": "Daniel Defoe",
            "rating": 4.4,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The adventure story of a man stranded on a desert island and his survival.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["adventure", "classic", "survival"],
            "type": "fiction",
            "subtype": "adventure",
            "promo": false,
            "fileUrl": "robinson_crusoe_daniel_defoe"
        },
        {
            "id": 23,
            "title": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A thought-provoking history of humankind from the Stone Age to the modern era.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "history", "philosophy"],
            "type": "non_fiction",
            "subtype": "history",
            "promo": false,
            "fileUrl": "sapiens_a_brief_history_of_humankind_yuval_noah_harari"
        },
        {
            "id": 24,
            "title": "The 7 Habits of Highly Effective People",
            "author": "Stephen R. Covey",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A self-help book offering strategies for personal and professional effectiveness.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "self_help", "personal_development"],
            "type": "non_fiction",
            "subtype": "self_help",
            "promo": true,
            "fileUrl": "the_7_habits_of_highly_effective_people_stephen_r_covey"
        },
        {
            "id": 25,
            "title": "The Book Thief",
            "author": "Markus Zusak",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A novel set in Nazi Germany, narrated by Death, about a young girl's love for books.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["historical_fiction", "drama", "war"],
            "type": "fiction",
            "subtype": "historical_fiction",
            "promo": false,
            "fileUrl": "the_book_thief_markus_zusak"
        },
        {
            "id": 26,
            "title": "The Da Vinci Code",
            "author": "Dan Brown",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A thriller involving a murder in the Louvre and a secret society.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["thriller", "mystery", "suspense"],
            "type": "fiction",
            "subtype": "thriller",
            "promo": false,
            "fileUrl": "the_da_vinci_code_dan_brown"
        },
        {
            "id": 27,
            "title": "The Exorcist",
            "author": "William Peter Blatty",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A horror novel about the exorcism of a young girl possessed by a demonic entity.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["horror", "thriller", "supernatural"],
            "type": "fiction",
            "subtype": "horror",
            "promo": true,
            "fileUrl": "the_exorcist_william_peter_blatty"
        },
        {
            "id": 28,
            "title": "The Girl with the Dragon Tattoo",
            "author": "Stieg Larsson",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A gripping mystery involving a journalist and a hacker investigating a wealthy family's secrets.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["mystery", "thriller", "crime"],
            "type": "fiction",
            "subtype": "mystery",
            "promo": false,
            "fileUrl": "the_girl_with_the_dragon_tattoo_stieg_larsson"
        },
        {
            "id": 29,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "rating": 4.5,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A classic novel about the decadence and excess of the Jazz Age in America.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["classic", "literary", "historical"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": true,
            "fileUrl": "the_great_gatsby_f_scott_fitzgerald"
        },
        {
            "id": 30,
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "rating": 4.8,
            "price": {
                "mobi": 2
            },
            "description": "A fantasy novel about the adventures of Bilbo Baggins in Middle-earth.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["fantasy", "adventure", "classic"],
            "type": "fiction",
            "subtype": "fantasy",
            "promo": true,
            "fileUrl": "the_hobbit_jrr_tolkien"
        },
        {
            "id": 31,
            "title": "The Hunger Games: Hunger Games",
            "author": "Suzanne Collins",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The first book in the dystopian trilogy about a televised death match in a post-apocalyptic world.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["dystopian", "thriller", "young_adult"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": false,
            "fileUrl": "the_hunger_games_suzanne_collins01"
        },
        {
            "id": 32,
            "title": "The Hunger Games: Catching Fire",
            "author": "Suzanne Collins",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The second book in the Hunger Games trilogy, continuing the story of Katniss Everdeen.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["dystopian", "thriller", "young_adult"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": false,
            "fileUrl": "the_hunger_games_suzanne_collins02"
        },
        {
            "id": 33,
            "title": "The Hunger Games: Mockingjay",
            "author": "Suzanne Collins",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "The final book in the Hunger Games trilogy, wrapping up the epic dystopian saga.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["dystopian", "thriller", "young_adult"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": false,
            "fileUrl": "the_hunger_games_suzanne_collins03"
        },
        {
            "id": 34,
            "title": "The Innovators",
            "author": "Walter Isaacson",
            "rating": 4.5,
            "price": {
                "mobi": 2
            },
            "description": "A history of the key figures who created the computer and the Internet.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "history"],
            "type": "non_fiction",
            "subtype": "technology",
            "promo": false,
            "fileUrl": "the_innovators_walter_isaacson"
        },
        {
            "id": 35,
            "title": "The Road",
            "author": "Cormac McCarthy",
            "rating": 4.6,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A post-apocalyptic novel about a father and son's struggle to survive in a barren world.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["dystopian", "apocalypse", "survival"],
            "type": "fiction",
            "subtype": "horror",
            "promo": false,
            "fileUrl": "the_road_cormac_mccarthy"
        },
        {
            "id": 36,
            "title": "The Joy of Cooking",
            "author": "Irma S. Rombauer",
            "rating": 4.4,
            "price": {
                "pdf": 1,
            },
            "description": "A classic cookbook offering a wide range of recipes and culinary techniques.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "cookbook", "recipes"],
            "type": "non_fiction",
            "subtype": "cooking",
            "promo": true,
            "fileUrl": "the_joy_of_cooking_irma_s_rombauer"
        },
        {
            "id": 37,
            "title": "The Lean Startup",
            "author": "Eric Ries",
            "rating": 4.5,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A guide to innovative startup practices focusing on efficient product development and business growth.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["non_fiction", "business", "entrepreneurship"],
            "type": "non_fiction",
            "subtype": "economics",
            "promo": false,
            "fileUrl": "the_lean_startup_eric_ries"
        },
        {
            "id": 38,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "rating": 4.8,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A novel about racial injustice and moral growth in the Deep South, told through the eyes of a young girl.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["classic", "literary", "social_issues"],
            "type": "fiction",
            "subtype": "literary_fiction",
            "promo": true,
            "fileUrl": "to_kill_a_mockingbird_harper_lee"
        },
        {
            "id": 39,
            "title": "Treasure Island",
            "author": "Robert Louis Stevenson",
            "rating": 4.7,
            "price": {
                "pdf": 1,
                "epub": 2,
                "mobi": 2
            },
            "description": "A classic adventure novel about a young boy's search for buried treasure.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["adventure", "classic", "pirates"],
            "type": "fiction",
            "subtype": "adventure",
            "promo": false,
            "fileUrl": "treasure_island_robert_louis_stevenson"
        },
        {
            "id": 40,
            "title": "Twenty Thousand Leagues Under the Sea",
            "author": "Jules Verne",
            "rating": 4.6,
            "price": {
                "epub": 2,
                "mobi": 2
            },
            "description": "A science fiction novel about an underwater adventure with Captain Nemo and his submarine, the Nautilus.",
            "format": ["pdf", "epub", "mobi"],
            "tags": ["sf", "adventure", "classic"],
            "type": "fiction",
            "subtype": "sf",
            "promo": false,
            "fileUrl": "twenty_thousand_leagues_under_the_sea_jules_verne"
        },
        {
            "id": 41,
            "title": "Coding with Javascript for Dummies",
            "author": "Chris Minnick",
            "rating": 4.6,
            "price": {
                "pdf": 1
            },
            "description": "Coding with JavaScript For Dummies provides easy, hands-on instruction for anyone looking to learn this popular client-side language. No experience? No problem!",
            "format": ["pdf"],
            "tags": ["computers", "programming"],
            "type": "non_fiction",
            "subtype": "technology",
            "promo": false,
            "fileUrl": "coding_with_javascript_for_dummies"
        }
    ],
    HEADERLIST: [
        {choice: "category", type: "fiction", subtype: "literary_fiction"},
        {choice: "category", type: "fiction", subtype: "mystery"},
        {choice: "category", type: "fiction", subtype: "thriller"},
        {choice: "category", type: "fiction", subtype: "sf"},
        {choice: "category", type: "fiction", subtype: "fantasy"},
        {choice: "category", type: "fiction", subtype: "romance"},
        {choice: "category", type: "fiction", subtype: "historical_fiction"},
        {choice: "category", type: "fiction", subtype: "horror"},
        {choice: "category", type: "fiction", subtype: "adventure"},
        {choice: "category", type: "fiction", subtype: "graphic_novel"},
        {choice: "category", type: "non_fiction", subtype: "self_help"},
        {choice: "category", type: "non_fiction", subtype: "cooking"},
        {choice: "category", type: "non_fiction", subtype: "technology"},
        {choice: "category", type: "non_fiction", subtype: "economics"},
        {choice: "category", type: "children", subtype: "fairy_tales"},
        {choice: "category", type: "children", subtype: "other_children_books"},
        {choice: "about", type: "about"},
        {choice: "contact", type: "contact"},
    ],
    CONTACT: {email: "oanapopescu93@gmail.com"},
    FINANCES: {
        currencies: ['USD', 'EUR', 'GBP', 'CHF', 'RON'],
        discount: {
            threshold: 100,
            discount: 10,   
        },
        minimum_amount_usd: 3,
    },
    books: [
        "1984_george_orwell",
        "and_then_there_were_none_agatha_christie",
        "charlottes_web_eb_white",
        "dracula_bram_stoker",
        "dune_frank_herbert",
        "enders_game_orson_scott_card",        
        "grimms_fairy_tales_brothers_grimm",
        "harry_potter_and_the_sorcerers_stone_jk_rowling",
        "into_the_wild_jon_krakauer",
        "it_stephen_king",
        "journey_to_the_center_of_the_earth_jules_verne",
        "lord_of_the_rings_jrr_tolkien01",
        "lord_of_the_rings_jrr_tolkien02",
        "lord_of_the_rings_jrr_tolkien03",
        "maus_art_spiegelman01",
        "maus_art_spiegelman02",
        "matilda_roald_dahl",
        "outlander_diana_gabaldon",
        "persepolis_marjane_satrapi01",
        "persepolis_marjane_satrapi02",
        "pride_and_prejudice_jane_austen",
        "robinson_crusoe_daniel_defoe",
        "sapiens_a_brief_history_of_humankind_yuval_noah_harari",
        "the_7_habits_of_highly_effective_people_stephen_r_covey",
        "the_book_thief_markus_zusak",
        "the_da_vinci_code_dan_brown",
        "the_exorcist_william_peter_blatty",
        "the_girl_with_the_dragon_tattoo_stieg_larsson",
        "the_great_gatsby_f_scott_fitzgerald",
        "the_hobbit_jrr_tolkien",
        "the_hunger_games_suzanne_collins01",
        "the_hunger_games_suzanne_collins02",
        "the_hunger_games_suzanne_collins03",
        "the_innovators_walter_isaacson",
        "the_road_cormac_mccarthy",
        "the_joy_of_cooking_irma_s_rombauer",
        "the_lean_startup_eric_ries",
        "to_kill_a_mockingbird_harper_lee",
        "treasure_island_robert_louis_stevenson",
        "twenty_thousand_leagues_under_the_sea_jules_verne",
    ]    
    
})