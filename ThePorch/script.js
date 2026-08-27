const state = { selectedAllergens: [] };

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
  const name = RESTAURANT_INFO.name || "Restaurant";
  document.title = `${name} Allergen Guide`;
  document.querySelectorAll("[data-restaurant-name]").forEach(node => node.textContent = name);
  document.querySelector(".logo")?.setAttribute("aria-label", `${name} Allergen Guide Home`);
  document.getElementById("disclaimer-text").textContent = RESTAURANT_INFO.disclaimer || "Always tell your server about allergies before ordering. Ingredient lists can change, and cross-contact may be possible.";
  elements.itemTotal.textContent = `${MENU_ITEMS.length} menu items`;
  renderButtons();
  bindEvents();
  render();
}

function renderButtons() {
  elements.buttons.innerHTML = "";
  ALLERGENS.forEach(allergen => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "allergen-button";
    button.dataset.allergen = allergen;
    button.setAttribute("aria-pressed", "false");
    button.textContent = allergen;
    button.addEventListener("click", () => {
      toggleAllergen(allergen);
      render();
    });
    elements.buttons.appendChild(button);
  });
}

function bindEvents() {
  elements.reset.addEventListener("click", clearSelections);
  elements.clearSelection.addEventListener("click", clearSelections);
  elements.viewResultsButton.addEventListener("click", () => {
    document.getElementById("results-heading").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function toggleAllergen(allergen) {
  if (state.selectedAllergens.includes(allergen)) {
    state.selectedAllergens = state.selectedAllergens.filter(item => item !== allergen);
  } else {
    state.selectedAllergens = [...state.selectedAllergens, allergen];
  }
}

function getItemStatus(item, selected) {
  if (!selected.length) return "none";
  if (selected.some(allergen => item.allergens.includes(allergen))) return "contains";
  if (selected.some(allergen => (item.crossContamination || []).includes(allergen))) return "cross";
  return "clear";
}

function render() {
  updateActiveButtons();
  updateStickyResultsBar();
  renderSelectedChips();

  const selected = state.selectedAllergens;
  const selectedLabel = formatSelectedAllergens(selected);

  const contains = selected.length ? MENU_ITEMS.filter(item => getItemStatus(item, selected) === "contains") : [];
  const cross = selected.length ? MENU_ITEMS.filter(item => getItemStatus(item, selected) === "cross") : [];
  const free = selected.length ? MENU_ITEMS.filter(item => getItemStatus(item, selected) === "clear") : [];

  elements.selectedAllergen.textContent = selectedLabel;
  elements.selectedNote.textContent = selected.length ? `Showing ${selectedLabel} results` : "Select one or more allergens to begin.";

  updateCount(elements.freeCount, free.length);
  updateCount(elements.crossCount, cross.length);
  updateCount(elements.containsCount, contains.length);
  elements.freeCountSmall.textContent = free.length;
  elements.crossCountSmall.textContent = cross.length;
  elements.containsCountSmall.textContent = contains.length;

  renderGroupedItems(elements.freeList, free, "Clear", selected.length ? "No items are listed without the selected allergen(s)." : "Select one or more allergens to see items that do not contain them.");
  renderGroupedItems(elements.crossList, cross, "Cross Contamination", selected.length ? "No items are marked for cross contamination with the selected allergen(s)." : "Select one or more allergens to see possible cross contamination items.");
  renderGroupedItems(elements.containsList, contains, "Contains", selected.length ? "No items contain the selected allergen(s)." : "Select one or more allergens to see items that contain them.");
}

function clearSelections() {
  state.selectedAllergens = [];
  render();
}

function removeAllergen(allergen) {
  state.selectedAllergens = state.selectedAllergens.filter(item => item !== allergen);
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
  state.selectedAllergens.forEach(allergen => {
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
  document.querySelectorAll(".allergen-button").forEach(button => {
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

function updateCount(element, count) { element.textContent = count; }

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
  Object.keys(grouped).forEach(category => {
    const group = document.createElement("section");
    group.className = "category-group";

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

    grouped[category].slice().sort((a, b) => a.name.localeCompare(b.name)).forEach(item => {
      const row = document.createElement("li");
      row.className = "item-row";

      const itemCopy = document.createElement("span");
      itemCopy.className = "item-copy";

      const name = document.createElement("span");
      name.className = "item-name";
      name.textContent = item.name;
      itemCopy.appendChild(name);

      if (item.description) {
        const description = document.createElement("span");
        description.className = "item-description";
        description.textContent = item.description;
        itemCopy.appendChild(description);
      }

      const badge = document.createElement("span");
      badge.className = "item-badge";
      badge.textContent = badgeText;

      row.appendChild(itemCopy);
      row.appendChild(badge);
      list.appendChild(row);
    });

    header.append(title, count);
    group.append(header, list);
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
