const RESTAURANT_INFO = {
  "name": "Teak Neighborhood Grill",
  "menuVersion": "June 29th 2026",
  "contactName": "",
  "contactEmail": "",
  "disclaimer": "Always tell your server about allergies before ordering. Ingredient lists can change, and cross-contact may be possible.",
  "contactPhone": ""
};

const ALLERGENS = [
  "Milk",
  "Egg",
  "Fish",
  "Shellfish",
  "Tree Nuts",
  "Peanuts",
  "Wheat/Gluten",
  "Soy/Soybean",
  "Sesame"
];

const MENU_ITEMS = [
  {
    "category": "Starters",
    "name": "Roasted Red Pepper Hummus",
    "description": "Roasted red pepper hummus, sliced cucumbers and feta cheese. Served with warm pita bread.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Starters",
    "name": "Seafood & Spinach Dip",
    "description": "House-made seafood and spinach dip made with three cheeses, diced tomatoes and served with tortilla chips.",
    "allergens": [
      "Milk",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Starters",
    "name": "OMG Chips",
    "description": "House-made Teak chips topped with blue cheese crumbles and maple bacon drizzled with balsamic reduction.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish"
    ]
  },
  {
    "category": "Starters",
    "name": "Garlic Herb Edamame",
    "description": "Steamed edamame tossed with fresh garlic, sea salt and fresh herbs.",
    "allergens": [
      "Soy/Soybean"
    ],
    "crossContamination": []
  },
  {
    "category": "Starters",
    "name": "Soft Pretzel Rolls",
    "description": "Three soft pretzel rolls served with melted cheddar cheese and honey mustard.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Starters",
    "name": "Philly Freeway Rolls",
    "description": "Steak and cheese with bell peppers, fried and topped with sweet Thai chili sauce and green onions.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Starters",
    "name": "Pan Roasted Mussels",
    "description": "Black mussels, garlic, white wine, panko bread crumbs, tomatoes and fresh herbs served with toasted ciabatta bread.",
    "allergens": [
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Starters",
    "name": "Fresh-Fried Mozzarella Rounds",
    "description": "Panko-crusted fresh mozzarella quick fried and served with marinara sauce.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Starters",
    "name": "Chicken Wings",
    "description": "Eight wings tossed in sauce and served with ranch or blue cheese.",
    "allergens": [
      "Milk",
      "Egg"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Starters",
    "name": "Street Corn Dip",
    "description": "Roasted street corn mix topped with mixed cheese and pickled jalapenos, served with yellow salsa chips.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish"
    ]
  },
  {
    "category": "Starters",
    "name": "Bruschetta",
    "description": "Garlic ciabatta bread served with tomato bruschetta, fresh mozzarella and balsamic reduction.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Starters",
    "name": "Teaky Burger Dip",
    "description": "Bacon cheeseburger dip with ground beef, cheddar cheese, pickles, red onion, tomatoes, bacon bits and fried pita chips.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Quesadillas & Tacos",
    "name": "Devil Dog Quesadilla",
    "description": "Grilled chicken, jalapeños, ghost pepper cheese, mixed cheese, tortilla strips and sriracha aioli on a jalapeño flour tortilla.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Quesadillas & Tacos",
    "name": "Crabby Beach Quesadilla",
    "description": "Crab bechamel, firecracker sauce, spinach, pickled jalapenos, potato strings and mixed cheese on a jalapeno tortilla.",
    "allergens": [
      "Milk",
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Quesadillas & Tacos",
    "name": "Ahi Tacos",
    "description": "Two ahi tuna tacos in a wonton shell with seaweed salad, spicy mayo, eel sauce and crunchy wasabi peas.",
    "allergens": [
      "Egg",
      "Fish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Quesadillas & Tacos",
    "name": "Teaky Tacos",
    "description": "Pork or chicken, ghost-pepper cheese, mixed cheese, pico and tortilla strips on a soft tortilla with salsa and sour cream.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Quesadillas & Tacos",
    "name": "Blackened Mahi Tacos",
    "description": "Three tacos with blackened mahi, tartar sauce, coleslaw, pico and tortilla strips on a flour tortilla.",
    "allergens": [
      "Egg",
      "Fish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Flatbreads",
    "name": "Buffalo Chicken Flat",
    "description": "Diced crispy chicken tossed in medium Buffalo sauce, marinara, blue cheese crumbles and shredded mozzarella.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Flatbreads",
    "name": "The Greeky",
    "description": "Red hummus, red onions, cucumbers, tomato garlic mix, black olives, feta, mozzarella and balsamic glaze.",
    "allergens": [
      "Milk"
    ],
    "crossContamination": []
  },
  {
    "category": "Flatbreads",
    "name": "Pesto Chicken Flat",
    "description": "Grilled chicken breast, pesto, mozzarella cheese, diced tomatoes and chopped bacon.",
    "allergens": [
      "Milk",
      "Tree Nuts",
      "Wheat/Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "Flatbreads",
    "name": "Pepperoni Flat",
    "description": "Marinara, mozzarella cheese and pepperoni.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "Flatbreads",
    "name": "BBQ Chicken Flat",
    "description": "Sweet BBQ, mozzarella, smoked Gouda, red onion, grilled chicken and fresh cilantro.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Flatbreads",
    "name": "Firecracker Flat",
    "description": "Chopped shrimp tossed in firecracker sauce with tomato, mozzarella cheese, smoked bacon and green scallions.",
    "allergens": [
      "Milk",
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Entrées",
    "name": "Chicken Pesto Pasta",
    "description": "Grilled chicken over penne pasta tossed in pesto Alfredo sauce with roasted tomatoes, spinach and Parmesan cheese.",
    "allergens": [
      "Milk",
      "Tree Nuts",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Entrées",
    "name": "Chicken Tortellini Pasta",
    "description": "Cheese tortellini tossed in spicy alfredo sauce with roasted cherry tomatoes, bacon bits and shredded chicken.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Entrées",
    "name": "Cajun Alfredo Pasta",
    "description": "Penne pasta tossed in Cajun alfredo sauce with tomatoes, spinach, bacon, garlic bread and choice of chicken or shrimp.",
    "allergens": [
      "Milk",
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Entrées",
    "name": "Saint Louies Ribs",
    "description": "Smoked ribs with house-made sweet Thai chili BBQ sauce over bistro fries with a side of coleslaw.",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Entrées",
    "name": "Man Overboard",
    "description": "Grilled salmon with house-made scallop potatoes, asparagus and bearnaise sauce with herbs and lemon.",
    "allergens": [
      "Milk",
      "Egg",
      "Fish"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Bowls",
    "name": "Steak Frites Bowl",
    "description": "Chopped steak with seasoned fries, peppercorn sauce, blue cheese crumbles, bacon, chimichurri and onion frizzles.",
    "allergens": [
      "Milk"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Bowls",
    "name": "Cookout Bowl",
    "description": "Jasmine rice, bacon, baked beans, pico, mixed cheese, smoked brisket, pulled pork, whiskey BBQ sauce and crispy onion strings.",
    "allergens": [
      "Milk"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Bowls",
    "name": "Mac N Nash Bowl",
    "description": "Three cheese mac n cheese topped with fried chicken, Nashville hot sauce, bacon bits and jalapeño ranch.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Bowls",
    "name": "Moana Bowl",
    "description": "Jasmine rice, ahi tuna chunks, seaweed salad, cucumbers, wonton strips, sriracha mayo, eel sauce and wasabi peas.",
    "allergens": [
      "Egg",
      "Fish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Bowls",
    "name": "Rancho Relaxo",
    "description": "Chicken, rice, black bean and corn, salsa, mixed cheese, pico, tortilla strips and sour cream.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Salads",
    "name": "Chicken Ranch-Caesar Salad",
    "description": "Chopped romaine with ranch dressing, Caesar dressing, parmesan cheese, bacon bits and onion frizzle.",
    "allergens": [
      "Milk",
      "Egg"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Salads",
    "name": "Almond Crusted Mahi",
    "description": "Mixed greens, tomatoes, bacon, cucumbers, almond crusted mahi, crumbled feta and honey citrus vinaigrette.",
    "allergens": [
      "Milk",
      "Fish",
      "Tree Nuts"
    ],
    "crossContamination": []
  },
  {
    "category": "Salads",
    "name": "Grilled Romaine & Salmon",
    "description": "Grilled romaine with tomatoes, corn, feta cheese and citrus glazed Scottish salmon with mango cilantro sauce.",
    "allergens": [
      "Milk",
      "Fish"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Salads",
    "name": "The Greek",
    "description": "Mixed greens, Kalamata olives, cucumbers, tomatoes, feta, hummus and grilled chicken with toasted pita bread and Greek dressing.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Pierogis",
    "name": "Loaded Pierogis",
    "description": "Pierogis tossed in sour cream, chive and Sriracha alfredo sauce with chopped bacon and onion frizzles.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Pierogis",
    "name": "Backyard Pierogis",
    "description": "Pierogis tossed in white cheddar cheese sauce, whiskey BBQ sauce, pulled pork, bacon and onion frizzles.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Pierogis",
    "name": "Shroomin It Pierogis",
    "description": "Pierogis tossed in mushroom alfredo sauce with diced tomatoes, onion frizzles and fresh herbs.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Burgers",
    "name": "Teak It To Australia",
    "description": "Australian Wagyu beef, pickles, lettuce, tomato, cheddar cheese, bacon jam and burger sauce on a brioche bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Texas Two Step",
    "description": "Double smash patties, Swiss cheese, American cheese, grilled onions, bacon and 1000 island dressing on Texas toast.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Balboa",
    "description": "Beef, shredded steak, onions, peppers, mushrooms, herb mayo, provolone and white cheddar queso on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "OMG Burger",
    "description": "Blackened beef, bleu cheese crumbles, Teak chips, balsamic reduction and bibb lettuce on a pretzel bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "General Bison",
    "description": "Bison patty, ghost pepper cheese, jalapeño chips, salsa, guacamole, spicy mayo and spring mix on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Say Cheese!",
    "description": "Double smash patties with American and cheddar cheese, bacon, burger sauce, chili and tomatoes between two grilled cheese sandwiches.",
    "allergens": [
      "Milk"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Maverick",
    "description": "Beef, cheddar cheese, whiskey BBQ sauce, onion ring, smoked brisket and peppercorn sauce on a pretzel bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Daredevil",
    "description": "Double smash patty, ghost pepper cheese, jalapeños, spicy mayo, mango habanero BBQ and spicy chips with Jamaican jerk sauce on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Spicy Veronica",
    "description": "Beef, ghost pepper cheese, pickled jalapeños, Sriracha mayo, potato strings, tomato and spring mix on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Buffalo Herd",
    "description": "Double smash patties, blue cheese, smoked gouda, bacon, potato strings, garlic mayo and mild buffalo sauce on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Harry Carry",
    "description": "Tangy BBQ sauce, sharp cheddar cheese and onion frizzle on a pretzel bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Teak It Easy",
    "description": "Two smash patties, American cheese, cheddar cheese, red onions, pickles, burger sauce, lettuce and tomatoes on a brioche bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Plane Jane",
    "description": "Beef, American cheese, bibb lettuce and tomato on a brioche bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Savannah Blue Burger",
    "description": "Beef patty with blue cheese, bacon, spicy apple chutney, whiskey BBQ sauce, red onions and bibb lettuce on a brioche bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Waffle Burger",
    "description": "Beef, American cheese, over-medium egg and bacon between two pearl sugar infused waffles.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "Burgers",
    "name": "Teak Challenge",
    "description": "Two pounds of beef, American, Swiss and provolone cheese, bacon, mozzarella rounds, beer battered onion rings, chili, queso and jalapeños on a brioche bun.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Pig",
    "description": "Beef, smoked ham, smoked bacon, pulled pork, white cheddar melted cheese, onion jam and herb mayo on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Macho Nacho",
    "description": "Double smash patties, ghost pepper cheese, bibb lettuce, tomato, sour cream, guacamole, salsa, tortilla chips, white queso and ranchero sauce on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Kobe Burger",
    "description": "American Wagyu beef with Swiss cheese, sautéed mushrooms and onions, herb mayo and spring mix on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "I'm Fondue of You",
    "description": "Double smash patties, Swiss cheese, mushrooms, crispy onions, horsey mayo and beef gravy on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Brazilian",
    "description": "Beef, ham, over-medium egg, potato strings, provolone cheese, bibb lettuce, tomato and ranch dressing on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Americano",
    "description": "Double smash patties, ham, pulled pork, sriracha mayo, Swiss cheese, mustard and pickles on toasted ciabatta bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Mike Bison",
    "description": "Bison meat, remoulade aioli, smoked Gouda, sautéed mushrooms and bibb lettuce on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Big Game Rancher",
    "description": "Bison, elk, wild boar and Wagyu patty with Angry Orchard onion jam, herb mayo, bacon and spring mix on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Glazed Donut Burger",
    "description": "Beef, American cheese and smoked bacon between two large glazed donuts.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Burgers",
    "name": "Spicy Monk",
    "description": "Double smash patties, ghost pepper cheese, Angry Orchard onion jam, spicy mayo, jalapeno chips and white queso on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "The Drunken Monk",
    "description": "Beef, Angry Orchard onion jam, roasted cherry tomatoes, smoked bacon, herb mayo, provolone, white cheddar cheese and Teak chips on a pretzel bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Brisket Melt",
    "description": "Texas style toast, BBQ brisket, bacon, sautéed onions and white cheddar cheese sauce.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "The Grizzly",
    "description": "Blackened Scottish salmon, guacamole, lettuce, tomato, red onion, Dijon mustard and herb mayo on a ciabatta bun.",
    "allergens": [
      "Egg",
      "Fish",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Fire Grilled Chicken",
    "description": "Grilled chicken breast, herb mayo, provolone cheese, tomato, guacamole, smoked bacon and crispy potato strings on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Grandma's Chicken",
    "description": "Fried chicken topped with cheddar cheese, bacon, hot honey and spicy apple chutney on Texas toast.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Killer Bee",
    "description": "Grilled chicken breast with honey garlic sauce, chipotle aioli, ghost pepper cheese, banana peppers, tomato and spring mix on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "The New Yorker",
    "description": "Roast beef, ham, provolone, horsey mayo, tomatoes, red onions, bibb lettuce, pickles, Dijon mustard and white vinegar on a toasted baguette roll.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "French Dip",
    "description": "Open-faced prime rib, provolone cheese and horseradish mayo on a garlic artisan baguette with au jus.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Shredded Piggy",
    "description": "Shredded chicken, pulled pork, ham, ranchero sauce, Swiss cheese, lettuce, tomato, potato strings and sofrito mayo on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Smoking Gun",
    "description": "Breaded chicken breast tossed in medium Buffalo sauce with smoked Gouda, smoked ham, bacon, potato strings, ranch, tomato and lettuce on a brioche bun.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Dunkin Chicken",
    "description": "Breaded chicken tossed in mild buffalo sauce with hot honey, bacon, cheddar cheese and a fried egg between two glazed donuts.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sandwiches",
    "name": "Ghostface Wrapper",
    "description": "Grilled chicken tossed in spicy sauce with ghost pepper cheese, Sriracha aioli, tortilla strips, jalapeños, lettuce and jalapeño flour tortilla.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Dessert",
    "name": "Carnival Fries",
    "description": "Fried funnel fries tossed in sugar and served with ice cream and caramel sauce topped with powdered sugar.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Dessert",
    "name": "Churros",
    "description": "Churros tossed in cinnamon sugar and served with vanilla bean ice cream and caramel sauce.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Dessert",
    "name": "Chocolate Brownie Overload",
    "description": "Warm baked brownie with chocolate dessert sauce, whipped cream and vanilla bean ice cream.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "Dessert",
    "name": "The Ultimate Cronie",
    "description": "Half donut and half croissant dough fried to order, tossed in cinnamon sugar and topped with vanilla bean ice cream and caramel sauce.",
    "allergens": [
      "Milk",
      "Egg",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Sides",
    "name": "Coleslaw",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Scallop Potatoes",
    "description": "",
    "allergens": [
      "Milk"
    ],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Mashed Potatoes",
    "description": "",
    "allergens": [
      "Milk"
    ],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Sweet Tots",
    "description": "",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Sides",
    "name": "Plain Fries",
    "description": "",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Sides",
    "name": "Chili Cheese Fries",
    "description": "",
    "allergens": [
      "Milk"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Sides",
    "name": "Garlic Bistro Fries",
    "description": "",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Sides",
    "name": "Sidewinders",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Teak's Potato Chips",
    "description": "",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish"
    ]
  },
  {
    "category": "Sides",
    "name": "Asparagus",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Sweet Potato Tots",
    "description": "",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Sides",
    "name": "Garlic Bistro Sidewinders",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Beer Battered Onion Rings",
    "description": "",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish"
    ]
  },
  {
    "category": "Sides",
    "name": "Baked Beans",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "House Salad",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Garlic Bistro Brussels Sprouts",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Teak Chips",
    "description": "",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish"
    ]
  },
  {
    "category": "Sides",
    "name": "Broccoli",
    "description": "",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Sides",
    "name": "Caesar Salad",
    "description": "",
    "allergens": [
      "Egg"
    ],
    "crossContamination": []
  }
];