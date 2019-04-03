window.onload = function bootup() {
	updateDvd();
}

function updateDvd() {
	// Simple variable initialization
	var posX = 0;
	var posY = 0;

	var xDir = 1;
	var yDir = 1;

	// Get logo from "dvd" id
	var dvdLogo = document.getElementById("dvd");

	// Interval idfk lmao
	var id = setInterval(move, 5);

	// Terrible practice idk what to do lol
	function move() {
		posX += xDir * 3;
		posY += yDir * 3;

		// Flip direction
		if (posX >= $(window).width() || posX <= 0) {
			xDir *= -1;
		}

		// Same for y
		if (posY >= $(window).height() || posY <= 0) {
			yDir *= -1;
		}

		dvdLogo.style.left = posX + "px";
		dvdLogo.style.top = posY + "px";
	}
}