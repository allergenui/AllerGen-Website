const ALLERGENS = [
  "Wheat",
  "Soy/Soybeans",
  "Dairy",
  "Tree Nuts",
  "Peanuts",
  "Shellfish",
  "Fish",
  "Eggs",
  "Sesame",
  "Allium",
  "Gluten",
  "Nightshade"
];

const MENU_ITEMS = [
  {
    "category": "DIPS & SPREADS",
    "name": "Black Bean Hummus",
    "allergens": [
      "Wheat",
      "Dairy",
      "Peanuts",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "DIPS & SPREADS",
    "name": "Tzatziki",
    "allergens": [
      "Wheat",
      "Dairy",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "DIPS & SPREADS",
    "name": "Chilled Mediterranean Spinach Dip",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Tree Nuts",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Street Corn",
    "allergens": [
      "Soy/Soybeans",
      "Dairy",
      "Eggs",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Crispy Brussels Sprouts",
    "allergens": [
      "Soy/Soybeans",
      "Sesame"
    ],
    "crossContamination": [
      "Wheat",
      "Shellfish",
      "Fish",
      "Allium",
      "Gluten"
    ]
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Jamon Serrano Croquetas",
    "allergens": [
      "Wheat",
      "Eggs",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": [
      "Dairy",
      "Shellfish",
      "Fish",
      "Gluten"
    ]
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Brick Oven Roasted Sweet Potatoes",
    "allergens": [
      "Dairy",
      "Tree Nuts",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Chilled Chili Udon Noodles",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Marinated Cucumbers",
    "allergens": [
      "Soy/Soybeans",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SNACKS & VEGGIES",
    "name": "Mandarin Orange Salad",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Peanuts",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Cuban Sliders",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Pibli Style Cauliflower Tacos",
    "allergens": [
      "Dairy",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": [
      "Shellfish",
      "Fish"
    ]
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Baja Fish Tacos",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Fish",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Dairy",
      "Shellfish"
    ]
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Guajillo-Roasted Mushroom Tacos",
    "allergens": [
      "Dairy",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": [
      "Soy/Soybeans"
    ]
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Chicken Chorizo Sliders",
    "allergens": [
      "Wheat",
      "Dairy",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Soy/Soybeans"
    ]
  },
  {
    "category": "TACOS & SLIDERS",
    "name": "Duck Confit Sliders",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Fish",
      "Eggs",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Dynamite Shrimp",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Shellfish",
      "Eggs",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Dairy",
      "Fish"
    ]
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Butter Chicken Tikka Masala",
    "allergens": [
      "Dairy",
      "Allium",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Garlic-Maple Chicken Wings",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Fish",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Dairy",
      "Shellfish"
    ]
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Smoked Thai Spare Ribs",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Fish",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Jerk Chicken Skewers",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Sesame Steak Skewers",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Eggs",
      "Sesame",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Spiced Alligator Bites",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Fish",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Shellfish"
    ]
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Cajun Chicken Egg Rolls",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Fish",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Shellfish"
    ]
  },
  {
    "category": "MEATS & SEAFOOD",
    "name": "Duck Confit Salad",
    "allergens": [
      "Wheat",
      "Dairy",
      "Tree Nuts",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": [
      "Fish"
    ]
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Pepperoni Pizza",
    "allergens": [
      "Wheat",
      "Dairy",
      "Allium",
      "Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Cubano Pizza",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Street Corn Pizza",
    "allergens": [
      "Wheat",
      "Dairy",
      "Eggs",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Cajun Chicken Pizza",
    "allergens": [
      "Wheat",
      "Soy/Soybeans",
      "Dairy",
      "Fish",
      "Eggs",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Sausage & Peppers Pizza",
    "allergens": [
      "Wheat",
      "Dairy",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Tex Mex Taco Pizza",
    "allergens": [
      "Wheat",
      "Dairy",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "BRICK OVEN THIN CRUST PIZZA",
    "name": "Mushroom Pizza",
    "allergens": [
      "Wheat",
      "Dairy",
      "Allium",
      "Gluten",
      "Nightshade"
    ],
    "crossContamination": []
  },
  {
    "category": "SWEETS",
    "name": "Triple Chocolate Cake Pops",
    "allergens": [
      "Wheat",
      "Dairy",
      "Eggs",
      "Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "SWEETS",
    "name": "Warm Guava Bread Pudding",
    "allergens": [
      "Wheat",
      "Dairy",
      "Tree Nuts",
      "Eggs",
      "Gluten"
    ],
    "crossContamination": []
  },
  {
    "category": "SWEETS",
    "name": "Coconut Mango Parfait",
    "allergens": [
      "Dairy",
      "Tree Nuts"
    ],
    "crossContamination": []
  },
  {
    "category": "SWEETS",
    "name": "Flourless Chocolate Cake",
    "allergens": [
      "Dairy",
      "Tree Nuts",
      "Eggs"
    ],
    "crossContamination": [
      "Nightshade"
    ]
  }
];

const state = {
  selectedAllergens: []
};

const elements = {
  buttons: document.getElementById("allergen-buttons"),
  selectedAllergen: document.getElementById("selected-allergen"),
  selectedNote: document.getElementById("selected-note"),
  itemTotal: document.getElementById("item-total"),
  reset: document.getElementById("reset-button"),
  clearSelection: document.getElementById("clear-selection-button"),
  selectedChips: document.getElementById("selected-chips"),
  containsCount: document.getElementById("contains-count"),
  crossCount: document.getElementById("cross-count"),
  freeCount: document.getElementById("free-count"),
  containsCountSmall: document.getElementById("contains-count-small"),
  crossCountSmall: document.getElementById("cross-count-small"),
  freeCountSmall: document.getElementById("free-count-small"),
  containsList: document.getElementById("contains-list"),
  crossList: document.getElementById("cross-list"),
  freeList: document.getElementById("free-list"),
  stickyResultsBar: document.getElementById("sticky-results-bar"),
  viewResultsButton: document.getElementById("view-results-button"),
  selectedCountLabel: document.getElementById("selected-count-label")
};

function init() {
  elements.itemTotal.textContent = `${MENU_ITEMS.length} menu items`;
  renderButtons();
  bindEvents();
  render();
}

function renderButtons() {
  elements.buttons.innerHTML = "";

  ALLERGENS.forEach((allergen) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "allergen-button";
    button.dataset.allergen = allergen;
    button.setAttribute("aria-pressed", state.selectedAllergens.includes(allergen) ? "true" : "false");
    button.textContent = allergen;
    button.addEventListener("click", () => {
      toggleAllergen(allergen);
      render();
    });
    elements.buttons.appendChild(button);
  });
}

function bindEvents() {
  elements.reset.addEventListener("click", () => {
    clearSelections();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  elements.clearSelection.addEventListener("click", () => {
    clearSelections();
  });

  elements.viewResultsButton.addEventListener("click", () => {
    document.getElementById("results-heading").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function toggleAllergen(allergen) {
  if (state.selectedAllergens.includes(allergen)) {
    state.selectedAllergens = state.selectedAllergens.filter((item) => item !== allergen);
  } else {
    state.selectedAllergens = [...state.selectedAllergens, allergen];
  }
}

function getItemStatus(item, selected) {
  if (!selected.length) return "none";

  const containsDirectAllergen = selected.some((allergen) => item.allergens.includes(allergen));
  if (containsDirectAllergen) return "contains";

  const hasCrossContaminationWarning = selected.some((allergen) =>
    (item.crossContamination || []).includes(allergen)
  );
  if (hasCrossContaminationWarning) return "cross";

  return "clear";
}

function render() {
  updateActiveButtons();
  updateStickyResultsBar();
  renderSelectedChips();

  const selected = state.selectedAllergens;
  const selectedLabel = formatSelectedAllergens(selected);

  const contains = selected.length
    ? MENU_ITEMS.filter((item) => getItemStatus(item, selected) === "contains")
    : [];

  const cross = selected.length
    ? MENU_ITEMS.filter((item) => getItemStatus(item, selected) === "cross")
    : [];

  const free = selected.length
    ? MENU_ITEMS.filter((item) => getItemStatus(item, selected) === "clear")
    : [];

  elements.selectedAllergen.textContent = selectedLabel;

  if (!selected.length) {
    elements.selectedNote.textContent = "Select one or more allergens to begin.";
  } else {
    elements.selectedNote.textContent = `Showing ${selectedLabel} results`;
  }

  updateCount(elements.freeCount, free.length);
  updateCount(elements.crossCount, cross.length);
  updateCount(elements.containsCount, contains.length);

  elements.freeCountSmall.textContent = free.length;
  elements.crossCountSmall.textContent = cross.length;
  elements.containsCountSmall.textContent = contains.length;

  renderGroupedItems(
    elements.freeList,
    free,
    "Clear",
    selected.length ? "No items are listed without the selected allergen(s)." : "Select one or more allergens to see items that do not contain them."
  );

  renderGroupedItems(
    elements.crossList,
    cross,
    "Cross Contamination",
    selected.length ? "No items are marked for cross contamination with the selected allergen(s)." : "Select one or more allergens to see possible cross contamination items."
  );

  renderGroupedItems(
    elements.containsList,
    contains,
    "Contains",
    selected.length ? "No items contain the selected allergen(s)." : "Select one or more allergens to see items that contain them."
  );
}

function clearSelections() {
  state.selectedAllergens = [];
  render();
}

function removeAllergen(allergen) {
  state.selectedAllergens = state.selectedAllergens.filter((item) => item !== allergen);
  render();
}

function renderSelectedChips() {
  elements.selectedChips.innerHTML = "";

  if (!state.selectedAllergens.length) {
    const empty = document.createElement("span");
    empty.className = "empty-chip-message";
    empty.textContent = "No allergens selected yet.";
    elements.selectedChips.appendChild(empty);
    elements.clearSelection.disabled = true;
    return;
  }

  elements.clearSelection.disabled = false;

  state.selectedAllergens.forEach((allergen) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "selected-chip";
    chip.setAttribute("aria-label", `Remove ${allergen}`);
    chip.innerHTML = `<span>${allergen}</span><strong aria-hidden="true">×</strong>`;
    chip.addEventListener("click", () => removeAllergen(allergen));
    elements.selectedChips.appendChild(chip);
  });
}

function updateStickyResultsBar() {
  const count = state.selectedAllergens.length;

  if (!count) {
    elements.stickyResultsBar.classList.remove("visible");
    elements.selectedCountLabel.textContent = "No allergens selected";
    return;
  }

  elements.stickyResultsBar.classList.add("visible");
  elements.selectedCountLabel.textContent = `${count} allergen${count === 1 ? "" : "s"} selected`;
}

function updateActiveButtons() {
  document.querySelectorAll(".allergen-button").forEach((button) => {
    const active = state.selectedAllergens.includes(button.dataset.allergen);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function formatSelectedAllergens(selected) {
  if (!selected.length) return "None selected";
  if (selected.length <= 2) return selected.join(" + ");
  return `${selected.slice(0, 2).join(" + ")} + ${selected.length - 2} more`;
}

function updateCount(element, count) {
  element.textContent = count;
}

function renderGroupedItems(container, items, badgeText, emptyText) {
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    container.appendChild(empty);
    return;
  }

  const grouped = groupByCategory(items);

  Object.keys(grouped).forEach((category) => {
    const group = document.createElement("section");
    group.className = "category-group";
    group.setAttribute("aria-label", category);

    const header = document.createElement("div");
    header.className = "category-header";

    const title = document.createElement("h4");
    title.className = "category-title";
    title.textContent = category;

    const count = document.createElement("span");
    count.className = "category-count";
    count.textContent = `${grouped[category].length} item${grouped[category].length === 1 ? "" : "s"}`;

    const list = document.createElement("ul");
    list.className = "item-list";

    grouped[category]
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((item) => {
        const row = document.createElement("li");
        row.className = "item-row";

        const name = document.createElement("span");
        name.className = "item-name";
        name.textContent = item.name;

        const badge = document.createElement("span");
        badge.className = "item-badge";
        badge.textContent = badgeText;

        row.appendChild(name);
        row.appendChild(badge);
        list.appendChild(row);
      });

    header.appendChild(title);
    header.appendChild(count);
    group.appendChild(header);
    group.appendChild(list);
    container.appendChild(group);
  });
}

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

init();
