document.getElementById("activate").addEventListener("click", function (event) {
	event.preventDefault(); // Prevent the default behavior of the button
	document.getElementById("chat-card").style.display = "block"; // Show the chat-card element
});
document.getElementById("close").addEventListener("click", function () {
	document.getElementById("chat-card").style.display = "none";
});
