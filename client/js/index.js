// 1. 사용자의 input 내용을 받아온다.

const footerBtn = document.querySelector(".footer--button");
const input = document.querySelector(".footer--input");
const items = document.querySelector(".items");
const li = document.querySelector(".item__row");

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

  const specialBtn = document.createElement("button");
  specialBtn.setAttribute("class", "item__special");
  specialBtn.innerHTML = `<i class="fa fa-light fa-star"></i>`;

  ButnContainer.appendChild(delBtn);
  ButnContainer.appendChild(specialBtn);

  //   const divider = document.querySelector("div");
  //   divider.setAttribute("class", "divider");

  item.appendChild(content);
  item.appendChild(ButnContainer);

  itemRow.appendChild(item);

  //   let lastChild = itemRow.lastChild;
  //   lastChild = divider;
  //   console.log(lastChild);
  //   itemRow.appendChild(divider);

  //   items.appendChild(itemRow);
  return itemRow;
};

footerBtn.addEventListener("click", onAdd);

// 2. 받아온 내용을 새로운 item으로 추가한다. + 버튼도 함께

// 3. 컨테이너 안에 item을 추가한다.

// 4. input 내용을 초기화 한다.
