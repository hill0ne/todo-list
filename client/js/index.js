// 1. 사용자의 input 내용을 받아온다.

const footerBtn = document.querySelector(".footer--button");
const input = document.querySelector(".footer--input");
const items = document.querySelector(".items");
const item = document.querySelector(".item__row");
const delBtn = document.querySelector(".item__delete");

function onAdd() {
  const text = input.value;

  if (text === "") {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);

  input.value = "";
  input.focus();
}

const createItem = function (text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const content = document.createElement("span");
  content.setAttribute("class", "item__content");

  const contentText = document.createTextNode(text);
  content.appendChild(contentText);

  // button
  const ButnContainer = document.createElement("div");
  ButnContainer.setAttribute("class", "button__container");
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "item__delete");
  delBtn.innerHTML = `<i class="fa fa-light fa-trash-can"></i>`;
  delBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const specialBtn = document.createElement("button");
  specialBtn.setAttribute("class", "item__special");
  specialBtn.innerHTML = `<i class="fa fa-light fa-star"></i>`;
  specialBtn.addEventListener("click", () => {
    items.prepend(itemRow);
    itemRow.style.cssText = "color: red; font-weight: bold";
  });

  ButnContainer.appendChild(delBtn);
  ButnContainer.appendChild(specialBtn);

  //   const divider = document.querySelector("div");
  //   divider.setAttribute("class", "divider");

  item.appendChild(content);
  item.appendChild(ButnContainer);

  itemRow.appendChild(item);
  //   itemRow.appendChild(divider);

  return itemRow;
};

footerBtn.addEventListener("click", onAdd);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
// delBtn.addEventListener("click", () => {
//   items.removeChild(item);
// });
