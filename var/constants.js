module.exports = Object.freeze({
    SERVER: "http://localhost:3000",
    AUTH_USER: "09f009efe7b9ae",
    AUTH_PASS: "cd1233a2d8d6a7",
    AUTH_FROM: "oanapopescu93@gmail.com",

    DATABASE: [
        {
            host: 'db4free.net', 
            user: 'oana_popescu_93', 
            password: 'Qazwsxedc123rfv123!',
            database: 'bunnybetdatabase',
            sql: "SELECT * FROM casino_users",
            // multipleStatements: true 
        },
    ],

    SECRET_KEY: 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3',
    SECRET_KEY_JWT: "hello friend",

    SERVER_TABLES: [
        {table_id: '001', table_name: "roulette", table_type: "european"},
        {table_id: '002', table_name: "roulette", table_type: "american"},
        {table_id: '003', table_name: "roulette", table_type: "european"},
        {table_id: '004', table_name: "roulette", table_type: "american"},
        {table_id: '005', table_name: "blackjack"},
        {table_id: '006', table_name: "blackjack"},
        {table_id: '007', table_name: "blackjack"},
        {table_id: '008', table_name: "slots", table_type: "type1"},
        {table_id: '009', table_name: "slots", table_type: "type2"},
        {table_id: '010', table_name: "slots", table_type: "type1"},
        {table_id: '011', table_name: "slots", table_type: "type2"},
        {table_id: '012', table_name: "slots", table_type: "type1"},
        {table_id: '013', table_name: "craps"},
        {table_id: '014', table_name: "craps"},
        {table_id: '015', table_name: "craps"},
        {table_id: '016', table_name: "craps"},
        {table_id: '017', table_name: "craps"},
    ],
    SERVER_MARKET: [        
        {id: "garlic", name: "garlic", value:"0.1 carrots", price:0.1, quantity: 1},
        {id: "onion", name: "onion", value:"0.2 carrots", price:0.2, quantity: 1},
        {id: "radish", name: "radish", value:"0.5 carrots", price:0.5, quantity: 1},
        {id: "carrot", name: "carrot", value:"1 carrots", price:1, quantity: 1},
        {id: "turnip", name: "turnip", value:"2 carrots", price:2, quantity: 1},
        {id: "potato", name: "potato", value:"5 carrots", price:5, quantity: 1},
        {id: "cabbage", name: "cabbage", value:"10 carrots", price:10, quantity: 1},
    ],
    SERVER_PROFILES: [        
        {id: 1, name_eng: "weasel", name_ro: "nevastuica", free: true},
        {id: 2, name_eng: "fox", name_ro: "vulpe", free: false},
        {id: 3, name_eng: "wolf", name_ro: "lup", free: false},
        {id: 4, name_eng: "lynx", name_ro: "ras", free: false},
        {id: 5, name_eng: "ferret", name_ro: "dihor", free: true},
        {id: 6, name_eng: "martin", name_ro: "jder", free: true},
    ],
    SLOT_PRIZE: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
    SERVER_RABBITS: [
        {id: 1, name: "Rabbit01", color: "red"},
        {id: 2, name: "Rabbit02", color: "orange"},
        {id: 3, name: "Rabbit03", color: "yellow"},
        {id: 4, name: "Rabbit04", color: "green"},
        {id: 5, name: "Rabbit05", color: "blue"},
        {id: 6, name: "Rabbit06", color: "purple"},
    ],
    
    DONATIONS: [        
        {type: "crypto", title: "Bitcoin", text: "-", link: "bitcoin:-"},
        {type: "crypto", title: "Ethereum", text: "-"},
        {type: "crypto", title: "Litecoin", text: "-"},
        {type: "crypto", title: "Bitcoin Cash", text: "-"},
        {type: "crypto", title: "Dogecoin", text: "-"},
        {type: "paypal", title: "Paypal", link: "#"},
    ],

    CONTACT: [
        {title: "info", text: "I'm a self-taught Frontend / Javascript / React developer. My passion is to create websites, web applications, and games."},
        {title: "website", link: "https://oanapopescu.onrender.com/", icon: "fa fa-globe"},
        {title: "github", link: "https://github.com/oanapopescu93", icon: "fa fa-github"},
        {title: "email", link: "mailto:oanapopescu93@gmail.com", text: "oanapopescu93@gmail.com", icon: "fa fa-paper-plane"},
        {title: "phone", link: "#", text: "-", icon: "fa fa-phone"},
        // {title: "phone", link: "tel:+40729699148", text: "0729.699.148", icon: "fa fa-phone"},
        {title: "linkedin", link: "https://www.linkedin.com/in/oanapopescu93/", icon: "fa fa-linkedin"},
        {title: "location", text: "Romania, Bucharest", icon: "fa fa-map-marker"},        
    ],

    GOOGLE_CLIENT_ID: '287917990003-9l5albqoaoo06tsvknmftludhtg08hha.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
})