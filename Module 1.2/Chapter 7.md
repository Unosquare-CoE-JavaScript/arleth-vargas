# Using Closures

> Closure is one of the most important language characteristics ever invented in programming—it underlies major programming paradigms, including Functional Programming (FP), modules, and even a bit of class-oriented design. Getting comfortable with closure is required for mastering JS and effectively leveraging many important design patterns throughout your code.

## See the Closure

This is only aplicable in **functions** if not, closure does not apply.

```javascript 
let a = 4;
function myFunction() {
  return a * a;
}
```

Closures allows to access to outer variables even after the scope was defined. 

**Pointed Closure**
In arrow functions ca also hold closures, because they can stablish their own scope too.

```javascript
var student = students.find(
    student =>
        // function scope: ORANGE(4)
        student.id == studentID
);
```

## The Closure Lifecycle and Garbage Collection (GC)

In case we have many functions closed oved the same variable, this will ignore the ones that are not currantly using it and in this sense it becomes a Garbage Collecto (GC). 

It foloows a serie of steps; 
- Keep the useful memory. 
- Use it (reading or writing)
- Set the memory free once it was used. 

```javascript
var n = 123; // reserve memory for a number
var s = "azerty"; // allocate memory for a string

var o = {
  a: 1,
  b: null
}; // allocates memory for an object and the values ​​it contains 

// (object-like) allocates memory for the array and the values ​​it contains
var a = [1, null, "abra"];

function f(a){
  return a + 2;
} // allocate memory for a function (which is an object)

// function expressions also allocate memory for an object
someElement.addEventListener('click', function(){
  someElement.style.backgroundColor = 'blue';
}, false);
```

## An Alternative Perspective

> Closure is the link-association that connects that function to the scope/variables outside of itself, no matter where that function goes.

In summary, closure is observed when a function uses variable(s) from outer scope(s) even while running in a scope where those variable(s) wouldn’t be accessible.