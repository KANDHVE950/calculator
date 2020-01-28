function getHistory() {
	return document.getElementById("history-value").innerHTML;
}
function printHistory(num) {
		document.getElementById("history-value").innerHTML = num;
} 
function getOutput() {
		let x = document.getElementById("output-value").innerHTML;
         return x;
}
function printOutput(num){
	if(num=="" || num=="*"){
		document.getElementById("output-value").innerHTML = num;
	}
	else{
		document.getElementById("output-value").innerHTML = GetformattedNumber(num);
	}
}
function GetformattedNumber(num) {
	var n = Number(num);
	value = n.toLocaleString("en");
	return value;
}
function ReverseNumberFormat(num){
	let x = Number(num.replace(/,/g,''));
	return x;
}
var x = getOutput();
console.log(x)

	
   

// addNumber();
// multiplynum();
//  function addNumber() {
// 	let firstNumber = prompt("Please provide the first number"); 
// 	let secondNumber = prompt("Please provide the second number"); 
// 	alert(Number(firstNumber) + Number(secondNumber));
// }
// function multiplynum() {
//     var firstNumber = prompt("Please provide the first number"); 
// 	var secondNumber = prompt("Please provide the second number"); 
// 	alert(Number(firstNumber) * Number(secondNumber));
// }
// var age;
// age = prompt("Enter Your Age");
// if(Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// }
// else if(Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else {
// 	alert("Powering On. Enjoy the ride!")
// // }
// var checkDriverAge =  function() {
// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }
// checkDriverAge();
// var age;
// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 	return "Sorry, you are too yound to drive this car. Powering off";
// } else if (Number(age) > 18) {
// 	return "Powering On. Enjoy the ride!";
// } else if (Number(age) === 18) {
// 	return "Congratulations on your first year of driving. Enjoy the ride!";
// }
// }
// console.log(checkDriverAge(19));
var number = document.getElementsByClassName("number");
var i;
var text = "";
for(i = 0; i<number.length; i++){
number[i].addEventListener('click' , function() {
	var output = ReverseNumberFormat(getOutput());
	if(output!=NaN){
		output = output + this.id;
		printOutput(output)
	}
})
}
var operator = document.getElementsByClassName("operator");
var i;
for(i = 0; i<operator.length; i++){
operator[i].addEventListener('click' , function() {
	if(this.id=="clear"){
		printOutput("")
		printHistory("")
	}
	else if(this.id="backspace"){
		var output = ReverseNumberFormat(getOutput()).toString();
		if(output){
			output = output.substr(0, output.length-1);
			printOutput(output)
		}
	}
	else{
		var output = getOutput();
		var history = getHistory();
		if(output!=""){
			output = ReverseNumberFormat(output);
			history = history + output;
			if(this.id=="="){
				var result = eval(history);
				printOutput(result);
			    printHistory("");
			}
			else{
				history = history + this.id;
				printHistory(history);
				printOutput("");
			}
		}
	}
})
}