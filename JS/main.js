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

	for( var i = 1; i <= 100; i++ )
	
	{ 
		if ( i%3 === 0 && i%5 === 0 )
		{
			console.log( i + "FizzBuzz");
		}
			else if ( i%3 === 0)
		{ 
			console.log( i + "Fizz");
		}
			else if (i%5 === 0)\
		{
			console.log( i + "Buzz");
		}
			else
		{
			console.log(i);
		}
			
				
		 
	
	}

	
	
	
	
}
	
	
	

	
