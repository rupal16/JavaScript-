let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let am = document.getElementById("am");

const dt = new Date();
let hours = dt.getHours();
let prepend = hours >= 12 ? "PM" : "AM";
if (hours > 12){
	hours = hours % 12;
}
hour.textContent = hours;
let min = dt.getMinutes();
minute.textContent = min;
let sec = dt.getSeconds();
second.textContent = sec;
am.textContent = prepend;
