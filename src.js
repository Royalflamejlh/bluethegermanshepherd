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

	// Interval idf lmao
	//var id = setInterval(move, 5);

	// Terrible practice idk what to do lol
	function move() {
		posX += xDir * 1.5;
		posY += yDir * 1.5;

		// Flip direction on collision
		if (posX + dvdLogo.offsetWidth >= document.documentElement.clientWidth - 1|| posX <= 0) {
			xDir *= -1;
		}
		// Same for y
		if (posY + dvdLogo.offsetHeight >= document.documentElement.clientHeight - 1 || posY <= 0) {
			yDir *= -1;
		}

		dvdLogo.style.left = posX + "px";
		dvdLogo.style.top = posY + "px";
		window.requestAnimationFrame(move);
	}
	move();
}
function banjo(e){
	
	  var mouseX = e.clientX;
	  var mouseY = e.clientY;
	  var tracker = document.getElementById('banjo');
	  var trackerX = -60;
	  var trackerY = 5;
	  
	  follow();
	  function follow() {
			trackerX += (mouseX);
			trackerY += (mouseY);
			document.getElementById('banjo').style.left = parseInt(trackerX) + "px";
			document.getElementById('banjo').style.top = parseInt(trackerY) + "px";
		}

	}
