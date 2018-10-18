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
