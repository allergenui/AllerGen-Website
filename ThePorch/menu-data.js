const RESTAURANT_INFO = {
  "name": "The Porch (South Orange)",
  "menuVersion": "August 26",
  "contactName": "Manager",
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
    "category": "Burgers",
    "name": "B.Y.O.B.",
    "description": "Choice of half pound Angus burger, chicken breast, turkey burger, sweet potato black bean burger, or Beyond Burger, with choice of potato, pretzel, multigrain, lettuce, or gluten-free bun.",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Sombrero",
    "description": "Fresh pico de gallo, pepper jack cheese, pickled jalapeños, avocado, and cilantro lime crema.",
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
    "name": "Fancy Fun-Guy",
    "description": "Sautéed baby mushrooms and onions, Swiss cheese, white truffle aioli, and arugula.",
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
    "name": "Colombiano",
    "description": "White American cheese, potato sticks, Applewood smoked bacon, pineapple sauce, pink sauce, and garlic aioli.",
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
    "name": "Truck Stop",
    "description": "Applewood smoked bacon, American cheese, caramelized onions, BBQ sauce, and fries.",
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
    "name": "Maui Waui",
    "description": "Fresh grilled pineapple, Applewood smoked bacon, provolone cheese, cilantro ginger teriyaki, cilantro, and green onion.",
    "allergens": [
      "Milk",
      "Wheat/Gluten",
      "Soy/Soybean"
    ],
    "crossContamination": [
      "Sesame"
    ]
  },
  {
    "category": "Burgers",
    "name": "Smash Burger",
    "description": "Two smashed beef patties, two slices of American cheese, and garlic aioli.",
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
    "category": "House Specialties",
    "name": "The Porch TV Dinner",
    "description": "Porch tenders, mashed potatoes and gravy, white cheddar macaroni and cheese, corn on the cob, and a treat.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Soy/Soybean"
    ]
  },
  {
    "category": "House Specialties",
    "name": "Shrimp & Grits",
    "description": "Blackened shrimp over pepper jack and jalapeño grits with honey beurre blanc, cilantro, green onion, and side salad.",
    "allergens": [
      "Milk",
      "Shellfish"
    ],
    "crossContamination": []
  },
  {
    "category": "House Specialties",
    "name": "The Porch Catch",
    "description": "Seasonal fish preparation; ask what is on the hook.",
    "allergens": [
      "Fish"
    ],
    "crossContamination": [
      "Shellfish"
    ]
  },
  {
    "category": "House Specialties",
    "name": "Shrimp Boil",
    "description": "Boiled shrimp, andouille sausage, corn on the cob, Yukon potatoes, drawn butter, cocktail sauce, and grilled lemon.",
    "allergens": [
      "Milk",
      "Shellfish"
    ],
    "crossContamination": [
      "Fish",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "House Specialties",
    "name": "The Loin Rangers",
    "description": "Two boneless pork chops in house mojo with creamy mashed potatoes, gravy, and crispy Brussels sprouts tossed in hot honey.",
    "allergens": [
      "Milk"
    ],
    "crossContamination": [
      "Wheat/Gluten"
    ]
  },
  {
    "category": "House Specialties",
    "name": "Churrasco Steak & Rice",
    "description": "Grilled churrasco steak, roasted salsa rojo, black bean, corn and feta salsa, yellow rice, and crispy corn tortilla strips.",
    "allergens": [],
    "crossContamination": [
      "Wheat/Gluten"
    ]
  },
  {
    "category": "House Specialties",
    "name": "Porch Tacos",
    "description": "Three flour-tortilla tacos with pickled cabbage, pico de gallo, cilantro lime crema, and choice of grouper or chicken; steak or shrimp available. Served with side salad.",
    "allergens": [
      "Milk",
      "Fish",
      "Shellfish",
      "Wheat/Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "Sweets & Treats",
    "name": "Waffle Sundae",
    "description": "Vanilla ice cream in a warm Belgian waffle with praline sauce, candied pecans, whipped cream, and a cherry.",
    "allergens": [
      "Milk",
      "Tree Nuts",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Peanuts",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sweets & Treats",
    "name": "Fun Fries",
    "description": "Funnel cake and apple pie fries tossed in cinnamon and powdered sugar with salted caramel sauce.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sweets & Treats",
    "name": "Reese's Peanut Butter Pie",
    "description": "Chocolate graham cracker crust with creamy peanut butter filling, chocolate and caramel sauces, and whipped cream.",
    "allergens": [
      "Milk",
      "Peanuts",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Tree Nuts",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Sweets & Treats",
    "name": "Ice Cream Sammies",
    "description": "Three chocolate chip cookie sandwiches with vanilla ice cream and powdered sugar.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Tree Nuts",
      "Peanuts",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Regular Sides",
    "name": "House Fries",
    "description": "House fries.",
    "allergens": [],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Regular Sides",
    "name": "Tater Tots",
    "description": "Tater tots.",
    "allergens": [],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Regular Sides",
    "name": "Pasta Salad",
    "description": "Pasta salad.",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg"
    ]
  },
  {
    "category": "Regular Sides",
    "name": "Carrots & Ranch",
    "description": "Carrots with ranch dressing.",
    "allergens": [
      "Milk",
      "Egg"
    ],
    "crossContamination": [
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Premium Sides",
    "name": "Onion Rings",
    "description": "Onion rings.",
    "allergens": [
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Premium Sides",
    "name": "Sweet Tots",
    "description": "Sweet potato tots.",
    "allergens": [],
    "crossContamination": [
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Wheat/Gluten",
      "Soy/Soybean"
    ]
  },
  {
    "category": "Premium Sides",
    "name": "Fresh Fruit",
    "description": "Fresh fruit.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Premium Sides",
    "name": "Side Salad",
    "description": "Side salad.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Premium Sides",
    "name": "Side Caesar",
    "description": "Side Caesar salad.",
    "allergens": [
      "Egg"
    ],
    "crossContamination": [
      "Fish"
    ]
  },
  {
    "category": "Premium Sides",
    "name": "Seasonal Veggies",
    "description": "Seasonal vegetables.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Premium Sides",
    "name": "Mashed Potatoes & Gravy",
    "description": "Mashed potatoes with gravy.",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Wheat/Gluten"
    ]
  },
  {
    "category": "Premium Sides",
    "name": "White Cheddar Mac & Cheese",
    "description": "White cheddar macaroni and cheese.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Soy/Soybean"
    ]
  },
  {
    "category": "House Made Sauces & Dressings",
    "name": "House Made Sauces & Dressings",
    "description": "Selection of house-made sauces and dressings.",
    "allergens": [],
    "crossContamination": [
      "Milk",
      "Egg",
      "Fish",
      "Shellfish",
      "Tree Nuts",
      "Peanuts",
      "Wheat/Gluten",
      "Soy/Soybean",
      "Sesame"
    ]
  },
  {
    "category": "Thirst Quenchers",
    "name": "Sweet & Unsweetened Iced Tea",
    "description": "Sweet or unsweetened iced tea.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Coca-Cola Soft Drinks",
    "description": "Coca-Cola, Diet Coke, Cherry Coke, Sprite, or Root Beer.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Lemonade or Gingerale",
    "description": "Lemonade or gingerale.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Fresh Coffee",
    "description": "Fresh coffee.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Bottled Water",
    "description": "Bottled water.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Bottled IBC Root Beer or Bottled Coke Zero",
    "description": "Bottled IBC Root Beer or bottled Coke Zero.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Thirst Quenchers",
    "name": "Red Bull",
    "description": "Regular, sugar free, or flavored Red Bull.",
    "allergens": [],
    "crossContamination": []
  },
  {
    "category": "Little Ones",
    "name": "The Kids Meal",
    "description": "Choice of two chicken fingers, two hamburger sliders with American cheese, grilled cheese sandwich, or white cheddar macaroni and cheese; served with fresh fruit, tater tots, juice box, and cookie.",
    "allergens": [
      "Milk",
      "Wheat/Gluten"
    ],
    "crossContamination": [
      "Egg",
      "Tree Nuts",
      "Peanuts",
      "Soy/Soybean"
    ]
  }
];