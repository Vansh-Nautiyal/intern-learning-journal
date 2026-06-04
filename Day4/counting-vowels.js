function countVowels(string){
    let vowels = ['a','e','i','o','u'] 
    let count = 0;   
    for (i=0;i<string.length;i++){
        if (vowels.includes(string[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

function reverseStr(string){
    let reversed = " "
    for (i=string.length-1;i>=0;i--){
        reversed+=string[i];
    }
    return reversed;
}
let str = "JavAScript";
let revStr = reverseStr(str);
console.log(`Number of vowels in '${str}' is = ${countVowels(str)}`);
console.log(`Reversed String = ${revStr}`);