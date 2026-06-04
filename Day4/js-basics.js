// Basics of JavaScript
let num1 = 10, num2 = 20;  // number datatype 
let bool = true;  // boolean datatype

// console.log() is used to print any value to browser console
console.log("num1 + num2 = ",num1 + num2);
console.log(bool);

// Conditional statements

// if - else statements
let num3 = 25;
if (num3 % 2 == 0) {
    console.log("The number ", num3, " is even ");
}
else {
    console.log("The number ", num3, " is odd ");
}

// if - else-if - else statements
let num4 = -8;
console.log("Given number = ", num4);
if (num4 < 0) {
    console.log("The number is negative");
}
else if (num4 > 0) {
    console.log("The number is positive");
}
else {
    console.log("The number is zero.");
}

// Strings in JavaScript
let str = "Hello world"
console.log("\nGiven string = ",str);

// Traversing a string
for (i = 0; i < str.length; i++) {      // Using a for loop to print a string character by character
    console.log(str[i]);         // Accessing String using indexing
}

// Uppercase and lowercase
console.log("Uppercase = ",str.toLowerCase());
console.log("Uppercase = ",str.toUpperCase());

// Reversing a string
let reversed = " "
for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed String = ",reversed);


// Arrays in JavaScript
let arr = [1, 2, 3, 9, 5, 6];
console.log("\nGiven array : ",arr);
// Traversing Arrays
console.log("Elements in array are  : ");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Highest Value in array 
let max = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Largest element in the arry is : ", max);

// Adding element
arr.push(40);
console.log("Array after adding 40 : ");
console.log(arr);

// Removing last element
arr.pop();
console.log("Array after removing last element : ");
console.log(arr);