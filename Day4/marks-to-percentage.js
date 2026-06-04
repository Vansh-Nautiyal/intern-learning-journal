// Array of marks
let arr = [385,495,165,242,332]
console.log("Initial array of marks : ");
console.log(arr);

for (i=0; i<arr.length; i++){
    let marks = (arr[i]/500)*100;   // or simply (arr[i]/5)
    arr[i]=marks;
}
console.log("\nArray of marks as percentage :")
console.log(arr);