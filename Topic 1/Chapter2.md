# Surveting JS

Something interesting in JS is that each standalone file is its own separate program (which is not common in a web application since they manage each application as a program). In some cases we can apply some tools to hndle different files as one in JS. 

> In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes. In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

In order to use modules from another JS file, we can import the with `import` or `<script type=module>`

## Values

"Values are data" and come in two forms:

### **Primitive** 
Can be a single string, number, etc. those are embebbed in programs using literals.

Incase we want to **interpolate** any value to a string, we can use 

>\`Hello, my name is ${firstname} `

**Symbol** are most used in objects as special keys for internal/private use.

``` javascript
const NAME = Symbol()
const person = {
  [NAME]: 'Arleth'
}

person[NAME] //'Arleth'

const RUN = Symbol()
person[RUN] = () => 'Person is running'
console.log(person[RUN]()) //'Person is running'
```

### **Object**

Arrays and objects, can hold any type of value. To access to those values we can use **keys**. 

``` javascript
// Object
person = {
    name: "Arleth",
    lastname: "Vargas"
}

console.log(`Hello, my name is ${person.name}`)

//Array
people = ["Juan", "Arleth", "Julia"]

console.log(`Hello, my name is ${people[1]}`)
```

### **Declaring and using variables**

> The **var** keyword declares a variable to be used in that part of
the program, and optionally allows initial value assignment.

>The **let** keyword has some differences to var, with the most
obvious being that let allows a more limited access to the
variable than var.

This is block-scoping, when we try to access to a value that is in a function, it works with *var* but not with *let*. 

``` javascript
var adult = true;
if (adult) {
var name = "Kyle";
let age = 39;
console.log("Shhh, this is a secret!");
}
console.log(name);
// Kyle
console.log(age);
// Error!
```

>A third declaration form is const. It’s like let but has an
additional limitation that it must be given a value at the
moment it’s declared, and cannot be re-assigned a different
value later.

### **Functions**

The most common declaration:

``` javascript
function addToCart(item){
    ...
    return cart;
}
``` 

But we can also assign it to a variable:

``` javascript
var cart = function(item){
    ...
    return listOfItems;
}
``` 
Also, if we want to return different values for differnt context, w can wrap them in a single function. 

``` javascript
var message = {
    login(name){
        console.log(`Welcome ${name}!`);
    },
    logout(name){
        console.log(`Bye! ${name}`);
    }
}

message.login("Arleth");
// Welcome Arleth!
``` 
### **Comparisons**

Small comment, javascript and comparisons are interesting because it can compare strings, number and still are equal **but** everything changes with === which also compare the "type" (only available for non primitives). This is what happens with objects: 

``` javascript
[ 1, 2, 3 ] === [ 1, 2, 3 ]; // false
{ a: 42 } === { a: 42 } // false
(x => x * 2) === (x => x * 2) // false
```

Because JS does not define === as structuraql equality, in this cases we can compare arrays or object values with a loop.

### **How we organize in JS**

With two patters: data and behavior. But that is not mandatory, in some projects are applied both or none. 

**Classes**

It defines how a data structure works and can be instanciated many times. 

``` javascript
class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100
```

**What is boxing?**

Boxing is wrapping a primitive value in an Object. When you treat a primitive type like if it were an object, e.g., calling to the toLowerCase function, JavaScript would wrap the primitive type into the corresponding object. This new object is then linked to the related built-in <.prototype>, so you can use prototype methods on primitive types. 

### **Class inheritance**

In order to get the behavior of another function into a new function we can use `extends`

### **Modules**

It works like the clases (we can access to certain functionality of another module from a new one). 