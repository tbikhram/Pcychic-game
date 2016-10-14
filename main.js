//alert("you have 10 guesses. Guess 1-10");

//var answer = 3;
//var guess = prompt("whats you guess?");




//for(i =0; i<10; i++){
	
	//if(answer == guess ){

	//	alert("you guessed correct");
	//	break;
	//} else {
		//guess == prompt("please try again");
	//}
//}

//var name = "scott";

//function firstFunk(){
	//console.log('yo yo');
	//var name = "bill";
	//console.log("Name in function"+ name)
//}

//firstFunk();

//console.log(name);

// guessing game steps



var UserLetter = ["a", "b", "c","d","e", "f", "g","h","i", "j",
            "k","l","m", "n", "o","p","q", "r", "s","t","u", "v", "w","x","y","z"]; //prompt the user to pick a number 
var counter= 0;
var randomNumber;
var MaxTries = 10;
var userGuest=[];
var userInput;
var wins=[];
var losses=[];
// generate a random number and store it in a variable for later

var randomNumber= Math.floor(Math.random()*UserLetter) +1;

document.onkeyup = function() {
   userInput = String.fromCharCode(event.keyCode).toLowerCase();
   userGuess.push(userInput);
   // compare user input against the word solution, if correct then reveal the letter if incorrect then reduce guesses left by 1
   for (var j = 0; j < randomNumber.length; j++) {
       if (randomNumber.charAt(j) === userInput) {
           wins++;//wins.push(userInput);
           //hiddenWords.splice(j, 1, userInput);
      // } else if (randomNumber.charAt(j) !== userInput) {
           losses--;
       }
   }
   document.getElementById("wins").innerHTML = wins;
   alert(wins);
   //document.getElementById("").innerHTML = (hiddenWords.join(""));
  // document.getElementById("guesses-remaining").innerHTML = guessesLeft;












//Prompt user and ask them to guess a number between 1 and x



// check to see if number if correct

//while (Attempts != RandomNumber ) { 
//	var Attempts = prompt("Please pick a letter between 1 and " + UserLetter);
//	counter += 1;

//	if(counter > MaxTries) {
		
//		document.write("you have no more tries left. reload page");
//		break
//	}

//	if (Attempts == RandomNumber) {
//		document.write("you won!");
//		document.write("<p> The Randon number was" + RandomNumber + "</p>");
//		document.write("<p> it took you" + counter +"Attempts to to get the correct number </p>");
//	}
//}



//if number is wrong prompt the user and ask them to try to guess again. reap Until user gets the number correct or they have  used p all of their attemps



// if user guessed the correcct number , tell them what the number is, how many attempts it took them to get the right number, and thnak them for playing.



// program complete