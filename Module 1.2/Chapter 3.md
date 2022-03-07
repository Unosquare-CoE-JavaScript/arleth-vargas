# The Scope Chain

In summary what we have learned from previous chapters:

> The connections between scopes that are nested within other
scopes is called the scope chain, which determines the path
along which variables can be accessed.

## "lookup" is (Mostly) Conceptual

How can we determine which is a bucket and which is the marble? It can be determined from the compilation but **engine** doesn't need to look up through a bunch of scopes to figure out where is the variable comming from.

> Any reference to a variable that’s initially undeclared is left
as an uncolored marble during that file’s compilation; this
color cannot be determined until other relevant file(s) have
been compiled and the application runtime commences. That
deferred lookup will eventually resolve the color to whichever
scope the variable is found in (likely the global scope).

## Shadowsning

This is about the naming, it is very important in cases where there are two or more variables with same name. 

```javascript
var studentName = "Suzy";
function printStudent(studentName) {
    studentName = studentName.toUpperCase();
    console.log(studentName);
}
printStudent("Frank");
// FRANK
printStudent(studentName);
// SUZY
console.log(studentName);
// Suzy
```

As you can see, the *stundentName* is re-assigned but only impacts in the inner function and not in tne global. 

**Global Unshadowing Trick**

What would happen if the re assigned and original are called from same function? if we want to get the original value of the variable then we can use **window**

```javascript
var studentName = "Suzy";
function printStudent(studentName) {
console.log(studentName);
console.log(window.studentName);
}
printStudent("Frank");
// "Frank"
// "Suzy"
```

## Function Name Scope

A function declaration looks like this: 

```javascript
function askQuestion() {
// ..
}
```
 but we can also assignt he fucntion to a variable an return any value.


## Arrow Functions 

There us an aditional frunction expression that was added in ES6:

```JAVASCRIPT
var askQuestion = () => {
// ..
};
```

Here we can also define nested scope, this is also behaving same way, with buckets and marbles. 

## Backing Out

In any of the cases above, when a new function is defined, a new scope is created. Those scopes can have nested scopes and also can be part of a bigger one.


In summary, when we create a new function we have a new and clean scope that can re-assigne values that were declared in an outter function. An also the scope of certain variables depent on the type (var/const/let).