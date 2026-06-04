# Introduction to JavaScript

JavaScript (JS) is a high-level, interpreted programming language used to make web pages interactive and dynamic. While HTML provides the structure of a webpage and CSS handles its styling, JavaScript adds functionality such as form validation, animations, dynamic content updates, calculations, and user interactions. It is one of the core technologies of web development and is supported by all modern web browsers.

JavaScript can be written directly inside an HTML document using the `<script>` tag or in separate `.js` files that are linked to HTML pages.

```javascript
console.log("Hello, World!");
```

The above statement displays the text "Hello, World!" in the browser console.

---

## Variables (`let`, `const`, `var`)

Variables are used to store data that can be used and manipulated throughout a program. JavaScript provides three ways to declare variables: `var`, `let`, and `const`.

The `var` keyword was used in older versions of JavaScript. It allows variables to be redeclared and updated, but its function-scoped behavior can sometimes lead to unexpected results.

```javascript
var name = "Vansh";
```

The `let` keyword was introduced in ES6 and is preferred for variables whose values may change later. It is block-scoped, making programs easier to manage.

```javascript
let age = 20;
age = 21;
```

The `const` keyword is used for values that should not be reassigned after declaration. It is also block-scoped.

```javascript
const pi = 3.14159;
```

### Difference Between `var`, `let`, and `const`

| Feature       | var      | let   | const |
| ------------- | -------- | ----- | ----- |
| Scope         | Function | Block | Block |
| Reassignment  | Yes      | Yes   | No    |
| Redeclaration | Yes      | No    | No    |

---

## JavaScript Data Types

Data types define the kind of value stored in a variable. JavaScript is a dynamically typed language, meaning variable types are determined automatically at runtime.

The main primitive data types are:

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol

Examples:

```javascript
let name = "Vansh";       // String
let age = 20;            // Number
let isStudent = true;    // Boolean
let x;                   // Undefined
let y = null;            // Null
```

JavaScript also provides a non-primitive data type called **Object**, which is used to store collections of related data.

```javascript
let student = {
    name: "Vansh",
    age: 20
};
```

---

## Type Conversion

Type conversion refers to changing a value from one data type to another.

JavaScript performs type conversion in two ways:

### Implicit Conversion

JavaScript automatically converts types when needed.

```javascript
let result = "5" + 2;
console.log(result);
```

Output:

```text
52
```

The number `2` is automatically converted into a string.

### Explicit Conversion

The programmer manually converts values.

```javascript
let num = Number("25");
let str = String(100);
let bool = Boolean(1);
```

Common conversion functions include:

* `Number()`
* `String()`
* `Boolean()`

---

## Strings

A string is a sequence of characters enclosed in single quotes, double quotes, or backticks.

```javascript
let name = "JavaScript";
let city = 'Delhi';
```

Strings are commonly used to store names, messages, addresses, and textual information.

JavaScript also supports template literals using backticks.

```javascript
let name = "Vansh";
console.log(`Hello ${name}`);
```

Output:

```text
Hello Vansh
```

---

## String Methods

JavaScript provides many built-in methods for manipulating strings.

### `length`

Returns the number of characters.

```javascript
let str = "JavaScript";
console.log(str.length);
```

### `toUpperCase()`

Converts text to uppercase.

```javascript
console.log(str.toUpperCase());
```

### `toLowerCase()`

Converts text to lowercase.

```javascript
console.log(str.toLowerCase());
```

### `charAt()`

Returns the character at a specified index.

```javascript
console.log(str.charAt(0));
```

### `includes()`

Checks whether a substring exists.

```javascript
console.log(str.includes("Script"));
```

### `slice()`

Extracts part of a string.

```javascript
console.log(str.slice(0,4));
```

---

## Arrays

An array is a collection of multiple values stored in a single variable. Each element is assigned an index starting from 0.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

Accessing array elements:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

Arrays can store different data types.

```javascript
let data = ["Vansh", 20, true];
```

## Array Operations

Arrays support various operations for adding, removing, and modifying elements.

### Adding Elements

```javascript
fruits.push("Orange");
```

Adds element at the end.

```javascript
fruits.unshift("Grapes");
```

Adds element at the beginning.

### Removing Elements

```javascript
fruits.pop();
```

Removes last element.

```javascript
fruits.shift();
```

Removes first element.

### Finding Length

```javascript
console.log(fruits.length);
```

### Accessing Elements

```javascript
console.log(fruits[1]);
```

---

## Operators

Operators are symbols used to perform operations on values and variables.

Examples:

```javascript
let a = 10;
let b = 5;
```

Arithmetic operators include:

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |
| %        | Modulus        |
| **       | Exponentiation |

```javascript
console.log(a + b);
console.log(a * b);
```

---

## Comparison Operators

Comparison operators compare values and return either `true` or `false`.

| Operator | Meaning               |
| -------- | --------------------- |
| ==       | Equal                 |
| ===      | Strict Equal          |
| !=       | Not Equal             |
| !==      | Strict Not Equal      |
| >        | Greater Than          |
| <        | Less Than             |
| >=       | Greater Than or Equal |
| <=       | Less Than or Equal    |

Example:

```javascript
let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);
```

Output:

```text
true
false
```

`===` compares both value and data type.

## Logical Operators

Logical operators combine multiple conditions.

### AND (`&&`)

Returns true only if both conditions are true.

```javascript
let age = 20;

console.log(age > 18 && age < 30);
```

### OR (`||`)

Returns true if at least one condition is true.

```javascript
console.log(age < 18 || age > 15);
```

### NOT (`!`)

Reverses a boolean value.

```javascript
console.log(!true);
```

---

## Conditional Statements (`if`, `else if`, `else`)

Conditional statements allow programs to make decisions based on conditions.

### if Statement

```javascript
let age = 20;

if(age >= 18){
    console.log("Eligible to vote");
}
```

### if-else Statement

```javascript
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
```

### if-else if-else

```javascript
let marks = 75;

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 70){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}
```

---

## Ternary Operator

The ternary operator provides a shorter way of writing simple if-else statements.

Syntax:

```javascript
condition ? expression1 : expression2
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

## Switch Statements

The switch statement is used when multiple conditions depend on the same variable.

```javascript
let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

The `break` statement prevents execution from continuing into the next case.
