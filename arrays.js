
// printReverse Function 
// prints all values in an array in reverse order
function printReverse(numbersArr){

	var nums = numbersArr.length -1;

	for(i = nums; i >= 0; i--){
		console.log(numbersArr[i]);
	}
}

//isUniform Function
//compares values in array for equal values

function isUniform(valueArray){

	var first = valueArray[0];

	for(i = 1; i < valueArray.length; i++){
		if(valueArray[i] !== first){
			return false;
		} 
	}	
	return true;
}

//sumArray function
//add all numbers in an array
function sumArray(sumNumbers){

	var total = 0;
//for loop
	// for(i=0; i< sumNumbers.length; i++){
	// 	total += sumNumbers[i];
	// }
	// return total;
//foreach loop
	sumNumbers.forEach(function(element){
		total += element;
	});
	return total;
}

//max function
//return largest number in array
function max(numbers){

	var largest = numbers[0];

	for(i=1; i < numbers.length; i++){;
		if(numbers[i] > largest){
			largest = numbers[i];
		}
	}
	return largest;

}

//myForEach
//handcoded function to perform forEach loops on Arrays

function myForEach(arr, func){
//l
	for( var i = 0; i < arr.length; i++){
		func(arr[i]);
	}
}

//function movieDataPrint 
//cycles through array, prints information on each movie within it. 

//sample variable with "database"
var movies = [
{
"title" : "The Matrix",
"rating" : 4.5,
"hasWatched" : true},
{
"title" : "The Matrix 2",
"rating" : 5.5,
"hasWatched" : false},
{
"title" : "The Notebook",
"rating" : 6,
"hasWatched" : false}

 ];

 function movieDataPrint(arr){
 	arr.forEach(function(element){
 		if(element.hasWatched){
 			console.log("You have watched " + element.title + " which is rated " + element.rating);
 		} else {
 			console.log("You have not watched " + element.title + " which is rated " + element.rating);
 
 		}}
 		);
 }
