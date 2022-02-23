# Digging to the roots of js 

Here we are going to understand how the core of JS works. 

## Iteration

The iterator pattern is used to get the data from a source, onde chunk at once.

> Chunk is a piece of data, it can be an iten in an array for example. 

This is really hlpful if we want to get data and wedon't know the amount of items it can have, that is why we use loops to get one at time. For example, this is applied in QUERIES with SELECT. In order to continue iterating we can use *next* so the next call will bne executed.

Another mechanisn applied is the spread operator **(. . .)** that allows us to separate the items in a bunch of data. 

```javascript
var greeting = "Hello world!";
var chars = [ ...greeting ];
chars;
// [ "H", "e", "l", "l", "o", " ",
// "w", "o", "r", "l", "d", "!" ]
```

source: https://www.geeksforgeeks.org/javascript-spread-operator/

## Closure

> Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.

We can use closures to define the original scope of that function and extend it more. 

```javascript
function greeting(msg) {
return function who(name) {
console.log(`${ msg }, ${ name }!`);
};
}
var hello = greeting("Hello");
var howdy = greeting("Howdy");
hello("Kyle");
// Hello, Kyle!
howdy("Grant");
// Howdy, Grant!
```
As you can see in the previous example, the outter function *greeting* is executed first with the message parameter, then we use that function to call the inner function *who* and assine another parameter there. 

This is most common in asynchronous code. For example in callbacks:

> Callbacks are a simpler concept. A callback is basically where a function accepts another function as a parameter. At some point during execution the called function will execute the function passed as a parameter, this is a callback. Quite often the callback actually happens as an asynchronous event, in which case the called function may return without having executed the callback, that may happen later. 

```javascript 
function AlertThisLater(message, timeout)
 {
     function fn() { alert(message); }
     window.setTimeout(fn, timeout);
 }

 AlertThisLater("Hello, World!", 5000);
```

As you can see in the example above, a closure is containing a parameter called *message* but the inner function function **fn** will be executed some seconds after the outer function is executed, due to the time interval there, but it will still show the message received before. 

sources:
- https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.

- https://stackoverflow.com/questions/2070275/what-are-closures-and-callbacks

## this Keyboard

**This** is kind of diffetent in JavaScript from the other languajes. And it is stablished by the function that is calling to it. 

```javascript
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
```
In the example above, we can see that we are calling a value outside from the function using **this** but even if we are only calling the inner function, the value is still the same. 

sources:

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this

## Prototypes

Objects in JS apply prototypes. We can access them by adding a period in the object.

```javascript
var homework = {
topic: "JS"
};

console.log(homework.topic);
// JS
```

Sources:

- https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes