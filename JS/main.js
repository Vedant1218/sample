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


	
	
}

var unknownNumber = Math.round((Math.random() * 1000) + 1);
var guesses = 0;

function guessProcess() {
    var guess = document.getElementById("guess").value;
    guesses++;
    if (guesses <= 7) {
        if (guess == unknownNumber) {
            alert("correct");
        }
        if (unknownNumber < guess) {
            alert("Less than guess");
        }

        if (unknownNumber > guess) {
            alert("Greater than guess");
        }
    } else {
        alert("Max guesses");
    }
}

	
	
	

	
