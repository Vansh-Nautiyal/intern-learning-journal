// If - Else Statement
console.log("Use of If-else statements \n\n")
// a) Checking even or odd
console.log("a) Checking even or odd : ");
let num1 = 10;
console.log("Given number = ", num1);
if (num1%2 == 0 ){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}

// b) Checking whether a number is positive, negative or zero
console.log("\nb) Checking whether a number is positive, negative or zero : ");
let num2 = -8;
console.log("Given number = ",num2);
if (num2<0){
    console.log("The number is negative");
}
else if (num2>0){
    console.log("The number is positive");
}
else{
    console.log("The number is zero.");
}

// c) Largest of three numbers 
console.log("\nc) Largest of three numbers : ")
let num3 = 8, num4 = 9, num5 = 10;
if (num3>num4){
    if (num3>num5){
        console.log("The largest number is = ",num3);
    }
    if (num4>num5){
        console.log("The greatest number is = ",num)
    }
}