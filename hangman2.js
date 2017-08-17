var harry = document.getElementById("harry");
var voldemort = document.getElementById ("ron")
function playAudio(audio){
	audio.play();
}

var wordChoices = [
["h", "a", "r", "r", "y", " ", "p","o","t","t","e","r"],
["r", "o", "n", " ", "w", "e", "a", "s", "l", "e", "y"],
["r", "e", "m", "u", "s", " ", "l", "u", "p", "i", "n"],
["n", "m", "p", "h", "y", "d", "o", "r", "a", " ", "t", "o", "n", "k", "s"],
["g", "e", "o", "r", "g", "e", " ", "w", "e", "a", "s", "l", "e", "y"],
["f", "r", "e", "d", " ", "w", "e", "a", "s", "l", "e", "y"],
["c", "h", "a", "r", "l", "i", "e", " ", "w", "e", "a", "s", "l", "e", "y"],
["b", "i", "l", "l", " ", "w", "e", "a", "s", "l", "e", "y"],
["f", "l", "e", "u", "r", " ", "d", "e", "l", "a", "c", "o", "u", "r"],
["g", "i", "n", "n", "y", " ", "w", "e", "a", "s", "l", "e", "y"],
["o", "l", "i", "v", "e", "r", " ", "w", "o", "o", "d", "s"],
["d", "u", "d", "l", "e", "y", " ", "d", "u", "r", "s", "l", "e", "y"],
["v", "e", "r", "n", "o", "n", " ", "d", "u", "r", "s", "l", "e", "y"],
["p", "e", "t", "u", "n", "i", "a", " ", "d", "u", "r", "s", "l", "e", "y"],
["l", "o", "r", "d", " ", "v", "o", "l", "d", "e", "m", "o", "r", "t"],
["b", "e", "l", "l", "a", "t", "r", "i", "x", " ", "l", "e", "s", "t", "r", "a", "n", "g", "e"],
["n", "e", "v", "i", "l", "l", "e", " ", "l", "o", "n", "g", "b", "o", "t", "t", "o", "m"],
["l", "u", "n", "a", " ", "l", "o", "v", "e", "g", "o", "o", "d"],
["d", "r", "a", "c", "o", " ", "m", "a", "l", "f", "o", "y"],
["l", "u", "c", "i", "u", "s", " ", "m", "a", "l", "f", "o", "y"],
["r", "u", "b", "i", "u", "s", " ", "h", "a", "g", "r", "i", "d"],
["m", "a", "d", "e", "y", "e", " ", "m", "o", "o", "d", "y"],
["k", "i", "n", "g", "s", "l", "e", "y", " ", "s", "h", "a", "c", "k", "l", "e", "b", "o", "l", "t"],
["c", "o", "r", "n", "e", "l", "i", "u", "s", " ", "f", "u", "d", "g", "e"],
["c", "e", "d", "r", "i", "c", " ", "d", "i", "g", "g", "o", "r", "y"],
["v", "i", "c", "t", "o", "r", " ", "k", "r", "u", "m"],
["s", "e", "r", "v", "e", "r", "u", "s", " ", "s", "n", "a", "p", "e"],
["m", "a", "d", "a", "m", " ", "h", "o", "o", "c", "h"],
["m", "i", "n", "e", "r", "v", "a", " ", "m", "c", "g", "o", "n", "a", "g", "a", "l"],
["p", "e", "r", "c", "y", " ", "w", "e", "a", "s", "l", "e", "y"],
["m", "o", "l", "l", "y", " ", "w", "e", "a", "s", "l", "e", "y"],
["a", "r", "t", "h", "u", "r", " ", "w", "e", "a", "s", "l", "e", "y"]
["j", "a", "m", "e", "s", " ", "p", "o", "t", "t", "e", "r"],
["l", "i", "l", "y", " ", "p", "o", "t", "t", "e", "r"],
["s", "i", "r", "i", "u", "s", " ", "b", "l", "a", "c", "k"],
["p", "e", "t", "e", "r", " ", "p", "e", "t", "t", "i", "g", "r", "e", "w"]
];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

var randomNumber;
var randomWord;
var letterCount = [];
var missCount = 0;
var guessesLeft = 11;
var CorrectWordCt = 0;
var win;
var hitCount = 0
var guessCount

 

function selectWord(){

randomNumber = Math.floor((Math.random()*(wordChoices.length-1)));

randomWord = wordChoices[randomNumber];


 for(var i = 0; randomWord.length > i; i++){
 	if(randomWord[i] === " "){
 		letterCount.push ("\xa0");
 		hitCount++;
 	}

 	else {
 		letterCount.push (" _ ");
 		// console.log(letterCount);
 	}
 
 }

 return(randomWord);
 return(hitCount);
}

 // console.log(letterCount)
function showLetterCount() {
 for(var i = 0; i < letterCount.length; i++){
 	var letterSpot = document.getElementById("letterSpot");
 	var letter = document.createTextNode (letterCount[i]);
 	letterSpot.appendChild(letter);
 }
}

document.onkeyup = function(event){
	var userInput = event.key;
	
	userInput = userInput.toLowerCase();

	for (var k =0; k < alphabet.length; k++){
		if(userInput === alphabet[k]){


	for(var j = 0; j < randomWord.length; j++){
		if(userInput === randomWord[j] && " " + userInput + " " !== letterCount[j]){
			letterCount[j] = " " + userInput + " "

			var match = true

			var letterSpot=document.getElementById("letterSpot");
			letterSpot.innerHTML="";
			showLetterCount();

			hitCount++;
		}

		if(randomWord.length === hitCount){
			hitCount = "No additional letters";
			win = document.getElementById("win");
				win.innerHTML=("You Beat Voldemort, You Win!");
				playAudio(harry);
				setTimeout (endHit, 2500);
		}
	}

		if(!match){
			var misses = document.getElementById("misses");
			var miss = document.createTextNode(" "+userInput+" ");
			misses.appendChild(miss);
		
			missCount++;
			guessesLeft--;

		  		document.getElementById("guessesLeft").innerHTML = ("Remaining Guesses: " + guessesLeft);
		  		
		  		document.getElementById("hangman");
		  		hangman.src = "Assets/Images/hangman"+missCount+".png";
		  	} 
			
		 if (missCount === 11){
		 	hitCount = "bug";
		 	win = document.getElementById("win");
		 		win.innerHTML= ("Voldemort Killed You, Avada Kedavra!");
		 		playAudio(ron);
		 		setTimeout(endMiss, 2500);
		 }
		}
	}
}

		function endMiss(){
			document.getElementById("misses").innerHTML="Wrong Letters: ";
			letterCount = [];
			missCount = 0;
			guessesLeft = 11;
			hitCount = 0;
			guessCount = 0;
			document.getElementById("guessesLeft").innerHTML = ("Remaining Guesses: " + guessesLeft);
		document.getElementById("letterSpot").innerHTML="";
		document.getElementById("hangman");
		  	hangman.src = "Assets/Images/hangman"+0+".png";
		selectWord();
		showLetterCount();
	}
		
		function endHit(){
			CorrectWordCt++
			letterCount = [];
			missCount = 0;
			guessCount = 0;
			hitCount = 0;
			guessesLeft = 11;

			document.getElementById("guessesLeft").innerHTML = ("Remaining Guesses: " + guessesLeft);
		document.getElementById("letterSpot").innerHTML="";
		document.getElementById("wordsSolved").innerHTML=("Number of words solved correctly: " + correctWordCount);
		document.getElementById("hangman");
		  	hangman.src = "Assets/Images/hangman"+0+".png";
		selectWord();
		showLetterCount();
	}
		
function start(){
	selectWord();
	showLetterCount();
}
window.onload = start;




