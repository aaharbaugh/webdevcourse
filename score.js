var pOneButton = document.querySelector("#p1");
var pTwoButton = document.getElementById("p2");
var pOneSpan = document.querySelector("#p1score");
var pTwoSpan = document.querySelector("#p2score");
var pOneScore = 0;
var pTwoScore = 0;
var gameOver = false;
var winningScore = 5;

pOneButton.addEventListener("click", function(){
	if(!gameOver){
		pOneScore++;
		if(pOneScore === winningScore){
			gameOver = !gameOver;
		}
		pOneSpan.textContent = pOneScore;
	}
});

pTwoButton.addEventListener("click", function(){
	if(!gameOver){
		pTwoScore++;
		if(pTwoScore === winningScore){
			gameOver = !gameOver;
		}
	}
		pTwoSpan.textContent = pTwoScore;
});
