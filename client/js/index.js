const body = document.querySelector("body");
const footerBtn = document.querySelector(".footer--button");
const input = document.querySelector(".footer--input");
const items = document.querySelector(".items");
const item = document.querySelector(".item__row");
const delBtn = document.querySelector(".item__delete");

(function onFocus() {
  input.focus();
  body.addEventListener("click", (e) => {
    e.preventDefault();
    input.focus();
  });
})();

function onAdd() {
  const text = input.value;

  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

let id = 0;

const createItem = function (text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);

  itemRow.innerHTML = `
  <div class="item">
    <span class="item__content">${text}</span>
      <div class="button__container">
      <button class="item__delete">
          <i class="fa fa-light fa-trash-can" id="trash" data-id=${id}></i>
      </button>
      <button class="item__special">
          <i class="fa fa-light fa-star" id="star" data-id=${id}></i>
      </button>
    </div>
</div>`;

  id++;
  return itemRow;
};

footerBtn.addEventListener("click", onAdd);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const selected = document.querySelector(`.item__row[data-id="${id}"]`);
  console.log(selected);
  if (e.target.id === "trash") {
    selected.remove();
  } else if (e.target.id === "star") {
    items.prepend(selected);
    selected.style.cssText = "color: #D82148; font-weight: bold;";
  }
});
