/**
 *
 * Title : Drum Kit
 * Author: Kean Duque
 *
 */

"use strict";

(function () {
	var buttonEl = document.querySelectorAll("button.drum");

	buttonEl.forEach((button) => {
		button.addEventListener("click", handleDrum.bind(this, button));
	});
	document.addEventListener("keydown", function (e) {
		handleDrum(e);
		addAnimation(e.key);
	});
	function handleDrum(e) {
		var key = e.key || e.innerHTML;

		addAnimation(key);
		switch (key) {
			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;
			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;
			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;
			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;
			case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;
			case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;
			case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();
				break;
			default:
				console.log("Select Correct Keys!");
				break;
		}
	}
	function addAnimation(event) {
		let eventClass = `.${event}`;

		var activeState = document.querySelector(eventClass);
		if (activeState) {
			activeState.classList.add("pressed");
			setTimeout(function (e) {
				activeState.classList.remove("pressed");
			}, 100);
		}
	}
})();
