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

var y = Math.floor(Math.random() * 1000) + 1;
var turns = 10;
var hint = 'Guess my number, 1-1000!';


function newGame(){
	y = Math.floor(Math.random() * 1000) + 1;
	turns = 10;
}

function GTN(){

	
while (turns > 0) {
  	var guess = prompt(hint +' You have ' + turns + ' guesses left.');
  	if (!guess) break;
  	guess = Number(guess);
 	 if (guess == y) {
    	document.write('<p>YOU WIN!</p>' +
      	'<p><img src="/images/photo/gold_trophy.jpg">');
   	 turns = 0;
	newGame();
  	} else {
    	hint = 'Nope.';
    	if (guess < y) hint += ' Too small!';
    	if (guess > y) hint += ' Too big!';
    	turns = turns - 1;
	}
	}
	else if (turns == 0){
	alert('The secret number was ' + y + '.');
	newGame();
	
	}


}
	
	
	

	
