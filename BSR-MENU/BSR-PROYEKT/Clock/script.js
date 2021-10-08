setInterval(() => {
const oclock = document.getElementById("hour");
let date = new Date();
let hours = date.getHours();
let minuts = date.getMinutes()
let seconds = date.getSeconds()
oclock.textContent = hours + ":" + minuts + ":" + seconds;
})