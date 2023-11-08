function showPopup() {
  alert("Someone is knocking on the door!");

  // Set the background image using JavaScript
  document.body.style.backgroundImage = "url('Knocking on door.jpg')";

  // Wait for 2 seconds and reset the background image
  setTimeout(() => {
    document.body.style.backgroundImage = "url('Index background.jpg')";
    window.location.href = "alibi.html";
  }, 2000); // 2,000 milliseconds = 2 seconds
}

function showNote() {
  alert("This is a note to read. Welcome to my website!");
}
