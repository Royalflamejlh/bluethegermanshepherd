function music() { 
	var song = document.getElementById("banjoSong");
	
	playAudio();
	shootNote(document.getElementById('note1'));
	shootNote(document.getElementById('note2'));
	shootNote(document.getElementById('note3'));
	shootNote(document.getElementById('note4'));
	shootNote(document.getElementById('note5'));
	
	

	function playAudio() {
	  song.play();
	}

	function pauseAudio() {
	  song.pause();
	}
		
	function shootNote(e){
		var x = event.clientX;
		var y = event.clientY;
		var w = 100;
		var xAdd = Math.floor(Math.random() * 10);
		var yAdd = Math.floor(Math.random() * 10);
		var xNeg = Math.random() < 0.5 ? -1 : 1;
		var yNeg = Math.random() < 0.5 ? -1 : 1;
		e.style.visibility = 'visible';
		e.style.width = w + "px";
		e.style.height = "auto";
		
		updateLocation(e, x, y);
		animate(e);
		function updateLocation(e, x, y){
			e.style.left = parseInt(x) + "px";
			e.style.top = parseInt(y) + "px";
		}
		function animate(e){
			if(w <= 0){
				return;
			}
			e.style.width = w + "px";
			e.style.left = (parseInt(e.style.left) + (xAdd * xNeg)) + "px";
			e.style.top = (parseInt(e.style.top) + (yAdd * yNeg))  + "px";
			w --;
			window.requestAnimationFrame(function(){animate(e);});
		}
		console.log("yeet");
	}
}