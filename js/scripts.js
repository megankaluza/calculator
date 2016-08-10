//Business (back-end):

var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
var remainder = function(number1, number2) {
  return number1 % number2;
};
var BMI = function(weight, height) {
	return weight / height;
};
var tempC2F = function(celsius) {
	return celsius * 9 / 5 + 32 ;
};
var tempF2C = function(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
};
var converterG2L = function(gallons) {
	return gallons * 3.78541;
};
var converterL2G = function(liters) {
	return liters / 3.78541;
};

//User interface (front-end):

$(document).ready(function() {
	$("form#add").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#add1").val());
		var num2 = parseInt($("#add2").val());
		var result = add(num1, num2);
		$("#output").text(result);
	});
	$("form#sub").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#sub1").val());
		var num2 = parseInt($("#sub2").val());
		var result = subtract(num1, num2);
		$("#output").text(result);
	});
	$("form#mult").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#mult1").val());
		var num2 = parseInt($("#mult2").val());
		var result = multiply(num1, num2);
		$("#output").text(result);
	});
	$("form#div").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#div1").val());
		var num2 = parseInt($("#div2").val());
		var result = divide(num1, num2);
		$("#output").text(result);
	});
	$("form#bmi").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("#bmi1").val());
		var num2 = parseInt($("#bmi2").val());
		var result = BMI(num1, num2);
		$("#output").text(result);
	});
});
