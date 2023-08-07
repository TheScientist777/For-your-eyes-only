let alibiGenerated = false;
let successRate = 0;

function generateAlibi() {
  if (!alibiGenerated) {
    // Simulate generating an alibi (you can customize this part)
    successRate = Math.floor(Math.random() * 101); // Random success rate from 0 to 100
    document.getElementById("success-rate").innerText = successRate + "%";

    // Add some fake comments (you can customize this part)
    const comments = [
      { avatar: "path/to/avatar1.jpg", text: "Great alibi!" },
      { avatar: "path/to/avatar2.jpg", text: "I used this and it worked perfectly!" },
      { avatar: "path/to/avatar3.jpg", text: "Not bad, but could be better." }
    ];

    const commentsSection = document.getElementById("comments-section");
    commentsSection.innerHTML = "";

    comments.forEach((comment) => {
      const commentBox = document.createElement("div");
      commentBox.className = "comment-box";
      commentBox.innerHTML = `
        <img src="${comment.avatar}" alt="Avatar">
        <p>${comment.text}</p>
      `;
      commentsSection.appendChild(commentBox);
    });

    // Disable the generator button after generating an alibi
    document.getElementById("generator-button").disabled = true;
    alibiGenerated = true;
  }
}

function refreshAlibi() {
  // Reset alibi data and enable the generator button
  document.getElementById("generator-button").disabled = false;
  alibiGenerated = false;
  successRate = 0;
  document.getElementById("success-rate").innerText = "0%";
  document.getElementById("comments-section").innerHTML = "";
}