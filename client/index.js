const send = document.querySelector(".sendIcon");
const button = document.querySelector(".sendButton");
const time = document.querySelector(".timeRecords");
const input = document.querySelector(".input--response");

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
let standard = 0;
let mood = "";

if (hours < 13) {
  mood = "오전 ";
  standard = 0;
} else {
  mood = "오후 ";
  standard = 12;
}

time.innerText = mood + (hours - standard) + ":" + minutes;

function changeLocation() {
  location.href = "list/list.html";
}

send.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    changeLocation();
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    changeLocation();
  }
});
button.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    changeLocation();
  }
});
