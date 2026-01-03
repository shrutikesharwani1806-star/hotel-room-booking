
function bookRoom(roomName, pricePerNight, roomImage) {
    localStorage.setItem("roomName", roomName);
    localStorage.setItem("roomPrice", pricePerNight);
    localStorage.setItem("roomImage", roomImage);
    window.location.href = "booking.html";
}


const text = "Extra Services";
let i = 0;
const el = document.getElementById("rewriteText");

function typeEffect() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

el.innerHTML = "";
window.addEventListener("load", typeEffect);
