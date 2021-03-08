// @@include("alert.js")
let players = document.querySelectorAll(".player__container");
let buttons = document.querySelectorAll(".player__buttons button");


buttons[0].onclick = () => {
	players[0].classList.remove("hidden");
	players[1].classList.add("hidden");
	buttons[0].classList.add("player__buttons--active");
	buttons[1].classList.remove("player__buttons--active");
}

buttons[1].onclick = () => {
	players[0].classList.add("hidden");
	players[1].classList.remove("hidden");
	buttons[0].classList.remove("player__buttons--active");
	buttons[1].classList.add("player__buttons--active");
}