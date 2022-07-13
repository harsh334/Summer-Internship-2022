# Typescript Quiz (level 1)
## Theory :
### **1.What are the basic data types in TypeScript?**
Basic data types in Typescript are Number,Boolean,String,Null,Void,Undefined and Any.

### **2.What is Generic data type.**
Generic types allow us to write a general class (or method) that works with different types, allowing code to re-use.



### **3.What is type inferring in TS.**
TypeScript infers types of variables when there is no explicit information available in the form of type annotations. For example
```javascript
var a = "some text"
```
Here, since we are not explicitly defining a: string with a type annotation, TypeScript infers the type of the variable based on the value assigned to the variable. The value of a is a string and hence the type of a is inferred as string.
### **4.What are the possible ways to define typing for functions.**
There are multiple ways to define types for functions:
* _Method Signatures:_<br>
When defining an object type, its methods can easily be described by providing signatures as follows:
```javascript
interface Date {
  toString(): string;
  setTime(time: number): number;
}
```
* _Function Type Literals:_
```javascript
interface Array<R> {
  sort(compareFn?: (a: R, b: R) => number): this;
}
```
* _Object Type Literals With Call or Construct Signatures:_
```javascript
interface RegExpConstructor {
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;
}
```

### **5.How to define Generic type for Classes.**
To do this we can use the generic type parameter in '< >' brackets. For Example :
```javascript
class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KayValuePair<string, string>();
kvp2.SetKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill
```

## Program :
### **Define the types in TypeScript for the given following JavaScript code.**
```var todos = [];
function add(name, description) {
  return todos.push({ name: name, description: description, done: false });
}
function remove(index) {
  return todos.splice(index, 1);
}
function list() {
  todos.forEach(function (todo, index) {
    console.log(index + " -" + todo.name);
  });
}
function update(index, name, description) {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
```
Answer :
```javascript
class Entry {
  name: string;
  description: string;
  done: boolean;
}

var todos: Entry[] = [];

function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false,
  });
}

function remove(index: number): Entry[] {
  return todos.splice(index, 1);
}

function list(): void {
  todos.forEach(function (todo: Entry, index: number) {
    console.log(index + " - " + todo.name);
  });
}

function update(index: number, name: string, description: string): Entry {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}

console.log(add("Go to Gym", "Do some wokout"));        // 1
list();        // 0 - Go to Gym
```