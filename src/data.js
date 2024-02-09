const data = [
    {
        id: 1,
        name: "Amphiteatre of El Jem",
        location: "El Jem, Tunisia",
        imageUrl: "https://lp-cms-production.imgix.net/2019-06/f994299e932fa892d3a3e3ecf2f05ac3-roman-colosseum.jpg",
        description: "The impressive ruins of the largest colosseum in North Africa, a huge amphitheatre which could hold up to 35,000 spectators, are found in the small village of El Jem. This 3rd-century monument illustrates the grandeur and extent of Imperial Rome.",
        url: "https://whc.unesco.org/en/list/38/",
        position: [35.299, 10.705]

    },
    {
        id: 2,
        name: "The Crocodile Farm",
        location: "Djerba, Tunisia",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/10/4c/8a/p-20180213-125325-largejpg.jpg?w=1200&h=-1&s=1",
        description: "The Crocodile Farm is a zoo located in Djerba, Tunisia. It is home to hundreds of crocodiles, as well as other animals such as snakes, lizards, and giant turtles.",
        url: "https://www.tripadvisor.com/Attraction_Review-g297948-d3560332-Reviews-The_Crocodile_Farm-Midoun_Djerba_Island_Medenine_Governorate.html",
        position: [33.788, 10.956]


    },
    {
        id: 3,
        name: "The National Bardo Museum",
        location: "Tunis, Tunisia",
        imageUrl: "https://www.ifm.tn/uploads/news/22/2023-09/47112ec27f0dd480f48d4687cf48cb39.jpg",
        description: "The national Bardo Museum is a jewel of Tunisian heritage. It is housed in an old Beylic palace dating back to the XIXth Century. It retraces, through its collections, a big part of Tunisia’s history (from Prehistory to the contemporary epoch) and contains the largest collection of mosaics in the world.",
        url: "https://www.tripadvisor.com/Attraction_Review-g293758-d472648-Reviews-The_National_Bardo_Museum-Tunis_Tunis_Governorate.html",
        position: [36.811, 10.149]

    },
    {
        id: 4,
        name: "The Medina of Tunis",
        location: "Tunis, Tunisia",
        imageUrl: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2023/02/medina-de-tunis.jpg?fit=850%2C491&ssl=1",
        description: "The medina of Tunis is the historic heart of Tunis, the capital of Tunisia, and a UNESCO World Heritage Site. It is a very authentic and lively place, with a lot of history and culture.",
        url: "https://whc.unesco.org/en/list/36/",
        position: [36.806, 10.172]
    },
    {
        id: 5,
        name: "The Medina of Sousse",
        location: "Sousse, Tunisia",
        imageUrl: "https://whc.unesco.org/uploads/thumbs/site_0498_0008-1200-630-20151105160146.jpg",
        description: "Sousse was an important commercial and military port during the Aghlabid period (800–909) and is a typical example of a town dating from the first centuries of Islam. With its kasbah, ramparts, medina (with the Great Mosque), Bu Ftata Mosque and typical ribat (both a fort and a religious building), Sousse was part of a coastal defence system.",
        url: "https://whc.unesco.org/en/list/498/",
        position: [35.829, 10.640]
    },
    {
        id: 6,
        name: "Djerbahood",
        location: "Djerba, Tunisia",
        imageUrl: "https://djerba.holiday/wp-content/uploads/2023/06/djerbahood-mural-art-project-erriadh-tunisia-fb.jpg",
        description: "Djerbahood is a project of urban art, which took place in the village of Erriadh, on the island of Djerba, Tunisia. The project was initiated by the Itinerrance gallery, and saw the participation of 150 artists from 30 different nationalities.",
        url: "https://www.tripadvisor.com/Attraction_Review-g297941-d6957502-Reviews-Djerbahood-Djerba_Island_Medenine_Governorate.html",
        position: [33.800, 10.855]
    },
    {
        id: 7,
        name: "The Medina of Kairouan",
        location: "Kairouan, Tunisia",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Vue_a%C3%A9rienne_de_la_Grande_Mosqu%C3%A9e_de_Kairouan%2C_en_Tunisie.jpg",
        description: "Founded in 670, Kairouan flourished under the Aghlabid dynasty in the 9th century. Despite the transfer of the political capital to Tunis in the 12th century, Kairouan remained the Maghreb’s principal holy city. Its rich architectural heritage includes the Great Mosque, with its marble and porphyry columns, and the 9th-century Mosque of the Three Gates.",
        url: "https://whc.unesco.org/en/list/499/",
        position: [35.678, 10.103]
    },
    {
        id: 8,
        name: "Archaeological Site of Carthage",
        location: "Carthage, Tunisia",
        imageUrl: "https://www.planetware.com/photos-large/TUN/tunisia-tunis-carthage-ruins2.jpg",
        description: "Carthage was founded in the 9th century B.C. on the Gulf of Tunis. From the 6th century onwards, it developed into a great trading empire covering much of the Mediterranean and was home to a brilliant civilization. In the course of the long Punic wars, Carthage occupied territories belonging to Rome, which finally destroyed its rival in 146 B.C. A second Roman Carthage was then established on the ruins of the first.",
        url: "https://whc.unesco.org/en/list/37",
        position: [36.853, 10.329]
    },
    {
        id: 9,
        name: "El Ghriba Synagogue",
        location: "Djerba, Tunisia",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXzhqZe0LEFQUpwmFgWOR-JkdS_Q8ianjjex3iNc4mw&s",
        description: "The El Ghriba Synagogue is located on the Tunisian island of Djerba. It is one of the oldest and most famous synagogues in the world. It is also the oldest synagogue in Tunisia and is the most important pilgrimage site for the Jewish community in the country.",
        url: "https://www.tripadvisor.com/Attraction_Review-g297941-d477280-Reviews-El_Ghriba_Synagogue-Djerba_Island_Medenine_Governorate.html",
        position: [33.826, 10.732]
    },
    {
        id: 10,
        name: "Hammamet Beach",
        location: "Hammamet, Tunisia",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/00/04/0c/hammamet-beach.jpg?w=1200&h=-1&s=1",
        description: "Hammamet is a town in Tunisia. It is located in the south-eastern part of the northern peninsula of Cap Bon in the Governorate of Nabeul, on the northern edge of the Gulf of Hammamet. It is a popular destination for swimming and water sports.",
        url: "https://www.tripadvisor.com/Attraction_Review-g297943-d632506-Reviews-Hammamet_Beach-Hammamet_Nabeul_Governorate.html",
        position: [36.403, 10.623]
    },
    {
        id: 11,
        name: "Sahara Desert",
        location: "Tozeur, Tunisia",
        imageUrl: "https://res.cloudinary.com/lastminute-contenthub/s--fX2hduG0--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Africa/Tunisia/shutterstock_280673306",
        description: "Tozeur is a desert oasis town, sitting in the country's southeast.For many visitors, it's a practical base for the tourist attractions of the Sahara with the chott el djerid salt pans, sand dune vistas, and the oases of Tamerza and Chebika all within day-tripping distance from town.",
        url: "https://maps.app.goo.gl/2J3tZZiukZiQQFq5A",
        position: [33.925, 8.135]
    },
    {
        id: 12,
        name: "Matmata",
        location: "Gabes, Tunisia",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d4/93/2d/photo0jpg.jpg?w=600&h=400&s=1",
        description: "A small town in southern Tunisia, Matmata is best known for its underground cave or troglodyte structures, which house some of the local Berber population. Undoubtedly Matmata's most famous building is the Hotel Sidi Driss, which served as the Lars Homestead (and therefore the home of Luke Skywalker and his Uncle Owen and Aunt Beru Lars) in the Star Wars movies.",
        url: "https://www.tripadvisor.com/Tourism-g293756-Matmata_Gabes_Governorate-Vacations.html",
        position: [33.531, 9.172]
    }
]
export default data;