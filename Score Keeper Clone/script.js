var p1score = document.getElementById("p1display");
var p2score = document.getElementById("p2display");
var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
p1score = 0;
p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
	if (!gameOver) {
		p1score++;
		if( p1score === winningScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
});

p2button.addEventListener("click",function(){
	if (!gameOver) {
		p2score++;
		if (p2score === winningScore) {
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2score;
	}
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
};

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScore = Number(this.value);
	winningScoreDisplay.textContent = winningScore;
	reset();
});
