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


function _encryption(){



var encrypted_content= document.getElementById("newcontent"); 	

var _message = document.getElementById("encryption").value;

var _content = String(_message);                                 //turn text in text box into string

var replace1_content = _content.replace(/a/g,"w");               //replace all letter a's with w

var replace2_content = replace1_content.replace(/m/g, "k")       //replace all letter m's with k

var inner_content = replace2_content.split("");                  //breakdown letters into substrings



var reverse_inner_content = inner_content.reverse("");           //reverse the order of all letter

var connect_content = reverse_inner_content.join("");			 //turn substrings back in strings




encrypted_content.innerHTML = connect_content;					 //display encrypted  text






function _decryption(){

var decrypted_content= document.getElementById("oldcontent");

var _message = document.getElementById("decryption").value;

var _content = String(_message);                                //turn text in text box into string

var replace1_content = _content.replace(/w/g,"a");				 

var replace2_content = replace1_content.replace(/k/g, "m")		//undo the replacement of letter

var inner_content = replace2_content.split("");					//breakdown into substrings



var reverse_inner_content = inner_content.reverse("");			//put letters back into correct order

var connect_content = reverse_inner_content.join("");			//turn substrings into strings




decrypted_content.innerHTML = connect_content;					//display original text





function guessNum(){

	var guess = document.getElementById("guesses").value;

	var randomNum = Math.floor((Math.random() * 100) + 1);


}




	var guesstext = document.getElementById("guess_text");

	var chances = 0


	while(chances < 10){

			if(guess == randomNum){

				guesstext.innerHTML = "Congradulation! You guessed my number in "+ chances+"guesses";
				
			}

			else if(guess > randomNum){

				chances+=1;
				guesstext.innerHTML = "You have used " + chances +" guesses. Guess lower";
				
			}



			else if(guess < randomNum){

				chances+=1;		
				guesstext.innerHTML = "You have used " + chances +" guesses. Guess higher"
				
			}
			
			


	}



}



var guess = document.getElementById("Guess");
	

	

	var guesses = 0;

	var random_Num = Math.floor((Math.random() * 1000) + 1);
	




function numGuess(){



var guess_text = document.getElementById("guesstext");






}	

		
		if (guess == random_Num) {
			guess_text.innerHTML = ("Congratulations! You got me in " + (guesses) +" guesses")
			
		}



		else if (guess > random_Num){
			guesses++;
			guess_text.innerHTML = ("Guess is too high");
			
		}
		else if (guess < random_Num){
			guesses++;
			guess_text.innerHTML = ("Guess is too low");

		}
		
	}



	
	

	
