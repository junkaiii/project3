module.exports = function(app) {
  var locationController = require('../controllers/locationController');
  var Location = require('mongoose').model('Location');


  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.get('/setup', function(req, res) {

    var seedArray = [
  {
    "name": "Mellben Seafood (Ang Mo Kio)",
    "category": "zi-char",
    "postal": "560232",
    "latLong": {
      "coordinates": [
        103.837143,
        1.36823
      ]
    }
  },
  {
    "name": "Potato Head Folk",
    "category": "western",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "Oriole Coffee + Bar (Somerset)",
    "category": "western",
    "postal": "238163",
    "latLong": {
      "coordinates": [
        103.837924,
        1.300711
      ]
    }
  },
  {
    "name": "136 Hong Kong Street Fish Head Steamboat (Clementi)",
    "category": "steamboat",
    "postal": "120713",
    "latLong": {
      "coordinates": [
        103.762082,
        1.304202
      ]
    }
  },
  {
    "name": "Soon Huat Bak Kut Teh   (Jalan Kayu)",
    "category": "bak-kut-teh",
    "postal": "799458",
    "latLong": {
      "coordinates": [
        103.873205,
        1.39679
      ]
    }
  },
  {
    "name": "Thai Gold Food",
    "category": "bencoolen",
    "postal": "189652",
    "latLong": {
      "coordinates": [
        103.851193,
        1.300287
      ]
    }
  },
  {
    "name": "Tom Yum Kungfu (Boat Quay)",
    "category": "steamboat",
    "postal": "049372",
    "latLong": {
      "coordinates": [
        103.848912,
        1.28753
      ]
    }
  },
  {
    "name": "The BetterField",
    "category": "clarke-quay",
    "postal": "179434",
    "latLong": {
      "coordinates": [
        103.849526,
        1.290576
      ]
    }
  },
  {
    "name": "Strangers' Reunion",
    "category": "outram-park",
    "postal": "169356",
    "latLong": {
      "coordinates": [
        103.836282,
        1.276944
      ]
    }
  },
  {
    "name": "The Chop House (VivoCity)",
    "category": "steak",
    "postal": "095858",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "UsQuBa - Scottish Restaurant & Bar",
    "category": "steak",
    "postal": "049213",
    "latLong": {
      "coordinates": [
        103.853889,
        1.285655
      ]
    }
  },
  {
    "name": "Sufi's Corner",
    "category": "turkish",
    "postal": "199747",
    "latLong": {
      "coordinates": [
        103.85965,
        1.300854
      ]
    }
  },
  {
    "name": "Borshch Steakhouse",
    "category": "russian",
    "postal": "555954",
    "latLong": {
      "coordinates": [
        103.865592,
        1.364419
      ]
    }
  },
  {
    "name": "FOC Restaurant",
    "category": "spanish",
    "postal": "059679",
    "latLong": {
      "coordinates": [
        103.847527,
        1.287379
      ]
    }
  },
  {
    "name": "BUYAN Russian Restaurant and Caviar Bar",
    "category": "russian",
    "postal": "089593",
    "latLong": {
      "coordinates": [
        103.842879,
        1.279191
      ]
    }
  },
  {
    "name": "Russkiy Dome",
    "category": "russian",
    "postal": "117867",
    "latLong": {
      "coordinates": [
        103.780681,
        1.283221
      ]
    }
  },
  {
    "name": "The Naked Finn",
    "category": "seafood",
    "postal": "109454",
    "latLong": {
      "coordinates": [
        103.804233,
        1.275272
      ]
    }
  },
  {
    "name": "Cicheti",
    "category": "pizza",
    "postal": "198901",
    "latLong": {
      "coordinates": [
        103.860124,
        1.30172
      ]
    }
  },
  {
    "name": "La Nonna (Holland Village)",
    "category": "pizza",
    "postal": "Singapore",
    "latLong": {
      "coordinates": [
        103.8677444,
        1.3553794
      ]
    }
  },
  {
    "name": "New Ubin Seafood",
    "category": "seafood",
    "postal": "575680",
    "latLong": {
      "coordinates": [
        103.839838,
        1.355647
      ]
    }
  },
  {
    "name": "Alt. Pizza (Suntec City)",
    "category": "pizza",
    "postal": "038983",
    "latLong": {
      "coordinates": [
        103.858967,
        1.295968
      ]
    }
  },
  {
    "name": "Pizzeria Mozza",
    "category": "pizza",
    "postal": "018956",
    "latLong": {
      "coordinates": [
        103.858322,
        1.282275
      ]
    }
  },
  {
    "name": "The Ramen Stall",
    "category": "ramen",
    "postal": "198755",
    "latLong": {
      "coordinates": [
        103.859931,
        1.30369
      ]
    }
  },
  {
    "name": "Mad for Garlic (Suntec City)",
    "category": "pizza",
    "postal": "038983",
    "latLong": {
      "coordinates": [
        103.858967,
        1.295968
      ]
    }
  },
  {
    "name": "Kanshoku Ramen Bar (Orchard Gateway)",
    "category": "ramen",
    "postal": "238858",
    "latLong": {
      "coordinates": [
        103.839192,
        1.300542
      ]
    }
  },
  {
    "name": "Ippudo Singapore (Mandarin Gallery)",
    "category": "ramen",
    "postal": "238897",
    "latLong": {
      "coordinates": [
        103.836501,
        1.302138
      ]
    }
  },
  {
    "name": "A Noodle Story (Amoy Street Food Centre)",
    "category": "ramen",
    "postal": "069111",
    "latLong": {
      "coordinates": [
        103.846712,
        1.279376
      ]
    }
  },
  {
    "name": "DSTLLRY",
    "category": "ramen",
    "postal": "138562",
    "latLong": {
      "coordinates": [
        103.7945525,
        1.2924274
      ]
    }
  },
  {
    "name": "Ramen Bari-Uma (Tanglin)",
    "category": "ramen",
    "postal": "247909",
    "latLong": {
      "coordinates": [
        103.827018,
        1.306364
      ]
    }
  },
  {
    "name": "Ramen Keisuke Tonkotsu King (Tanjong Pagar)",
    "category": "tanjong-pagar",
    "postal": "078867",
    "latLong": {
      "coordinates": [
        103.843891,
        1.276993
      ]
    }
  },
  {
    "name": "JINzakaya",
    "category": "ramen",
    "postal": "217562",
    "latLong": {
      "coordinates": [
        103.854285,
        1.312316
      ]
    }
  },
  {
    "name": "Sapporo Ramen Miharu",
    "category": "ramen",
    "postal": "039596",
    "latLong": {
      "coordinates": [
        103.860166,
        1.291601
      ]
    }
  },
  {
    "name": "Peperoni Pizzeria (Greenwood)",
    "category": "pizza",
    "postal": "289195",
    "latLong": {
      "coordinates": [
        103.807242,
        1.331151
      ]
    }
  },
  {
    "name": "Kith (Park Mall)",
    "category": "dhoby-ghaut",
    "postal": "238459",
    "latLong": {
      "coordinates": [
        103.844577,
        1.298048
      ]
    }
  },
  {
    "name": "La Pizzaiola (Braddell Heights Estate)",
    "category": "pizza",
    "postal": "358987",
    "latLong": {
      "coordinates": [
        103.867568,
        1.347525
      ]
    }
  },
  {
    "name": "Ramen Keisuke Lobster King",
    "category": "clarke-quay",
    "postal": "179022",
    "latLong": {
      "coordinates": [
        103.846009,
        1.2908329
      ]
    }
  },
  {
    "name": "Supply & Demand (Orchard Gateway)",
    "category": "pizza",
    "postal": "238858",
    "latLong": {
      "coordinates": [
        103.839192,
        1.300542
      ]
    }
  },
  {
    "name": "HOUSE",
    "category": "dempsey",
    "postal": "249672",
    "latLong": {
      "coordinates": [
        103.809365,
        1.30349
      ]
    }
  },
  {
    "name": "Yong Kee Seafood",
    "category": "seafood",
    "postal": "208804",
    "latLong": {
      "coordinates": [
        103.8547059,
        1.304508
      ]
    }
  },
  {
    "name": "Mellben Seafood (Ang Mo Kio)",
    "category": "seafood",
    "postal": "560232",
    "latLong": {
      "coordinates": [
        103.837143,
        1.36823
      ]
    }
  },
  {
    "name": "Penang Seafood Restaurant",
    "category": "aljunied",
    "postal": "388258",
    "latLong": {
      "coordinates": [
        103.883363,
        1.3158749
      ]
    }
  },
  {
    "name": "Keng Eng Kee Seafood (Alexandra)",
    "category": "seafood",
    "postal": "150124",
    "latLong": {
      "coordinates": [
        103.803405,
        1.285794
      ]
    }
  },
  {
    "name": "Humpback",
    "category": "seafood",
    "postal": "089832",
    "latLong": {
      "coordinates": [
        103.840814,
        1.279043
      ]
    }
  },
  {
    "name": "JB Ah Meng",
    "category": "seafood",
    "postal": "388353",
    "latLong": {
      "coordinates": [
        103.881463,
        1.313043
      ]
    }
  },
  {
    "name": "Diamond Kitchen (Science Park)",
    "category": "chinese",
    "postal": "118260",
    "latLong": {
      "coordinates": [
        103.7904159,
        1.287916
      ]
    }
  },
  {
    "name": "Pince & Pints",
    "category": "seafood",
    "postal": "089497",
    "latLong": {
      "coordinates": [
        103.843442,
        1.279048
      ]
    }
  },
  {
    "name": "Two Men Bagel House",
    "category": "sandwiches",
    "postal": "079717",
    "latLong": {
      "coordinates": [
        103.844368,
        1.274261
      ]
    }
  },
  {
    "name": "The Hangar",
    "category": "haji-lane",
    "postal": "199724",
    "latLong": {
      "coordinates": [
        103.859558,
        1.30061
      ]
    }
  },
  {
    "name": "Flock Caf (Tiong Bahru)",
    "category": "sandwiches",
    "postal": "162078",
    "latLong": {
      "coordinates": [
        103.830405,
        1.283741
      ]
    }
  },
  {
    "name": "Park Bench Deli",
    "category": "telok-ayer",
    "postal": "068627",
    "latLong": {
      "coordinates": [
        103.847277,
        1.2798719
      ]
    }
  },
  {
    "name": "GST",
    "category": "telok-ayer",
    "postal": "069047",
    "latLong": {
      "coordinates": [
        103.847336,
        1.2796
      ]
    }
  },
  {
    "name": "Sarnies (Telok Ayer)",
    "category": "sandwiches",
    "postal": "068601",
    "latLong": {
      "coordinates": [
        103.848086,
        1.281577
      ]
    }
  },
  {
    "name": "Sacha & Sons",
    "category": "sandwiches",
    "postal": "238897",
    "latLong": {
      "coordinates": [
        103.836501,
        1.302138
      ]
    }
  },
  {
    "name": "Selfish Gene Cafe",
    "category": "duxton",
    "postal": "089678",
    "latLong": {
      "coordinates": [
        103.84203,
        1.278237
      ]
    }
  },
  {
    "name": "Percolate",
    "category": "sandwiches",
    "postal": "460136",
    "latLong": {
      "coordinates": [
        103.935139,
        1.328263
      ]
    }
  },
  {
    "name": "Brawn & Brains",
    "category": "geylang",
    "postal": "399718",
    "latLong": {
      "coordinates": [
        103.881833,
        1.310077
      ]
    }
  },
  {
    "name": "Shashlik Restaurant",
    "category": "russian",
    "postal": "238882",
    "latLong": {
      "coordinates": [
        103.830139,
        1.3055779
      ]
    }
  },
  {
    "name": "UNA at One Rochester",
    "category": "spanish",
    "postal": "139212",
    "latLong": {
      "coordinates": [
        103.787689,
        1.305308
      ]
    }
  },
  {
    "name": "Salt Tapas & Bar",
    "category": "spanish",
    "postal": "179103",
    "latLong": {
      "coordinates": [
        103.852807,
        1.294149
      ]
    }
  },
  {
    "name": "My Little Tapas Bar",
    "category": "spanish",
    "postal": "069420",
    "latLong": {
      "coordinates": [
        103.845958,
        1.282295
      ]
    }
  },
  {
    "name": "Moosehead",
    "category": "spanish",
    "postal": "068579",
    "latLong": {
      "coordinates": [
        103.848421,
        1.282094
      ]
    }
  },
  {
    "name": "My Little Spanish Place (Boat Quay)",
    "category": "spanish",
    "postal": "049843",
    "latLong": {
      "coordinates": [
        103.849375,
        1.287188
      ]
    }
  },
  {
    "name": "Sabio By The Sea",
    "category": "spanish",
    "postal": "098395",
    "latLong": {
      "coordinates": [
        103.836539,
        1.242948
      ]
    }
  },
  {
    "name": "Esquina",
    "category": "spanish",
    "postal": "089267",
    "latLong": {
      "coordinates": [
        103.842043,
        1.279906
      ]
    }
  },
  {
    "name": "My Little Spanish Place (Bukit Timah)",
    "category": "coronation",
    "postal": "269720",
    "latLong": {
      "coordinates": [
        103.809309,
        1.324488
      ]
    }
  },
  {
    "name": "Churro 101 (Bugis+)",
    "category": "spanish",
    "postal": "188067",
    "latLong": {
      "coordinates": [
        103.854302,
        1.299629
      ]
    }
  },
  {
    "name": "Itacho Sushi (Plaza Singapura)",
    "category": "sushi",
    "postal": "238839",
    "latLong": {
      "coordinates": [
        103.845411,
        1.301016
      ]
    }
  },
  {
    "name": "Hana-Hana",
    "category": "sushi",
    "postal": "078867",
    "latLong": {
      "coordinates": [
        103.843891,
        1.276993
      ]
    }
  },
  {
    "name": "Koji Sushi Bar",
    "category": "sushi",
    "postal": "048660",
    "latLong": {
      "coordinates": [
        103.847664,
        1.284855
      ]
    }
  },
  {
    "name": "Standing Sushi Bar (8Q SAM)",
    "category": "sushi",
    "postal": "188535",
    "latLong": {
      "coordinates": [
        103.851683,
        1.297314
      ]
    }
  },
  {
    "name": "Tatsu (Asia Square)",
    "category": "sushi",
    "postal": "018961",
    "latLong": {
      "coordinates": [
        103.850662,
        1.278295
      ]
    }
  },
  {
    "name": "Fat Cow",
    "category": "sushi",
    "postal": "248649",
    "latLong": {
      "coordinates": [
        103.823715,
        1.303152
      ]
    }
  },
  {
    "name": "Sushiro",
    "category": "thomson",
    "postal": "574408",
    "latLong": {
      "coordinates": [
        103.830935,
        1.354637
      ]
    }
  },
  {
    "name": "The Sushi Bar (Far East Plaza)",
    "category": "japanese",
    "postal": "228213",
    "latLong": {
      "coordinates": [
        103.833358,
        1.307249
      ]
    }
  },
  {
    "name": "Ollie Cafe",
    "category": "salads",
    "postal": "238858",
    "latLong": {
      "coordinates": [
        103.839192,
        1.300542
      ]
    }
  },
  {
    "name": "Sumiya Charcoal Grill Izakaya (Orchard Central)",
    "category": "somerset",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "The Daily Cut (One Raffles Place)",
    "category": "salads",
    "postal": "048616",
    "latLong": {
      "coordinates": [
        103.851082,
        1.284479
      ]
    }
  },
  {
    "name": "The Green Bucket",
    "category": "salads",
    "postal": "338729",
    "latLong": {
      "coordinates": [
        103.862322,
        1.311654
      ]
    }
  },
  {
    "name": "PasarBella (Suntec City)",
    "category": "salads",
    "postal": "038987",
    "latLong": {
      "coordinates": [
        103.85852,
        1.295285
      ]
    }
  },
  {
    "name": "Aloha Pok (Amoy Street)",
    "category": "salads",
    "postal": "069911",
    "latLong": {
      "coordinates": [
        103.847223,
        1.281168
      ]
    }
  },
  {
    "name": "JINzakaya",
    "category": "salads",
    "postal": "217562",
    "latLong": {
      "coordinates": [
        103.854285,
        1.312316
      ]
    }
  },
  {
    "name": "The Lawn Grill & Salad Cafe (Biopolis)",
    "category": "salads",
    "postal": "138669",
    "latLong": {
      "coordinates": [
        103.79233,
        1.304609
      ]
    }
  },
  {
    "name": "Grain Traders (Telok Ayer)",
    "category": "salads",
    "postal": "048946",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Deli Turk Turkish Cuisine (Upper East Coast)",
    "category": "turkish",
    "postal": "455259",
    "latLong": {
      "coordinates": [
        103.931769,
        1.3139559
      ]
    }
  },
  {
    "name": "Arkada Cafe",
    "category": "turkish",
    "postal": "138577",
    "latLong": {
      "coordinates": [
        103.7894257,
        1.2997359
      ]
    }
  },
  {
    "name": "Koh Grill & Sushi Bar",
    "category": "japanese",
    "postal": "238877",
    "latLong": {
      "coordinates": [
        103.833056,
        1.30351
      ]
    }
  },
  {
    "name": "Maras",
    "category": "turkish",
    "postal": "437157",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Stuff'd (City Square Mall)",
    "category": "turkish",
    "postal": "208539",
    "latLong": {
      "coordinates": [
        103.85662,
        1.311403
      ]
    }
  },
  {
    "name": "Alaturka",
    "category": "turkish",
    "postal": "199437",
    "latLong": {
      "coordinates": [
        103.859851,
        1.301305
      ]
    }
  },
  {
    "name": "Derwish Turkish Restaurant",
    "category": "turkish",
    "postal": "199476",
    "latLong": {
      "coordinates": [
        103.859492,
        1.301396
      ]
    }
  },
  {
    "name": "The Bakery Chef",
    "category": "waffles",
    "postal": "150161",
    "latLong": {
      "coordinates": [
        103.816147,
        1.283779
      ]
    }
  },
  {
    "name": "Sofra Turkish Cafe & Restaurant",
    "category": "turkish",
    "postal": "189702",
    "latLong": {
      "coordinates": [
        103.856559,
        1.296485
      ]
    }
  },
  {
    "name": "Ottoman Kebab & Grill",
    "category": "turkish",
    "postal": "467360",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "The Populus Coffee & Food Co.",
    "category": "waffles",
    "postal": "088875",
    "latLong": {
      "coordinates": [
        103.840769,
        1.278145
      ]
    }
  },
  {
    "name": "Montana Singapore",
    "category": "waffles",
    "postal": "188306",
    "latLong": {
      "coordinates": [
        103.849316,
        1.3001259
      ]
    }
  },
  {
    "name": "Curious Palette",
    "category": "waffles",
    "postal": "188667",
    "latLong": {
      "coordinates": [
        103.849815,
        1.299854
      ]
    }
  },
  {
    "name": "The Refinery",
    "category": "waffles",
    "postal": "208561",
    "latLong": {
      "coordinates": [
        103.862283,
        1.3103419
      ]
    }
  },
  {
    "name": "Creamier (Toa Payoh)",
    "category": "waffles",
    "postal": "310128",
    "latLong": {
      "coordinates": [
        103.8443379,
        1.338293
      ]
    }
  },
  {
    "name": "Sin Lee Foods",
    "category": "waffles",
    "postal": "162004",
    "latLong": {
      "coordinates": [
        103.8310429,
        1.287467
      ]
    }
  },
  {
    "name": "FATCAT Ice Cream Bar",
    "category": "waffles",
    "postal": "460416",
    "latLong": {
      "coordinates": [
        103.930534,
        1.328566
      ]
    }
  },
  {
    "name": "Bedrock Bar & Grill",
    "category": "steak",
    "postal": "238163",
    "latLong": {
      "coordinates": [
        103.837924,
        1.300711
      ]
    }
  },
  {
    "name": "Steakout",
    "category": "steak",
    "postal": "188017",
    "latLong": {
      "coordinates": [
        103.852434,
        1.29712
      ]
    }
  },
  {
    "name": "New Ubin Seafood",
    "category": "steak",
    "postal": "575680",
    "latLong": {
      "coordinates": [
        103.839838,
        1.355647
      ]
    }
  },
  {
    "name": "Le Steak by Chef Amri  (Jalan Kayu)",
    "category": "steak",
    "postal": "799472",
    "latLong": {
      "coordinates": [
        103.873212,
        1.3977679
      ]
    }
  },
  {
    "name": "Burnt Ends",
    "category": "date-night",
    "postal": "088391",
    "latLong": {
      "coordinates": [
        103.841804,
        1.280515
      ]
    }
  },
  {
    "name": "Shang Pin Hot Pot",
    "category": "steamboat",
    "postal": "189559",
    "latLong": {
      "coordinates": [
        103.848947,
        1.298775
      ]
    }
  },
  {
    "name": "Hai Di Lao Hot Pot (313@Somerset)",
    "category": "steamboat",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Spicy Thai - Thai Cafe",
    "category": "paya-lebar",
    "postal": "380115",
    "latLong": {
      "coordinates": [
        103.887252,
        1.321292
      ]
    }
  },
  {
    "name": "NEATO",
    "category": "salads",
    "postal": "189649",
    "latLong": {
      "coordinates": [
        103.8524939,
        1.302198
      ]
    }
  },
  {
    "name": "Sarnies (Telok Ayer)",
    "category": "salads",
    "postal": "068601",
    "latLong": {
      "coordinates": [
        103.848086,
        1.281577
      ]
    }
  },
  {
    "name": "Tsukada Nojo (Plaza Singapura)",
    "category": "steamboat",
    "postal": "238839",
    "latLong": {
      "coordinates": [
        103.845411,
        1.301016
      ]
    }
  },
  {
    "name": "Sunday Folks",
    "category": "waffles",
    "postal": "278116",
    "latLong": {
      "coordinates": [
        103.797152,
        1.31197
      ]
    }
  },
  {
    "name": "Fat Cow",
    "category": "steak",
    "postal": "248649",
    "latLong": {
      "coordinates": [
        103.823715,
        1.303152
      ]
    }
  },
  {
    "name": "Hai Di Lao Hot Pot (Clarke Quay)",
    "category": "steamboat",
    "postal": "179023",
    "latLong": {
      "coordinates": [
        103.845707,
        1.289943
      ]
    }
  },
  {
    "name": "Captain K Seafood Tower",
    "category": "steamboat",
    "postal": "188647",
    "latLong": {
      "coordinates": [
        103.849211,
        1.299129
      ]
    }
  },
  {
    "name": "Beauty in the Pot",
    "category": "steamboat",
    "postal": "430013",
    "latLong": {
      "coordinates": [
        103.895167,
        1.3149869
      ]
    }
  },
  {
    "name": "GoroGoro Steamboat & Korean Buffet",
    "category": "steamboat",
    "postal": "238851",
    "latLong": {
      "coordinates": [
        103.838784,
        1.301615
      ]
    }
  },
  {
    "name": "Jai Thai (Purvis Street)",
    "category": "thai",
    "postal": "188604",
    "latLong": {
      "coordinates": [
        103.855258,
        1.296381
      ]
    }
  },
  {
    "name": "Gin Khao (East Coast)",
    "category": "thai",
    "postal": "449878",
    "latLong": {
      "coordinates": [
        103.916065,
        1.302473
      ]
    }
  },
  {
    "name": "Kombi Rocks Diner",
    "category": "kovan",
    "postal": "545568",
    "latLong": {
      "coordinates": [
        103.8755539,
        1.357464
      ]
    }
  },
  {
    "name": "Priv (Keppel Bay)",
    "category": "steak",
    "postal": "098382",
    "latLong": {
      "coordinates": [
        103.812509,
        1.264002
      ]
    }
  },
  {
    "name": "Joe's Kitchen Thai Cuisine",
    "category": "thai",
    "postal": "150125",
    "latLong": {
      "coordinates": [
        103.802953,
        1.285815
      ]
    }
  },
  {
    "name": "Som Tam Modern Thai Fusion",
    "category": "thai",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "ParaThai",
    "category": "thai",
    "postal": "437157",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Nakhon Kitchen (Hougang)",
    "category": "kovan",
    "postal": "530212",
    "latLong": {
      "coordinates": [
        103.888103,
        1.359509
      ]
    }
  },
  {
    "name": "Nara Thai Cuisine (ION Orchard)",
    "category": "thai",
    "postal": "238801",
    "latLong": {
      "coordinates": [
        103.831767,
        1.304052
      ]
    }
  },
  {
    "name": "Hyde & Co.",
    "category": "western",
    "postal": "198753",
    "latLong": {
      "coordinates": [
        103.859887,
        1.303664
      ]
    }
  },
  {
    "name": "Tuk Tuk Cha (Suntec City)",
    "category": "thai",
    "postal": "038983",
    "latLong": {
      "coordinates": [
        103.858967,
        1.295968
      ]
    }
  },
  {
    "name": "The Lab",
    "category": "western",
    "postal": "199069",
    "latLong": {
      "coordinates": [
        103.858834,
        1.3028439
      ]
    }
  },
  {
    "name": "The Lokal",
    "category": "breakfast-and-brunch",
    "postal": "088865",
    "latLong": {
      "coordinates": [
        103.841038,
        1.278278
      ]
    }
  },
  {
    "name": "Burnt Ends",
    "category": "western",
    "postal": "088391",
    "latLong": {
      "coordinates": [
        103.841804,
        1.280515
      ]
    }
  },
  {
    "name": "I Am",
    "category": "western",
    "postal": "188804",
    "latLong": {
      "coordinates": [
        103.858468,
        1.301642
      ]
    }
  },
  {
    "name": "JB Ah Meng",
    "category": "supper",
    "postal": "388353",
    "latLong": {
      "coordinates": [
        103.881463,
        1.313043
      ]
    }
  },
  {
    "name": "The BetterField",
    "category": "western",
    "postal": "179434",
    "latLong": {
      "coordinates": [
        103.849526,
        1.290576
      ]
    }
  },
  {
    "name": "Sinpopo Brand",
    "category": "supper",
    "postal": "427671",
    "latLong": {
      "coordinates": [
        103.904569,
        1.306366
      ]
    }
  },
  {
    "name": "Symmetry",
    "category": "western",
    "postal": "199206",
    "latLong": {
      "coordinates": [
        103.8593379,
        1.303882
      ]
    }
  },
  {
    "name": "Artistry",
    "category": "western",
    "postal": "199149",
    "latLong": {
      "coordinates": [
        103.858256,
        1.302897
      ]
    }
  },
  {
    "name": "Kko Kko Na Ra",
    "category": "supper",
    "postal": "088489",
    "latLong": {
      "coordinates": [
        103.843881,
        1.278777
      ]
    }
  },
  {
    "name": "Ramen Keisuke Lobster King",
    "category": "late-night",
    "postal": "179022",
    "latLong": {
      "coordinates": [
        103.846009,
        1.2908329
      ]
    }
  },
  {
    "name": "Springleaf Prata Place (Jalan Tua Kong)",
    "category": "supper",
    "postal": "457251",
    "latLong": {
      "coordinates": [
        103.925636,
        1.315917
      ]
    }
  },
  {
    "name": "Salted Caramel",
    "category": "supper",
    "postal": "574370",
    "latLong": {
      "coordinates": [
        103.834316,
        1.353649
      ]
    }
  },
  {
    "name": "49 Seats (Kreta Ayer)",
    "category": "supper",
    "postal": "089007",
    "latLong": {
      "coordinates": [
        103.842125,
        1.281098
      ]
    }
  },
  {
    "name": "Thai Gold Food",
    "category": "supper",
    "postal": "189652",
    "latLong": {
      "coordinates": [
        103.851193,
        1.300287
      ]
    }
  },
  {
    "name": "Penang Seafood Restaurant",
    "category": "zi-char",
    "postal": "388258",
    "latLong": {
      "coordinates": [
        103.883363,
        1.3158749
      ]
    }
  },
  {
    "name": "Swee Choon Dim Sum",
    "category": "supper",
    "postal": "208882",
    "latLong": {
      "coordinates": [
        103.857002,
        1.308043
      ]
    }
  },
  {
    "name": "Keng Eng Kee Seafood (Alexandra)",
    "category": "zi-char",
    "postal": "150124",
    "latLong": {
      "coordinates": [
        103.803405,
        1.285794
      ]
    }
  },
  {
    "name": "Diamond Kitchen (Science Park)",
    "category": "zi-char",
    "postal": "118260",
    "latLong": {
      "coordinates": [
        103.7904159,
        1.287916
      ]
    }
  },
  {
    "name": "JB Ah Meng",
    "category": "zi-char",
    "postal": "388353",
    "latLong": {
      "coordinates": [
        103.881463,
        1.313043
      ]
    }
  },
  {
    "name": "Char",
    "category": "jalan-besar",
    "postal": "208994",
    "latLong": {
      "coordinates": [
        103.85966,
        1.312556
      ]
    }
  },
  {
    "name": "Tong Ah Eating House",
    "category": "zi-char",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "New Ubin Seafood",
    "category": "zi-char",
    "postal": "575680",
    "latLong": {
      "coordinates": [
        103.839838,
        1.355647
      ]
    }
  },
  {
    "name": "Kok Sen Restaurant",
    "category": "zi-char",
    "postal": "089137",
    "latLong": {
      "coordinates": [
        103.84171,
        1.280252
      ]
    }
  },
  {
    "name": "Hong Ji Claypot Bak Kut Teh (Marsiling)",
    "category": "bak-kut-teh",
    "postal": "730019",
    "latLong": {
      "coordinates": [
        103.777277,
        1.442977
      ]
    }
  },
  {
    "name": "Legendary Bak Kut Teh",
    "category": "bak-kut-teh",
    "postal": "218431",
    "latLong": {
      "coordinates": [
        103.853267,
        1.316264
      ]
    }
  },
  {
    "name": "Ng Ah Sio Bak Kut Teh (Rangoon)",
    "category": "bak-kut-teh",
    "postal": "218453",
    "latLong": {
      "coordinates": [
        103.852924,
        1.317674
      ]
    }
  },
  {
    "name": "Old Tiong Bahru Bak Kut Teh",
    "category": "bak-kut-teh",
    "postal": "160058",
    "latLong": {
      "coordinates": [
        103.832846,
        1.284576
      ]
    }
  },
  {
    "name": "Outram Park Ya Hua Rou Gu Cha",
    "category": "bak-kut-teh",
    "postal": "089053",
    "latLong": {
      "coordinates": [
        103.842329,
        1.271418
      ]
    }
  },
  {
    "name": "Rong Cheng Bak Kut Teh",
    "category": "bak-kut-teh",
    "postal": "570022",
    "latLong": {
      "coordinates": [
        103.8385524,
        1.3572777
      ]
    }
  },
  {
    "name": "Founder Bak Kut Teh (Balestier)",
    "category": "bak-kut-teh",
    "postal": "329777",
    "latLong": {
      "coordinates": [
        103.851198,
        1.324202
      ]
    }
  },
  {
    "name": "Song Fa Bak Kut Teh (Clarke Quay)",
    "category": "bak-kut-teh",
    "postal": "059383",
    "latLong": {
      "coordinates": [
        103.847701,
        1.28902
      ]
    }
  },
  {
    "name": "Hong Ji Claypot Bak Kut Teh (Ang Mo Kio)",
    "category": "bak-kut-teh",
    "postal": "560107",
    "latLong": {
      "coordinates": [
        103.837222,
        1.3714519
      ]
    }
  },
  {
    "name": "Full of Luck Club",
    "category": "newly-opened",
    "postal": "278977",
    "latLong": {
      "coordinates": [
        103.795575,
        1.311079
      ]
    }
  },
  {
    "name": "Les Amis",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "228208",
    "latLong": {
      "coordinates": [
        103.8317859,
        1.305662
      ]
    }
  },
  {
    "name": "Moosehead",
    "category": "mediterranean",
    "postal": "068579",
    "latLong": {
      "coordinates": [
        103.848421,
        1.282094
      ]
    }
  },
  {
    "name": "Barrio by Mex Out",
    "category": "newly-opened",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Joo Bar",
    "category": "late-night",
    "postal": "188094",
    "latLong": {
      "coordinates": [
        103.856925,
        1.298175
      ]
    }
  },
  {
    "name": "Xiao Ya Tou",
    "category": "newly-opened",
    "postal": "089592",
    "latLong": {
      "coordinates": [
        103.84293,
        1.2792269
      ]
    }
  },
  {
    "name": "Wang Dae Bak Korean BBQ Restaurant (Amoy Street)",
    "category": "korean-bbq",
    "postal": "048421",
    "latLong": {
      "coordinates": [
        103.84675,
        1.284184
      ]
    }
  },
  {
    "name": "Mookata Traditional Thai BBQ (Katong)",
    "category": "mookata",
    "postal": "428797",
    "latLong": {
      "coordinates": [
        103.904304,
        1.3056589
      ]
    }
  },
  {
    "name": "Icebox Cafe",
    "category": "korean-desserts",
    "postal": "218375",
    "latLong": {
      "coordinates": [
        103.85401,
        1.314296
      ]
    }
  },
  {
    "name": "Kko Kko Na Ra",
    "category": "korean",
    "postal": "088489",
    "latLong": {
      "coordinates": [
        103.843881,
        1.278777
      ]
    }
  },
  {
    "name": "Bing Go Jung (Guillemard)",
    "category": "korean-desserts",
    "postal": "399719",
    "latLong": {
      "coordinates": [
        103.882267,
        1.310402
      ]
    }
  },
  {
    "name": "Ssikkek Korean BBQ Buffet (United Square)",
    "category": "korean-bbq",
    "postal": "307591",
    "latLong": {
      "coordinates": [
        103.843491,
        1.317711
      ]
    }
  },
  {
    "name": "Springleaf Prata Place (Jalan Tua Kong)",
    "category": "siglap",
    "postal": "457251",
    "latLong": {
      "coordinates": [
        103.925636,
        1.315917
      ]
    }
  },
  {
    "name": "Open Farm Community",
    "category": "healthy",
    "postal": "248819",
    "latLong": {
      "coordinates": [
        103.815495,
        1.305807
      ]
    }
  },
  {
    "name": "Nunsongyee (Burghley Drive)",
    "category": "korean-desserts",
    "postal": "559022",
    "latLong": {
      "coordinates": [
        103.859632,
        1.359255
      ]
    }
  },
  {
    "name": "My Awesome Cafe",
    "category": "healthy",
    "postal": "068639",
    "latLong": {
      "coordinates": [
        103.84725,
        1.280085
      ]
    }
  },
  {
    "name": "Real Food (The Central)",
    "category": "healthy",
    "postal": "059817",
    "latLong": {
      "coordinates": [
        103.846694,
        1.288424
      ]
    }
  },
  {
    "name": "COMNAM",
    "category": "healthy",
    "postal": "179103",
    "latLong": {
      "coordinates": [
        103.852807,
        1.294149
      ]
    }
  },
  {
    "name": "The Living Cafe",
    "category": "healthy",
    "postal": "269758",
    "latLong": {
      "coordinates": [
        103.797535,
        1.330877
      ]
    }
  },
  {
    "name": "The Lawn Grill & Salad Cafe (Biopolis)",
    "category": "healthy",
    "postal": "138669",
    "latLong": {
      "coordinates": [
        103.79233,
        1.304609
      ]
    }
  },
  {
    "name": "ButterScotch",
    "category": "halal",
    "postal": "150164",
    "latLong": {
      "coordinates": [
        103.816199,
        1.28344
      ]
    }
  },
  {
    "name": "My Secret Hideout Peachy's",
    "category": "halal",
    "postal": "198771",
    "latLong": {
      "coordinates": [
        103.860415,
        1.304048
      ]
    }
  },
  {
    "name": "Working Title - Burger Bar",
    "category": "burgers",
    "postal": "199745",
    "latLong": {
      "coordinates": [
        103.8597209,
        1.300784
      ]
    }
  },
  {
    "name": "Hyde & Co.",
    "category": "halal",
    "postal": "198753",
    "latLong": {
      "coordinates": [
        103.859887,
        1.303664
      ]
    }
  },
  {
    "name": "FIX",
    "category": "halal",
    "postal": "329979",
    "latLong": {
      "coordinates": [
        103.8485,
        1.329063
      ]
    }
  },
  {
    "name": "Le Steak by Chef Amri  (Jalan Kayu)",
    "category": "halal",
    "postal": "799472",
    "latLong": {
      "coordinates": [
        103.873212,
        1.3977679
      ]
    }
  },
  {
    "name": "La Marelle Caf & Boutique",
    "category": "halal",
    "postal": "199664",
    "latLong": {
      "coordinates": [
        103.859788,
        1.301198
      ]
    }
  },
  {
    "name": "Penny University",
    "category": "halal",
    "postal": "428997",
    "latLong": {
      "coordinates": [
        103.912036,
        1.308838
      ]
    }
  },
  {
    "name": "I Am",
    "category": "halal",
    "postal": "188804",
    "latLong": {
      "coordinates": [
        103.858468,
        1.301642
      ]
    }
  },
  {
    "name": "The Lab",
    "category": "halal",
    "postal": "199069",
    "latLong": {
      "coordinates": [
        103.858834,
        1.3028439
      ]
    }
  },
  {
    "name": "Keng Eng Kee Seafood (Alexandra)",
    "category": "hawker-fare",
    "postal": "150124",
    "latLong": {
      "coordinates": [
        103.803405,
        1.285794
      ]
    }
  },
  {
    "name": "Timbre+",
    "category": "hawker-fare",
    "postal": "139957",
    "latLong": {
      "coordinates": [
        103.787413,
        1.296902
      ]
    }
  },
  {
    "name": "Tong Ah Eating House",
    "category": "hawker-fare",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "136 Hong Kong Street Fish Head Steamboat (Clementi)",
    "category": "hawker-fare",
    "postal": "120713",
    "latLong": {
      "coordinates": [
        103.762082,
        1.304202
      ]
    }
  },
  {
    "name": "Truly Test Kitchen",
    "category": "hawker-fare",
    "postal": "368326",
    "latLong": {
      "coordinates": [
        103.882758,
        1.334283
      ]
    }
  },
  {
    "name": "Grain Traders (Telok Ayer)",
    "category": "healthy",
    "postal": "048946",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Dessert Project",
    "category": "ice-cream-yoghurt",
    "postal": "160022",
    "latLong": {
      "coordinates": [
        103.828705,
        1.288768
      ]
    }
  },
  {
    "name": "Maki-San (The Cathay)",
    "category": "healthy",
    "postal": "229233",
    "latLong": {
      "coordinates": [
        103.847398,
        1.2993889
      ]
    }
  },
  {
    "name": "Kok Sen Restaurant",
    "category": "outram-park",
    "postal": "089137",
    "latLong": {
      "coordinates": [
        103.84171,
        1.280252
      ]
    }
  },
  {
    "name": "Icebox Cafe",
    "category": "ice-cream-yoghurt",
    "postal": "218375",
    "latLong": {
      "coordinates": [
        103.85401,
        1.314296
      ]
    }
  },
  {
    "name": "Salted Caramel",
    "category": "ice-cream-yoghurt",
    "postal": "574370",
    "latLong": {
      "coordinates": [
        103.834316,
        1.353649
      ]
    }
  },
  {
    "name": "Wimbly Lu Chocolates",
    "category": "ice-cream-yoghurt",
    "postal": "358987",
    "latLong": {
      "coordinates": [
        103.867568,
        1.347525
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tiong Bahru)",
    "category": "hawker-fare",
    "postal": "160056",
    "latLong": {
      "coordinates": [
        103.8337559,
        1.284257
      ]
    }
  },
  {
    "name": "The Bakery Chef",
    "category": "ice-cream-yoghurt",
    "postal": "150161",
    "latLong": {
      "coordinates": [
        103.816147,
        1.283779
      ]
    }
  },
  {
    "name": "Non Entre Dessert Cafe",
    "category": "ice-cream-yoghurt",
    "postal": "218451",
    "latLong": {
      "coordinates": [
        103.852987,
        1.317533
      ]
    }
  },
  {
    "name": "VeganBurg (Eunos)",
    "category": "healthy",
    "postal": "419502",
    "latLong": {
      "coordinates": [
        103.90528,
        1.320986
      ]
    }
  },
  {
    "name": "Brother Bird",
    "category": "ice-cream-yoghurt",
    "postal": "189866",
    "latLong": {
      "coordinates": [
        103.858409,
        1.301169
      ]
    }
  },
  {
    "name": "FATCAT Ice Cream Bar",
    "category": "ice-cream-yoghurt",
    "postal": "460416",
    "latLong": {
      "coordinates": [
        103.930534,
        1.328566
      ]
    }
  },
  {
    "name": "Miam Miam (Bugis Junction)",
    "category": "japanese",
    "postal": "188021",
    "latLong": {
      "coordinates": [
        103.854921,
        1.299369
      ]
    }
  },
  {
    "name": "Creamier (Toa Payoh)",
    "category": "ice-cream-yoghurt",
    "postal": "310128",
    "latLong": {
      "coordinates": [
        103.8443379,
        1.338293
      ]
    }
  },
  {
    "name": "Ginza Tendon Itsuki",
    "category": "tanjong-pagar",
    "postal": "088522",
    "latLong": {
      "coordinates": [
        103.843754,
        1.277318
      ]
    }
  },
  {
    "name": "Fat Cow",
    "category": "japanese",
    "postal": "248649",
    "latLong": {
      "coordinates": [
        103.823715,
        1.303152
      ]
    }
  },
  {
    "name": "Teppei Japanese Restaurant",
    "category": "japanese",
    "postal": "078867",
    "latLong": {
      "coordinates": [
        103.843891,
        1.276993
      ]
    }
  },
  {
    "name": "The Refinery",
    "category": "japanese",
    "postal": "208561",
    "latLong": {
      "coordinates": [
        103.862283,
        1.3103419
      ]
    }
  },
  {
    "name": "Kilo At Pact",
    "category": "japanese",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Zaffron Kitchen (East Coast)",
    "category": "indian",
    "postal": "428820",
    "latLong": {
      "coordinates": [
        103.905019,
        1.306076
      ]
    }
  },
  {
    "name": "Sumiya Charcoal Grill Izakaya (Orchard Central)",
    "category": "japanese",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Tanuki Raw (Orchard Central)",
    "category": "japanese",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Sunday Folks",
    "category": "holland-village",
    "postal": "278116",
    "latLong": {
      "coordinates": [
        103.797152,
        1.31197
      ]
    }
  },
  {
    "name": "The Roti Prata House",
    "category": "indian",
    "postal": "574370",
    "latLong": {
      "coordinates": [
        103.834316,
        1.353649
      ]
    }
  },
  {
    "name": "Table by Rang Mahal",
    "category": "indian",
    "postal": "188396",
    "latLong": {
      "coordinates": [
        103.855091,
        1.295845
      ]
    }
  },
  {
    "name": "Roll Up",
    "category": "indian",
    "postal": "049430",
    "latLong": {
      "coordinates": [
        103.8490039,
        1.286727
      ]
    }
  },
  {
    "name": "Sin Ming Roti Prata (Faisal & Aziz Curry Muslim Food)",
    "category": "indian",
    "postal": "570024",
    "latLong": {
      "coordinates": [
        103.836184,
        1.355125
      ]
    }
  },
  {
    "name": "Singapore Zam Zam Restaurant",
    "category": "indian",
    "postal": "198675",
    "latLong": {
      "coordinates": [
        103.858557,
        1.302069
      ]
    }
  },
  {
    "name": "Islamic Restaurant",
    "category": "indian",
    "postal": "198713",
    "latLong": {
      "coordinates": [
        103.859132,
        1.30304
      ]
    }
  },
  {
    "name": "Al-Azhar Eating Restaurant (Bukit Timah)",
    "category": "indian",
    "postal": "599736",
    "latLong": {
      "coordinates": [
        103.775338,
        1.3425
      ]
    }
  },
  {
    "name": "Jinjja Chicken",
    "category": "korean-desserts",
    "postal": "188034",
    "latLong": {
      "coordinates": [
        103.855278,
        1.300453
      ]
    }
  },
  {
    "name": "Paris Baguette (Wisma Atria)",
    "category": "korean-desserts",
    "postal": "238877",
    "latLong": {
      "coordinates": [
        103.833056,
        1.30351
      ]
    }
  },
  {
    "name": "Honey Creme (313@Somerset)",
    "category": "korean-desserts",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Mr and Mrs Mohgan's Super Crispy Roti Prata",
    "category": "indian",
    "postal": "429356",
    "latLong": {
      "coordinates": [
        103.899319,
        1.312547
      ]
    }
  },
  {
    "name": "Twins",
    "category": "korean-desserts",
    "postal": "089667",
    "latLong": {
      "coordinates": [
        103.843036,
        1.2775
      ]
    }
  },
  {
    "name": "Nunsaram Korean Dessert Cafe (Orchard Central)",
    "category": "korean-desserts",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Banana Tree",
    "category": "korean-desserts",
    "postal": "089133",
    "latLong": {
      "coordinates": [
        103.841684,
        1.280145
      ]
    }
  },
  {
    "name": "O'ma Spoon (313@Somerset)",
    "category": "korean-desserts",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Brunetti",
    "category": "italian",
    "postal": "247933",
    "latLong": {
      "coordinates": [
        103.823345,
        1.304713
      ]
    }
  },
  {
    "name": "La Pizzaiola (Braddell Heights Estate)",
    "category": "italian",
    "postal": "358987",
    "latLong": {
      "coordinates": [
        103.867568,
        1.347525
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tan Quee Lan)",
    "category": "italian",
    "postal": "189704",
    "latLong": {
      "coordinates": [
        103.857215,
        1.297719
      ]
    }
  },
  {
    "name": "Portico (Alexandra)",
    "category": "italian",
    "postal": "119970",
    "latLong": {
      "coordinates": [
        103.803415,
        1.273889
      ]
    }
  },
  {
    "name": "Jamie's Italian (VivoCity)",
    "category": "italian",
    "postal": "098585",
    "latLong": {
      "coordinates": [
        103.823012,
        1.264613
      ]
    }
  },
  {
    "name": "Alkaff Mansion Ristorante",
    "category": "italian",
    "postal": "109178",
    "latLong": {
      "coordinates": [
        103.813289,
        1.278877
      ]
    }
  },
  {
    "name": "&SONS",
    "category": "telok-ayer",
    "postal": "048422",
    "latLong": {
      "coordinates": [
        103.847478,
        1.283745
      ]
    }
  },
  {
    "name": "The Wicked Garlic (International Plaza)",
    "category": "italian",
    "postal": "079903",
    "latLong": {
      "coordinates": [
        103.845924,
        1.276109
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tiong Bahru)",
    "category": "italian",
    "postal": "160056",
    "latLong": {
      "coordinates": [
        103.8337559,
        1.284257
      ]
    }
  },
  {
    "name": "Cicheti",
    "category": "italian",
    "postal": "198901",
    "latLong": {
      "coordinates": [
        103.860124,
        1.30172
      ]
    }
  },
  {
    "name": "O'ma Spoon (313@Somerset)",
    "category": "korean",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "SYNC Korean Fusion Bistro (Westgate)",
    "category": "korean",
    "postal": "608532",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Vatos Urban Tacos",
    "category": "korean",
    "postal": "189766",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Banana Tree",
    "category": "chinatown",
    "postal": "089133",
    "latLong": {
      "coordinates": [
        103.841684,
        1.280145
      ]
    }
  },
  {
    "name": "Kim Dae Mun (Concorde Hotel)",
    "category": "korean",
    "postal": "238840",
    "latLong": {
      "coordinates": [
        103.842224,
        1.300618
      ]
    }
  },
  {
    "name": "Masizzim Singapore",
    "category": "korean",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "K. COOK Korean BBQ Buffet (Orchard Central)",
    "category": "korean",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Chir Chir Fusion Chicken Factory (313@Somerset)",
    "category": "korean",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Super Star K Korean BBQ Restaurant (Tanjong Pagar)",
    "category": "bbq",
    "postal": "088496",
    "latLong": {
      "coordinates": [
        103.843825,
        1.277981
      ]
    }
  },
  {
    "name": "Seorae Singapore - Korean Charcoal BBQ",
    "category": "korean-bbq",
    "postal": "238839",
    "latLong": {
      "coordinates": [
        103.845411,
        1.301016
      ]
    }
  },
  {
    "name": "Nanta BBQ",
    "category": "korean-bbq",
    "postal": "307624",
    "latLong": {
      "coordinates": [
        103.843975,
        1.318264
      ]
    }
  },
  {
    "name": "Wang Dae Bak Korean BBQ Restaurant (China Square Central)",
    "category": "korean-bbq",
    "postal": "048421",
    "latLong": {
      "coordinates": [
        103.84675,
        1.284184
      ]
    }
  },
  {
    "name": "8 Korean BBQ",
    "category": "korean-bbq",
    "postal": "059817",
    "latLong": {
      "coordinates": [
        103.846694,
        1.288424
      ]
    }
  },
  {
    "name": "Yoogane (Bugis Junction)",
    "category": "bugis",
    "postal": "188021",
    "latLong": {
      "coordinates": [
        103.854921,
        1.299369
      ]
    }
  },
  {
    "name": "Kim's Family Food (Lorong Kilat)",
    "category": "upper-bukit-timah",
    "postal": "598139",
    "latLong": {
      "coordinates": [
        103.774176,
        1.340935
      ]
    }
  },
  {
    "name": "Oven & Fried Chicken (Telok Ayer)",
    "category": "korean-fried-chicken",
    "postal": "068630",
    "latLong": {
      "coordinates": [
        103.847454,
        1.280522
      ]
    }
  },
  {
    "name": "K. COOK Korean BBQ Buffet (Orchard Central)",
    "category": "buffets",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Choo Choo Chicken (Bugis)",
    "category": "korean-fried-chicken",
    "postal": "189869",
    "latLong": {
      "coordinates": [
        103.858373,
        1.30137
      ]
    }
  },
  {
    "name": "Chicken Up (Tampines)",
    "category": "korean-fried-chicken",
    "postal": "529509",
    "latLong": {
      "coordinates": [
        103.943831,
        1.352738
      ]
    }
  },
  {
    "name": "Jinjja Chicken",
    "category": "bugis",
    "postal": "188034",
    "latLong": {
      "coordinates": [
        103.855278,
        1.300453
      ]
    }
  },
  {
    "name": "Chick And Ken",
    "category": "korean-fried-chicken",
    "postal": "049033",
    "latLong": {
      "coordinates": [
        103.848622,
        1.286463
      ]
    }
  },
  {
    "name": "Chir Chir Fusion Chicken Factory (Chinatown Point)",
    "category": "korean-fried-chicken",
    "postal": "059413",
    "latLong": {
      "coordinates": [
        103.8449399,
        1.285202
      ]
    }
  },
  {
    "name": "Chicken Up (Tanjong Pagar)",
    "category": "korean-fried-chicken",
    "postal": "088469",
    "latLong": {
      "coordinates": [
        103.843822,
        1.279277
      ]
    }
  },
  {
    "name": "Kko Kko Na Ra",
    "category": "korean-fried-chicken",
    "postal": "088489",
    "latLong": {
      "coordinates": [
        103.843881,
        1.278777
      ]
    }
  },
  {
    "name": "Twins",
    "category": "korean-fried-chicken",
    "postal": "089667",
    "latLong": {
      "coordinates": [
        103.843036,
        1.2775
      ]
    }
  },
  {
    "name": "Huay Kwang Thai Kitchen (Thomson)",
    "category": "mookata",
    "postal": "574369",
    "latLong": {
      "coordinates": [
        103.834655,
        1.353319
      ]
    }
  },
  {
    "name": "Chir Chir Fusion Chicken Factory (313@Somerset)",
    "category": "korean-fried-chicken",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "Tom Yum Kungfu (Serangoon)",
    "category": "mookata",
    "postal": "556680",
    "latLong": {
      "coordinates": [
        103.865499,
        1.364727
      ]
    }
  },
  {
    "name": "Ladyboy - Mookata/Steamboat Cheese",
    "category": "mookata",
    "postal": "389574",
    "latLong": {
      "coordinates": [
        103.889174,
        1.314476
      ]
    }
  },
  {
    "name": "New Udon Thai Food",
    "category": "mookata",
    "postal": "199588",
    "latLong": {
      "coordinates": [
        103.864945,
        1.302908
      ]
    }
  },
  {
    "name": "MooJaa (Keong Saik Road)",
    "category": "mookata",
    "postal": "089132",
    "latLong": {
      "coordinates": [
        103.841498,
        1.279902
      ]
    }
  },
  {
    "name": "Sedap Thai (Berseh Food Centre)",
    "category": "mookata",
    "postal": "208877",
    "latLong": {
      "coordinates": [
        103.856771,
        1.307428
      ]
    }
  },
  {
    "name": "Tom Yum Kungfu (Boat Quay)",
    "category": "mookata",
    "postal": "049372",
    "latLong": {
      "coordinates": [
        103.848912,
        1.28753
      ]
    }
  },
  {
    "name": "Super Loco",
    "category": "late-night",
    "postal": "238252",
    "latLong": {
      "coordinates": [
        103.839168,
        1.290086
      ]
    }
  },
  {
    "name": "Mu Parlour",
    "category": "late-night",
    "postal": "277677",
    "latLong": {
      "coordinates": [
        103.795059,
        1.311312
      ]
    }
  },
  {
    "name": "Kko Kko Na Ra",
    "category": "late-night",
    "postal": "088489",
    "latLong": {
      "coordinates": [
        103.843881,
        1.278777
      ]
    }
  },
  {
    "name": "Manhattan Bar",
    "category": "late-night",
    "postal": "249715",
    "latLong": {
      "coordinates": [
        103.824973,
        1.304999
      ]
    }
  },
  {
    "name": "Timbre+",
    "category": "late-night",
    "postal": "139957",
    "latLong": {
      "coordinates": [
        103.787413,
        1.296902
      ]
    }
  },
  {
    "name": "Necessary Provisions",
    "category": "late-night",
    "postal": "598993",
    "latLong": {
      "coordinates": [
        103.768009,
        1.33645
      ]
    }
  },
  {
    "name": "Restaurant Andr",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "089855",
    "latLong": {
      "coordinates": [
        103.840318,
        1.279429
      ]
    }
  },
  {
    "name": "Salted Caramel",
    "category": "late-night",
    "postal": "574370",
    "latLong": {
      "coordinates": [
        103.834316,
        1.353649
      ]
    }
  },
  {
    "name": "Hill Street Tai Hwa Pork Noodle",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "190466",
    "latLong": {
      "coordinates": [
        103.862478,
        1.305131
      ]
    }
  },
  {
    "name": "LAtelier de Jol Robuchon",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "098269",
    "latLong": {
      "coordinates": [
        103.820331,
        1.256752
      ]
    }
  },
  {
    "name": "Hong Kong Soya Sauce Chicken Rice & Noodle (Chinatown Complex Market & Food Centre)",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "050335",
    "latLong": {
      "coordinates": [
        103.843098,
        1.282573
      ]
    }
  },
  {
    "name": "Osia",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "098139",
    "latLong": {
      "coordinates": [
        103.819265,
        1.257032
      ]
    }
  },
  {
    "name": "Candlenut",
    "category": "outram-park",
    "postal": "088764",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Stuff'd (City Square Mall)",
    "category": "mexican",
    "postal": "208539",
    "latLong": {
      "coordinates": [
        103.85662,
        1.311403
      ]
    }
  },
  {
    "name": "Odette",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "178957",
    "latLong": {
      "coordinates": [
        103.851285,
        1.289704
      ]
    }
  },
  {
    "name": "Baja Fresh Mexican Grill (Rendezvous Gallery)",
    "category": "mexican",
    "postal": "189559",
    "latLong": {
      "coordinates": [
        103.848947,
        1.298775
      ]
    }
  },
  {
    "name": "Barrio by Mex Out",
    "category": "mexican",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "JAAN",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "178882",
    "latLong": {
      "coordinates": [
        103.852879,
        1.293196
      ]
    }
  },
  {
    "name": "Belmonte Latin Foods",
    "category": "mexican",
    "postal": "276696",
    "latLong": {
      "coordinates": [
        103.7789729,
        1.316644
      ]
    }
  },
  {
    "name": "Santa Fe Tex-Mex Grill",
    "category": "mexican",
    "postal": "018988",
    "latLong": {
      "coordinates": [
        103.863253,
        1.270859
      ]
    }
  },
  {
    "name": "Burp Kitchen & Bar",
    "category": "mexican",
    "postal": "470740",
    "latLong": {
      "coordinates": [
        103.922697,
        1.338387
      ]
    }
  },
  {
    "name": "Lucha Loco",
    "category": "mexican",
    "postal": "089598",
    "latLong": {
      "coordinates": [
        103.842798,
        1.27872
      ]
    }
  },
  {
    "name": "Muchachos",
    "category": "mexican",
    "postal": "089129",
    "latLong": {
      "coordinates": [
        103.841658,
        1.280058
      ]
    }
  },
  {
    "name": "Super Loco",
    "category": "mexican",
    "postal": "238252",
    "latLong": {
      "coordinates": [
        103.839168,
        1.290086
      ]
    }
  },
  {
    "name": "Alaturka",
    "category": "mediterranean",
    "postal": "199437",
    "latLong": {
      "coordinates": [
        103.859851,
        1.301305
      ]
    }
  },
  {
    "name": "Vatos Urban Tacos",
    "category": "mexican",
    "postal": "189766",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Corner House",
    "category": "Michelin%2520Guide%2520Singapore",
    "postal": "259569",
    "latLong": {
      "coordinates": [
        103.814733,
        1.311125
      ]
    }
  },
  {
    "name": "Derwish Turkish Restaurant",
    "category": "mediterranean",
    "postal": "199476",
    "latLong": {
      "coordinates": [
        103.859492,
        1.301396
      ]
    }
  },
  {
    "name": "The Knolls (Capella Singapore)",
    "category": "mediterranean",
    "postal": "098297",
    "latLong": {
      "coordinates": [
        103.82444,
        1.2494479
      ]
    }
  },
  {
    "name": "ALATI",
    "category": "mediterranean",
    "postal": "069892",
    "latLong": {
      "coordinates": [
        103.846796,
        1.280263
      ]
    }
  },
  {
    "name": "Blu Kouzina",
    "category": "mediterranean",
    "postal": "247700",
    "latLong": {
      "coordinates": [
        103.810325,
        1.303471
      ]
    }
  },
  {
    "name": "Pita Pan (Marina Bay Sands)",
    "category": "mediterranean",
    "postal": "018972",
    "latLong": {
      "coordinates": [
        103.858846,
        1.283949
      ]
    }
  },
  {
    "name": "Mykonos on the bay",
    "category": "mediterranean",
    "postal": "Singapore",
    "latLong": {
      "coordinates": [
        103.8677444,
        1.3553794
      ]
    }
  },
  {
    "name": "KOOKS Creamery",
    "category": "newly-opened",
    "postal": "550211",
    "latLong": {
      "coordinates": [
        103.873213,
        1.35642
      ]
    }
  },
  {
    "name": "Maggie Joan's",
    "category": "mediterranean",
    "postal": "069930",
    "latLong": {
      "coordinates": [
        103.847628,
        1.28185
      ]
    }
  },
  {
    "name": "Ptissez",
    "category": "newly-opened",
    "postal": "278997",
    "latLong": {
      "coordinates": [
        -81.58210079999999,
        30.3060547
      ]
    }
  },
  {
    "name": "Tempura Kohaku",
    "category": "newly-opened",
    "postal": "038983",
    "latLong": {
      "coordinates": [
        103.858967,
        1.295968
      ]
    }
  },
  {
    "name": "UsQuBa - Scottish Restaurant & Bar",
    "category": "newly-opened",
    "postal": "049213",
    "latLong": {
      "coordinates": [
        103.853889,
        1.285655
      ]
    }
  },
  {
    "name": "Noshery at Nosh",
    "category": "newly-opened",
    "postal": "139220",
    "latLong": {
      "coordinates": [
        103.7876689,
        1.305308
      ]
    }
  },
  {
    "name": "Kyushu Pancake Caf",
    "category": "newly-opened",
    "postal": "307645",
    "latLong": {
      "coordinates": [
        103.841622,
        1.321334
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tan Quee Lan)",
    "category": "newly-opened",
    "postal": "189704",
    "latLong": {
      "coordinates": [
        103.857215,
        1.297719
      ]
    }
  },
  {
    "name": "Open Farm Community",
    "category": "pasta",
    "postal": "248819",
    "latLong": {
      "coordinates": [
        103.815495,
        1.305807
      ]
    }
  },
  {
    "name": "Boufe Boutique Cafe",
    "category": "pasta",
    "postal": "247974",
    "latLong": {
      "coordinates": [
        103.814598,
        1.297722
      ]
    }
  },
  {
    "name": "My Secret Hideout Peachy's",
    "category": "pasta",
    "postal": "198771",
    "latLong": {
      "coordinates": [
        103.860415,
        1.304048
      ]
    }
  },
  {
    "name": "Miam Miam (Bugis Junction)",
    "category": "pasta",
    "postal": "188021",
    "latLong": {
      "coordinates": [
        103.854921,
        1.299369
      ]
    }
  },
  {
    "name": "49 Seats (Kreta Ayer)",
    "category": "pasta",
    "postal": "089007",
    "latLong": {
      "coordinates": [
        103.842125,
        1.281098
      ]
    }
  },
  {
    "name": "The Wicked Garlic (International Plaza)",
    "category": "tanjong-pagar",
    "postal": "079903",
    "latLong": {
      "coordinates": [
        103.845924,
        1.276109
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tiong Bahru)",
    "category": "pasta",
    "postal": "160056",
    "latLong": {
      "coordinates": [
        103.8337559,
        1.284257
      ]
    }
  },
  {
    "name": "Cicheti",
    "category": "pasta",
    "postal": "198901",
    "latLong": {
      "coordinates": [
        103.860124,
        1.30172
      ]
    }
  },
  {
    "name": "Hyde & Co.",
    "category": "pasta",
    "postal": "198753",
    "latLong": {
      "coordinates": [
        103.859887,
        1.303664
      ]
    }
  },
  {
    "name": "LAtelier de Jol Robuchon",
    "category": "fine-dining",
    "postal": "098269",
    "latLong": {
      "coordinates": [
        103.820331,
        1.256752
      ]
    }
  },
  {
    "name": "The Disgruntled Chef (Dempsey)",
    "category": "fine-dining",
    "postal": "247693",
    "latLong": {
      "coordinates": [
        103.811494,
        1.305446
      ]
    }
  },
  {
    "name": "Skyve Wine Bistro",
    "category": "newton",
    "postal": "227977",
    "latLong": {
      "coordinates": [
        103.841466,
        1.310106
      ]
    }
  },
  {
    "name": "Ding Dong",
    "category": "chinese",
    "postal": "069935",
    "latLong": {
      "coordinates": [
        103.847803,
        1.282167
      ]
    }
  },
  {
    "name": "La Petite Cuisine (Bukit Timah)",
    "category": "french",
    "postal": "248748",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Sumiya Charcoal Grill Izakaya (Orchard Central)",
    "category": "dinner-with-drinks",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Thien Kee Steamboat Restaurant (Golden Mile Tower)",
    "category": "chicken-rice",
    "postal": "199589",
    "latLong": {
      "coordinates": [
        103.864082,
        1.302128
      ]
    }
  },
  {
    "name": "Hong Kong Soya Sauce Chicken Rice & Noodle (Chinatown Complex Market & Food Centre)",
    "category": "chicken-rice",
    "postal": "050335",
    "latLong": {
      "coordinates": [
        103.843098,
        1.282573
      ]
    }
  },
  {
    "name": "RONIN",
    "category": "breakfast-and-brunch",
    "postal": "059660",
    "latLong": {
      "coordinates": [
        103.847304,
        1.28769
      ]
    }
  },
  {
    "name": "Common Man Coffee Roasters",
    "category": "desserts",
    "postal": "239058",
    "latLong": {
      "coordinates": [
        103.83831,
        1.291677
      ]
    }
  },
  {
    "name": "Creamier (Toa Payoh)",
    "category": "desserts",
    "postal": "310128",
    "latLong": {
      "coordinates": [
        103.8443379,
        1.338293
      ]
    }
  },
  {
    "name": "Kilo At Pact",
    "category": "date-night",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Teppei Japanese Restaurant",
    "category": "date-night",
    "postal": "078867",
    "latLong": {
      "coordinates": [
        103.843891,
        1.276993
      ]
    }
  },
  {
    "name": "boCHINche",
    "category": "date-night",
    "postal": "069935",
    "latLong": {
      "coordinates": [
        103.847803,
        1.282167
      ]
    }
  },
  {
    "name": "New Ubin Seafood",
    "category": "cheap-and-good",
    "postal": "575680",
    "latLong": {
      "coordinates": [
        103.839838,
        1.355647
      ]
    }
  },
  {
    "name": "Ah Bong's Italian (Tiong Bahru)",
    "category": "cheap-and-good",
    "postal": "160056",
    "latLong": {
      "coordinates": [
        103.8337559,
        1.284257
      ]
    }
  },
  {
    "name": "Swee Choon Dim Sum",
    "category": "cheap-and-good",
    "postal": "208882",
    "latLong": {
      "coordinates": [
        103.857002,
        1.308043
      ]
    }
  },
  {
    "name": "Le Steak by Chef Amri  (Jalan Kayu)",
    "category": "cheap-and-good",
    "postal": "799472",
    "latLong": {
      "coordinates": [
        103.873212,
        1.3977679
      ]
    }
  },
  {
    "name": "Creamier (Toa Payoh)",
    "category": "cafes-and-coffee",
    "postal": "310128",
    "latLong": {
      "coordinates": [
        103.8443379,
        1.338293
      ]
    }
  },
  {
    "name": "Common Man Coffee Roasters",
    "category": "cafes-and-coffee",
    "postal": "239058",
    "latLong": {
      "coordinates": [
        103.83831,
        1.291677
      ]
    }
  },
  {
    "name": "Sin Lee Foods",
    "category": "cafes-and-coffee",
    "postal": "162004",
    "latLong": {
      "coordinates": [
        103.8310429,
        1.287467
      ]
    }
  },
  {
    "name": "The Fabulous Baker Boy",
    "category": "breakfast-and-brunch",
    "postal": "179037",
    "latLong": {
      "coordinates": [
        103.8456701,
        1.2918985
      ]
    }
  },
  {
    "name": "Sunday Folks",
    "category": "cafes-and-coffee",
    "postal": "278116",
    "latLong": {
      "coordinates": [
        103.797152,
        1.31197
      ]
    }
  },
  {
    "name": "Chye Seng Huat Hardware",
    "category": "breakfast-and-brunch",
    "postal": "207563",
    "latLong": {
      "coordinates": [
        103.860015,
        1.311356
      ]
    }
  },
  {
    "name": "Sin Lee Foods",
    "category": "breakfast-and-brunch",
    "postal": "162004",
    "latLong": {
      "coordinates": [
        103.8310429,
        1.287467
      ]
    }
  },
  {
    "name": "Lola's Cafe",
    "category": "cafes-and-coffee",
    "postal": "545893",
    "latLong": {
      "coordinates": [
        103.885948,
        1.361641
      ]
    }
  },
  {
    "name": "Common Man Coffee Roasters",
    "category": "breakfast-and-brunch",
    "postal": "239058",
    "latLong": {
      "coordinates": [
        103.83831,
        1.291677
      ]
    }
  },
  {
    "name": "Tanuki Raw (Orchard Central)",
    "category": "cheap-and-good",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "I Am",
    "category": "cafes-and-coffee",
    "postal": "188804",
    "latLong": {
      "coordinates": [
        103.858468,
        1.301642
      ]
    }
  },
  {
    "name": "136 Hong Kong Street Fish Head Steamboat (Clementi)",
    "category": "cheap-and-good",
    "postal": "120713",
    "latLong": {
      "coordinates": [
        103.762082,
        1.304202
      ]
    }
  },
  {
    "name": "Vatos Urban Tacos",
    "category": "bars",
    "postal": "189766",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Bincho",
    "category": "bars",
    "postal": "162078",
    "latLong": {
      "coordinates": [
        103.830405,
        1.283741
      ]
    }
  },
  {
    "name": "Lola's Cafe",
    "category": "cheap-and-good",
    "postal": "545893",
    "latLong": {
      "coordinates": [
        103.885948,
        1.361641
      ]
    }
  },
  {
    "name": "A Noodle Story (Amoy Street Food Centre)",
    "category": "cheap-and-good",
    "postal": "069111",
    "latLong": {
      "coordinates": [
        103.846712,
        1.279376
      ]
    }
  },
  {
    "name": "FOC Restaurant",
    "category": "bars",
    "postal": "059679",
    "latLong": {
      "coordinates": [
        103.847527,
        1.287379
      ]
    }
  },
  {
    "name": "Manhattan Bar",
    "category": "bars",
    "postal": "249715",
    "latLong": {
      "coordinates": [
        103.824973,
        1.304999
      ]
    }
  },
  {
    "name": "Potato Head Folk",
    "category": "outram-park",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "Timbre+",
    "category": "bars",
    "postal": "139957",
    "latLong": {
      "coordinates": [
        103.787413,
        1.296902
      ]
    }
  },
  {
    "name": "Katanashi",
    "category": "bars",
    "postal": "049865",
    "latLong": {
      "coordinates": [
        103.849369,
        1.288282
      ]
    }
  },
  {
    "name": "The Beast",
    "category": "good-for-groups",
    "postal": "199329",
    "latLong": {
      "coordinates": [
        103.8596759,
        1.304407
      ]
    }
  },
  {
    "name": "Ikoi Japanese Restaurant",
    "category": "buffets",
    "postal": "Singapore",
    "latLong": {
      "coordinates": [
        103.8677444,
        1.3553794
      ]
    }
  },
  {
    "name": "The Line (Shangri-La Hotel)",
    "category": "buffets",
    "postal": "258350",
    "latLong": {
      "coordinates": [
        103.826781,
        1.311266
      ]
    }
  },
  {
    "name": "Basilico",
    "category": "buffets",
    "postal": "249715",
    "latLong": {
      "coordinates": [
        103.824973,
        1.304999
      ]
    }
  },
  {
    "name": "mezza9 (Grand Hyatt Singapore)",
    "category": "buffets",
    "postal": "228211",
    "latLong": {
      "coordinates": [
        103.832783,
        1.3064309
      ]
    }
  },
  {
    "name": "Peach Blossoms",
    "category": "dim-sum",
    "postal": "039594",
    "latLong": {
      "coordinates": [
        103.857422,
        1.290989
      ]
    }
  },
  {
    "name": "The Tuckshop",
    "category": "geylang",
    "postal": "399795",
    "latLong": {
      "coordinates": [
        103.888695,
        1.3118669
      ]
    }
  },
  {
    "name": "Alkaff Mansion Ristorante",
    "category": "buffets",
    "postal": "109178",
    "latLong": {
      "coordinates": [
        103.813289,
        1.278877
      ]
    }
  },
  {
    "name": "Lime (PARKROYAL on Pickering)",
    "category": "buffets",
    "postal": "058289",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Edge (Pan Pacific Singapore)",
    "category": "buffets",
    "postal": "039595",
    "latLong": {
      "coordinates": [
        103.858718,
        1.292001
      ]
    }
  },
  {
    "name": "The Lokal",
    "category": "date-night",
    "postal": "088865",
    "latLong": {
      "coordinates": [
        103.841038,
        1.278278
      ]
    }
  },
  {
    "name": "Little Diner",
    "category": "burgers",
    "postal": "269763",
    "latLong": {
      "coordinates": [
        103.796463,
        1.331253
      ]
    }
  },
  {
    "name": "Carousel (Royal Plaza on Scotts)",
    "category": "buffets",
    "postal": "228220",
    "latLong": {
      "coordinates": [
        103.832436,
        1.307079
      ]
    }
  },
  {
    "name": "Roosevelt's Diner & Bar",
    "category": "burgers",
    "postal": "088764",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Artichoke Caf + Bar",
    "category": "date-night",
    "postal": "188978",
    "latLong": {
      "coordinates": [
        103.852077,
        1.299959
      ]
    }
  },
  {
    "name": "Potato Head Folk",
    "category": "burgers",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "Roadhouse",
    "category": "burgers",
    "postal": "249674",
    "latLong": {
      "coordinates": [
        103.810304,
        1.304632
      ]
    }
  },
  {
    "name": "GRUB",
    "category": "burgers",
    "postal": "569983",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "The Lab",
    "category": "bugis",
    "postal": "199069",
    "latLong": {
      "coordinates": [
        103.858834,
        1.3028439
      ]
    }
  },
  {
    "name": "Sin Lee Foods",
    "category": "burpple-guides",
    "postal": "162004",
    "latLong": {
      "coordinates": [
        103.8310429,
        1.287467
      ]
    }
  },
  {
    "name": "Third & Sixth Bistrobar",
    "category": "burgers",
    "postal": "188392",
    "latLong": {
      "coordinates": [
        103.854803,
        1.296007
      ]
    }
  },
  {
    "name": "Cake Spade",
    "category": "burpple-guides",
    "postal": "088504",
    "latLong": {
      "coordinates": [
        103.8437749,
        1.277793
      ]
    }
  },
  {
    "name": "I Am",
    "category": "burpple-guides",
    "postal": "188804",
    "latLong": {
      "coordinates": [
        103.858468,
        1.301642
      ]
    }
  },
  {
    "name": "The Lokal",
    "category": "burpple-guides",
    "postal": "088865",
    "latLong": {
      "coordinates": [
        103.841038,
        1.278278
      ]
    }
  },
  {
    "name": "Sin Lee Foods",
    "category": "desserts",
    "postal": "162004",
    "latLong": {
      "coordinates": [
        103.8310429,
        1.287467
      ]
    }
  },
  {
    "name": "Sunday Folks",
    "category": "burpple-guides",
    "postal": "278116",
    "latLong": {
      "coordinates": [
        103.797152,
        1.31197
      ]
    }
  },
  {
    "name": "Lola's Cafe",
    "category": "burpple-guides",
    "postal": "545893",
    "latLong": {
      "coordinates": [
        103.885948,
        1.361641
      ]
    }
  },
  {
    "name": "Cake Spade",
    "category": "desserts",
    "postal": "088504",
    "latLong": {
      "coordinates": [
        103.8437749,
        1.277793
      ]
    }
  },
  {
    "name": "FATCAT Ice Cream Bar",
    "category": "desserts",
    "postal": "460416",
    "latLong": {
      "coordinates": [
        103.930534,
        1.328566
      ]
    }
  },
  {
    "name": "Sunday Folks",
    "category": "desserts",
    "postal": "278116",
    "latLong": {
      "coordinates": [
        103.797152,
        1.31197
      ]
    }
  },
  {
    "name": "Mad About Sucre",
    "category": "cakes",
    "postal": "088334",
    "latLong": {
      "coordinates": [
        103.8407299,
        1.279784
      ]
    }
  },
  {
    "name": "Strangers' Reunion",
    "category": "breakfast-and-brunch",
    "postal": "169356",
    "latLong": {
      "coordinates": [
        103.836282,
        1.276944
      ]
    }
  },
  {
    "name": "Boufe Boutique Cafe",
    "category": "cakes",
    "postal": "247974",
    "latLong": {
      "coordinates": [
        103.814598,
        1.297722
      ]
    }
  },
  {
    "name": "Maison Ikkoku",
    "category": "cakes",
    "postal": "198885",
    "latLong": {
      "coordinates": [
        103.8597,
        1.302321
      ]
    }
  },
  {
    "name": "The Bakery Chef",
    "category": "cakes",
    "postal": "150161",
    "latLong": {
      "coordinates": [
        103.816147,
        1.283779
      ]
    }
  },
  {
    "name": "Riders Caf",
    "category": "cakes",
    "postal": "286965",
    "latLong": {
      "coordinates": [
        103.798896,
        1.3410169
      ]
    }
  },
  {
    "name": "Antoinette (Penhas Road)",
    "category": "cakes",
    "postal": "208188",
    "latLong": {
      "coordinates": [
        103.862594,
        1.309289
      ]
    }
  },
  {
    "name": "Cake Spade",
    "category": "cakes",
    "postal": "088504",
    "latLong": {
      "coordinates": [
        103.8437749,
        1.277793
      ]
    }
  },
  {
    "name": "The Fabulous Baker Boy",
    "category": "cakes",
    "postal": "179037",
    "latLong": {
      "coordinates": [
        103.8456701,
        1.2918985
      ]
    }
  },
  {
    "name": "Carpenter and Cook",
    "category": "cakes",
    "postal": "598120",
    "latLong": {
      "coordinates": [
        103.773614,
        1.340965
      ]
    }
  },
  {
    "name": "MacKenzie Rex Restaurant (Prinsep Street)",
    "category": "chicken-rice",
    "postal": "188668",
    "latLong": {
      "coordinates": [
        103.849843,
        1.299877
      ]
    }
  },
  {
    "name": "YY Kafei Dian",
    "category": "chicken-rice",
    "postal": "189678",
    "latLong": {
      "coordinates": [
        103.855918,
        1.296
      ]
    }
  },
  {
    "name": "Yet Con Restaurant",
    "category": "chicken-rice",
    "postal": "188602",
    "latLong": {
      "coordinates": [
        103.855314,
        1.296197
      ]
    }
  },
  {
    "name": "Bugis Street Chuen Chuen Chicken Rice (Heritage Place)",
    "category": "chicken-rice",
    "postal": "188108",
    "latLong": {
      "coordinates": [
        103.856722,
        1.298343
      ]
    }
  },
  {
    "name": "Fei Kee Claypot Chicken Rice",
    "category": "chicken-rice",
    "postal": "199567",
    "latLong": {
      "coordinates": [
        103.861755,
        1.301406
      ]
    }
  },
  {
    "name": "Tian Tian Hainanese Chicken Rice (Maxwell Food Centre)",
    "category": "chicken-rice",
    "postal": "069184",
    "latLong": {
      "coordinates": [
        103.844915,
        1.280092
      ]
    }
  },
  {
    "name": "Peony Jade Restaurant (Keppel Club)",
    "category": "chinese",
    "postal": "109918",
    "latLong": {
      "coordinates": [
        103.808598,
        1.267374
      ]
    }
  },
  {
    "name": "Delicious Boneless Chicken Rice",
    "category": "chicken-rice",
    "postal": "437844",
    "latLong": {
      "coordinates": [
        103.901182,
        1.303746
      ]
    }
  },
  {
    "name": "Wee Nam Kee Chicken Rice (United Square)",
    "category": "chicken-rice",
    "postal": "307591",
    "latLong": {
      "coordinates": [
        103.843491,
        1.317711
      ]
    }
  },
  {
    "name": "Wah Lok Cantonese Restaurant",
    "category": "chinese",
    "postal": "189558",
    "latLong": {
      "coordinates": [
        103.852705,
        1.295621
      ]
    }
  },
  {
    "name": "Peach Blossoms",
    "category": "chinese",
    "postal": "039594",
    "latLong": {
      "coordinates": [
        103.857422,
        1.290989
      ]
    }
  },
  {
    "name": "Tim Ho Wan (Plaza Singapura)",
    "category": "dhoby-ghaut",
    "postal": "238839",
    "latLong": {
      "coordinates": [
        103.845411,
        1.301016
      ]
    }
  },
  {
    "name": "I want my noodle",
    "category": "chinese",
    "postal": "228208",
    "latLong": {
      "coordinates": [
        103.8317859,
        1.305662
      ]
    }
  },
  {
    "name": "Yi Dian Xin Hong Kong Dim Sum",
    "category": "chinese",
    "postal": "534752",
    "latLong": {
      "coordinates": [
        103.888158,
        1.362751
      ]
    }
  },
  {
    "name": "Tong Ah Eating House",
    "category": "chinese",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "Swee Choon Dim Sum",
    "category": "little-india",
    "postal": "208882",
    "latLong": {
      "coordinates": [
        103.857002,
        1.308043
      ]
    }
  },
  {
    "name": "Bar-Roque Grill",
    "category": "french",
    "postal": "088539",
    "latLong": {
      "coordinates": [
        103.843575,
        1.274961
      ]
    }
  },
  {
    "name": "Saveur (Far East Plaza)",
    "category": "french",
    "postal": "228213",
    "latLong": {
      "coordinates": [
        103.833358,
        1.307249
      ]
    }
  },
  {
    "name": "Choupinette",
    "category": "french",
    "postal": "269708",
    "latLong": {
      "coordinates": [
        103.809478,
        1.324377
      ]
    }
  },
  {
    "name": "JAAN",
    "category": "french",
    "postal": "178882",
    "latLong": {
      "coordinates": [
        103.852879,
        1.293196
      ]
    }
  },
  {
    "name": "Saveur (Purvis Street)",
    "category": "french",
    "postal": "188584",
    "latLong": {
      "coordinates": [
        103.854962,
        1.296712
      ]
    }
  },
  {
    "name": "Corner House",
    "category": "french",
    "postal": "259569",
    "latLong": {
      "coordinates": [
        103.814733,
        1.311125
      ]
    }
  },
  {
    "name": "Mad About Sucre",
    "category": "french",
    "postal": "088334",
    "latLong": {
      "coordinates": [
        103.8407299,
        1.279784
      ]
    }
  },
  {
    "name": "Tanuki Raw (Orchard Central)",
    "category": "good-for-groups",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "136 Hong Kong Street Fish Head Steamboat (Clementi)",
    "category": "good-for-groups",
    "postal": "120713",
    "latLong": {
      "coordinates": [
        103.762082,
        1.304202
      ]
    }
  },
  {
    "name": "Antoinette (Penhas Road)",
    "category": "lavender",
    "postal": "208188",
    "latLong": {
      "coordinates": [
        103.862594,
        1.309289
      ]
    }
  },
  {
    "name": "Artichoke Caf + Bar",
    "category": "good-for-groups",
    "postal": "188978",
    "latLong": {
      "coordinates": [
        103.852077,
        1.299959
      ]
    }
  },
  {
    "name": "Miam Miam (Bugis Junction)",
    "category": "french",
    "postal": "188021",
    "latLong": {
      "coordinates": [
        103.854921,
        1.299369
      ]
    }
  },
  {
    "name": "Curious Palette",
    "category": "good-for-groups",
    "postal": "188667",
    "latLong": {
      "coordinates": [
        103.849815,
        1.299854
      ]
    }
  },
  {
    "name": "Potato Head Folk",
    "category": "good-for-groups",
    "postal": "089143",
    "latLong": {
      "coordinates": [
        103.8417,
        1.280639
      ]
    }
  },
  {
    "name": "Joo Bar",
    "category": "good-for-groups",
    "postal": "188094",
    "latLong": {
      "coordinates": [
        103.856925,
        1.298175
      ]
    }
  },
  {
    "name": "Kilo At Pact",
    "category": "dinner-with-drinks",
    "postal": "238896",
    "latLong": {
      "coordinates": [
        103.840008,
        1.300934
      ]
    }
  },
  {
    "name": "Chir Chir Fusion Chicken Factory (313@Somerset)",
    "category": "dinner-with-drinks",
    "postal": "238895",
    "latLong": {
      "coordinates": [
        103.8383939,
        1.301509
      ]
    }
  },
  {
    "name": "The Refinery",
    "category": "dinner-with-drinks",
    "postal": "208561",
    "latLong": {
      "coordinates": [
        103.862283,
        1.3103419
      ]
    }
  },
  {
    "name": "Joo Bar",
    "category": "bugis",
    "postal": "188094",
    "latLong": {
      "coordinates": [
        103.856925,
        1.298175
      ]
    }
  },
  {
    "name": "Oriole Coffee + Bar (Somerset)",
    "category": "dinner-with-drinks",
    "postal": "238163",
    "latLong": {
      "coordinates": [
        103.837924,
        1.300711
      ]
    }
  },
  {
    "name": "Paddy Hills",
    "category": "dinner-with-drinks",
    "postal": "118164",
    "latLong": {
      "coordinates": [
        103.786891,
        1.280951
      ]
    }
  },
  {
    "name": "Lola's Cafe",
    "category": "good-for-groups",
    "postal": "545893",
    "latLong": {
      "coordinates": [
        103.885948,
        1.361641
      ]
    }
  },
  {
    "name": "The Tuckshop",
    "category": "dinner-with-drinks",
    "postal": "399795",
    "latLong": {
      "coordinates": [
        103.888695,
        1.3118669
      ]
    }
  },
  {
    "name": "Boca",
    "category": "outram-park",
    "postal": "089820",
    "latLong": {
      "coordinates": [
        103.841019,
        1.278769
      ]
    }
  },
  {
    "name": "The Lokal",
    "category": "duxton",
    "postal": "088865",
    "latLong": {
      "coordinates": [
        103.841038,
        1.278278
      ]
    }
  },
  {
    "name": "La Petite Cuisine (Bukit Timah)",
    "category": "european",
    "postal": "248748",
    "latLong": {
      "coordinates": [
        103.7508974,
        1.345871
      ]
    }
  },
  {
    "name": "Symmetry",
    "category": "date-night",
    "postal": "199206",
    "latLong": {
      "coordinates": [
        103.8593379,
        1.303882
      ]
    }
  },
  {
    "name": "Bar-Roque Grill",
    "category": "european",
    "postal": "088539",
    "latLong": {
      "coordinates": [
        103.843575,
        1.274961
      ]
    }
  },
  {
    "name": "Shelter in The Woods",
    "category": "european",
    "postal": "289219",
    "latLong": {
      "coordinates": [
        103.806729,
        1.331504
      ]
    }
  },
  {
    "name": "FYR Cycene Ond Drinc",
    "category": "european",
    "postal": "069619",
    "latLong": {
      "coordinates": [
        103.848423,
        1.28131
      ]
    }
  },
  {
    "name": "GST",
    "category": "european",
    "postal": "069047",
    "latLong": {
      "coordinates": [
        103.847336,
        1.2796
      ]
    }
  },
  {
    "name": "Saveur (Purvis Street)",
    "category": "european",
    "postal": "188584",
    "latLong": {
      "coordinates": [
        103.854962,
        1.296712
      ]
    }
  },
  {
    "name": "Odette",
    "category": "fine-dining",
    "postal": "178957",
    "latLong": {
      "coordinates": [
        103.851285,
        1.289704
      ]
    }
  },
  {
    "name": "Portico (Alexandra)",
    "category": "european",
    "postal": "119970",
    "latLong": {
      "coordinates": [
        103.803415,
        1.273889
      ]
    }
  },
  {
    "name": "Salt Grill & Sky Bar",
    "category": "fine-dining",
    "postal": "238801",
    "latLong": {
      "coordinates": [
        103.831767,
        1.304052
      ]
    }
  },
  {
    "name": "JAAN",
    "category": "fine-dining",
    "postal": "178882",
    "latLong": {
      "coordinates": [
        103.852879,
        1.293196
      ]
    }
  },
  {
    "name": "BRIDGE",
    "category": "beach-road",
    "postal": "188387",
    "latLong": {
      "coordinates": [
        103.854606,
        1.296144
      ]
    }
  },
  {
    "name": "Lolla",
    "category": "fine-dining",
    "postal": "069702",
    "latLong": {
      "coordinates": [
        103.845703,
        1.281046
      ]
    }
  },
  {
    "name": "Teppei Japanese Restaurant",
    "category": "fine-dining",
    "postal": "078867",
    "latLong": {
      "coordinates": [
        103.843891,
        1.276993
      ]
    }
  },
  {
    "name": "BRIDGE",
    "category": "city-hall",
    "postal": "188387",
    "latLong": {
      "coordinates": [
        103.854606,
        1.296144
      ]
    }
  },
  {
    "name": "Pollen",
    "category": "fine-dining",
    "postal": "018953",
    "latLong": {
      "coordinates": [
        103.867383,
        1.281744
      ]
    }
  },
  {
    "name": "Corner House",
    "category": "botanic-gardens",
    "postal": "259569",
    "latLong": {
      "coordinates": [
        103.814733,
        1.311125
      ]
    }
  }
];
    //create a sample User
    for (var i in seedArray) {
    var place = new Location(seedArray[i]);

    console.log(place);

  //save the sample User
    place.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');



    });
  }
  });

  //set routes
  app.route('/locations')
    .get(locationController.index);
    // .post(locationController.create);

  // -----
  // app.route('/locations/:id')
  //   .get(locationController.show)
  //   .put(locationController.update)
  //   .delete(locationController.delete);
  // -----

  //set routes
  app.route('/locations/search')
    .get(locationController.search);

    //set routes
  app.route('/locations/advSearch')
    .get(locationController.advSearch);
};
