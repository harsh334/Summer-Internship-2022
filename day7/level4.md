# Javascript quiz Level 4
## Theory :
### **1.What are anonymous functions in JavaScript?**
Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
```javascript
var greet = function () {
    console.log("Welcome!!");
};
```
### **2.Explain strict comparison and Abstract comparison in javascript?**
Triple equals(===) is called Strict Comparison Operator
Double equals(==) is called Abstract Comparison Operator.
The == operator does the type conversion of the operands before comparison, whereas the === operator compares the values as well as the data types of the operands

```javascript
console.log(3 == "3"); // true
console.log(3 === "3"); // false
```

### **3.Difference b/w arrow functions and regular functions?**
Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword.
```javascript
//regular function
let square = function(x){
return (x*x);
};
console.log(square(9));
```
```javascript
//arrow function
var square = (x) => {
	return (x*x);
};
console.log(square(9));
```
* syntax is different in both
* Arrow function do not have their own ```this``` but regular function have.
* Arguments objects are not available in arrow functions, but are available in regular functions.

###  **4.What is Hoisting in JavaScript?**
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

### **5.JavaScript is a garbage collected programming language, explain how?**
Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.

The majority of memory management issues occur when we try to release the allocated memory. The main concern that arises is the determination of unused memory resources. In case of the low-level languages where the developer has to manually decide when the memory is no longer needed, high-level languages such as JavaScript use an automated form of memory management known as Garbage Collection(GC).

### **6.Explain Shallow copy vs Deep copy in Javascript?**
Shallow Copy
* Shallow Copy stores the references of objects to the original memory address.   
* Shallow Copy reflects changes made to the new/copied object in the original object.
* Shallow copy is faster.
<br>
Deep Copy
<br>
* Deep copy stores copies of the object’s value.
* Deep copy doesn’t reflect changes made to the new/copied object in the original object.
* Deep copy is comparatively slower.

### **7.What is Object.freeze**
A frozen object is one which cannot be changed. Freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
```javascript
const obj1 = { property1: 'initial_data'};

const obj2 = Object.freeze(obj1);
obj2.property1 = 'new_data';
console.log(obj2.property1);
//output 
//"initial_data"
```
<br><br>
## Program :
### **1.Write a function that generates a random number between two ranges, -100 to 0 and800 - 900.**
```javascript
function radomnum(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num1 = radomnum(-100, 0);
const num2 = radomnum(800, 900);
console.log(num1);
console.log(num2);
```

