function test1(){

	var fName = prompt("Hey what's your name?");	
	var mycolour = prompt("pick a colour, " + fName)

	if(mycolour == "red"){


		console.log("ha. You like red");
	}
	else if(mycolour == "green"){
		console.log("ha. Green hes alright.");
	}
	else if(mycolour == "yellow"){
		console.log("get him something yellow");
	}
	else {
		console.log("thats not a colour")
	}
}

function test2(){
	
	var age = prompt("What is your age?");
	
	if(age < 14) {
		alert("That's not too old");

	}

	else if(age == 14){
		alert("14 is a good age");

	}

	else if(age > 14){
		alert("You're older than i thought");

	}

	else{
		alert("Not a valid age");

	}

}




function loop1(){
	
	var i = 1

	for( var i = 1; i <= 100; i++ )
	
	{ 
		if ( i%3 === 0 && i%5 === 0 )
		{
			console.log( "FizzBuzz");
		}
			else if ( i%3 === 0)
		{ 
			console.log( "Fizz");
		}
			else if (i%5 === 0)
		{
			console.log( "Buzz");
		}
			else
		{
			console.log(i);
		}
			
				
		 
	
	}
}


function loop2(){

	var x,y,chr;
	for(x=1; x <=6; x++)
	{
   	for (y=1; y < x; y++)
     	{
    	chr=chr+("*");        
      	}
 	console.log(chr);
 	chr='';    
	}
	    11 
	    
}






function yourGuess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");
    if (guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}
    
function showNumberToGuess() {
       if (document.getElementById('cheat').checked) {
        document.getElementById('numberToGuess').value = numToGuess;
        document.getElementById('cheatShow').style.display = 'inline';
    } else {
        document.getElementById('numberToGuess').value = '';
        document.getElementById('cheatShow').style.display = 'none';
    }
}

function generateNumberToGuess(confirmIt) {
    var guesses = document.getElementById("output");
   
    if (confirmIt && !confirm('Restart game with new number?')) {
        return;
    }
    
    guesses.value = '';
    numToGuess = Math.floor(Math.random()*500);
    guesses.value = "New number generated.\n";
    document.getElementById('numberToGuess').value = '';
    document.getElementById('cheatShow').style.display = 'none';
}

function showGuesses(){
    var guesses = document.getElementById('guesses');
    var btn = document.getElementById('showguesses');
    
    if (guesses.style.display != 'block') {
        guesses.style.display = 'block';
        btn.value = 'Hide My Guesses';
    } else {
        guesses.style.display = 'none';
        btn.value = 'Show My Guesses';
    }
}

window.onload = function(){
    generateNumberToGuess();
}


}
	
	
	

	
