const send = document.querySelector(".sendIcon");
const time = document.querySelector(".timeRecords");

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

send.addEventListener("click", () => {
  location.href = "list/list.html";
});
