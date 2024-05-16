function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
  <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function eventListener(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".nav");

  logo.addEventListener("click", () => displayItems(items));

  buttons.addEventListener("click", (event) => {
    click(event, items);
  });
}

function click(event, items) {
  const btn = document.querySelector(".btn");
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
}

loadItems()
  .then((items) => {
    displayItems(items);
    // eventListner(items);
    eventListener(items);
  })
  .catch((err) => {
    console.error(err);
  });
