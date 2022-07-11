# Week 2 Day1 Assignment 1 
## Theory Questions :
<br>

### **1.What is Javascript ?**

JavaScript or JS is a Programming Language which is one of the core technologies of the World Wide Web, along with HTML and CSS. More than 95% of modern web sites use JavaScript on the client side to provide functionality to the website.

### **2.What is the difference between let and var?**
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.
```javascript
//example of var
console.log(x);
var x=5;
console.log(x); 

// Output :
//   Undefined
//   5
//--------------------------------
//example of let
console.log(x);
let x=5;
console.log(x);

// Output:
//   Error
```
### **3.What is the use of JavaScript in Web Browsers?**
JavaScript is commonly used for creating web pages. It allows us to add dynamic behavior to the webpage and add special effects to the webpage. On websites, it is mainly used for validation purposes. JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.

### **4.What are Objects?**
A javaScript object is an entity having state and behavior (properties and method). Everything in javascript is an object. Objects can be created using the Object() constructor.
```javascript
//sample object
const person = {
  name: "John Doe",
  age: 52,
  jobStatus: "Retired",
};
```

### **5.What is an Array and how is it different from an Object in JavaScript?**
An array is a special variable, that can hold more than one value. In Programming languages such as C++, Java,etc. Arrays are generally collection of similar types of data. Arrays in JS are also objects.

* Arrays in JS are resizable and can contain a mix of different data types.
* JS arrays are not associative arrays.
* Arrays in JS are zero-indexed.
```javascript
const exampleArr = new Array("This", "is", "an", "example");
```

### **6.What is a function?**
A function is a block of code that is designed to perform a specific task. The usage of a function also helps in re-use of code rather than writing it each time we need to use it.
```javascript
function prod(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```
### **7.How can we implement call by value and call by reference in Javascript?**
In call by value the original variable is not modified on changes in other variables.
```javascript
//by value
var a = 5;
var b;
b = a;
a = 3;
console.log(a);
console.log(b);

//output :
//  3
//  5
//“b” was just a copy of “a”. It has its own space in memory. When we change “a” it does not have any impact on the value of “b”. 
```
In call by referance the original variable gets modified on changes in other variables.
```javascript
var c = { greeting : 'Welcome' };
var d;
d = c;
  
// Mutating the value of c
c.greeting = 'Welcome here';
console.log(c);
console.log(d);

//output :
//  {greeting: "Welecome here"}
//  {greeting: "Welecome here"}
//Over here, when we set d=c, “d” points to the same location in memory where “c” does. At first, we have a name-value pair stored in “c”. Now when we change a property using “c”, it changes the property in “d” also because both point to the same object. Changes in one it affects.
```

### **9.What are primitive data types in JS?**
A primitive data type is a data type that is not an object and has no methods or properties. There are 7 primitive data types in JS: string, number, bigint, boolean, undefined, symbol and null.

### **10.What is DOM ?**
DOM stands for Document Object Model, with the help of DOM, JavScript can access and change all the elements of a HTML document. It is constructed as a tree of Objects.
With the object model, JavaSript gets all the power it needs to create dynamic web pages.

### **11.Why do we need DOM?**
HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM).

## Programs:
### *1.Average of array nums in JS.*
```javascript
const findArrayAvg = (arr) => {
  let arrSum = 0;
  arr.forEach((num) => {
    arrSum += num;
  });

  let arrLen = arr.length;
  return arrSum / arrLen;
};

const sampleArr = [10, 12, 14, 14, 22, 25, 31, 29, 12];
console.log(findArrayAvg(sampleArr));
```

### *2.Swap variables using reference.*
```javascript
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
```

### *3.Print the fibonacci sequence.*
```javascript
function printFibonacciSequence() {
  let inputNum = parseInt(prompt("Enter a number: "));
  let a = 0,
    b = 1;
  let nextVal;
  for (let i = 1; i <= inputNum; i++) {
    console.log(a);
    nextVal = a + b;
    a = b;
    b = nextVal;
  }
}

console.log("Fibonacci sequence: ");
printFibonacciSequence();
```

### *4.Sort an array in both ascending order and descending order.*
```javascript

//in ascending order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//in descending order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
```

### *5.Show a variable value in an HTML webpage using DOM.*
```html
<div class="content">
  Slim
  <span id="edits"> </span>
</div>
```
```javascript
const editableSpan = document.getElementById("edits");
const nameToInsert = "Hello";
editableSpan.innerHTML = `${nameToInsert}`;
```

