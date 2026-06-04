// Assigning Grades to students
let marks = 85;
let grade;

if (marks>=90 && marks<=100){
    grade="A+";
}
else if (marks>=80 && marks<90){
    grade="A";
}
else if (marks>=70 && marks<80){
    grade="B+";
}
else if (marks>=60 && marks<70){
    grade="B";
}
else if (marks>=50 && marks<60){
    grade="C+";
}
else if (marks>=40 && marks<50){
    grade="C";
}
else if (marks>=30 && marks<40){
    grade="D";
}
else{
    grade="F";
}

console.log("Marks of student = ",marks);
console.log("Grade based upon given marks = ",grade);