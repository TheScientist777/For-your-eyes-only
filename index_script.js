function showPopup() {
  alert("Someone is knocking on the door!");

  // Set the background image using JavaScript
  document.body.style.backgroundImage = "url('Knocking on door.jpg')";

  // Hide the buttons
  document.querySelectorAll(".link-button, .popup-button, .note-button").forEach(button => {
    button.style.display = "none";
  });

  // Wait for 10 seconds, reset the background image, and show the buttons
  setTimeout(() => {
    document.body.style.backgroundImage = "url('/Index background.jpg')";
    document.querySelectorAll(".link-button, .popup-button, .note-button").forEach(button => {
      button.style.display = "block";
    });
    window.location.href = "alibi.html";
  }, 2000); // 10,000 milliseconds = 10 seconds
}

function showNote() {
  alert("You'll find what you're looking for here. But rememeber the code: grrfurjiclestan. Less you meet a gruesome fate.");
}
