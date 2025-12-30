
function bookRoom(roomName, pricePerNight, roomImage) {
    localStorage.setItem("roomName", roomName);
    localStorage.setItem("roomPrice", pricePerNight);
    localStorage.setItem("roomImage", roomImage);
    window.location.href = "booking.html";
}


