# Limiting Scope Exposure

Here we are going to learn about the levels of scope and why it is important to identify them. 

## Least Exposure

> Software engineering articulates a fundamental discipline, typically applied to software security, called “The Principle of Least Privilege” (POLP).   And a variation of this principle
that applies to our current discussion is typically labeled as “Least Exposure” (POLE).

Then we should be able to recognize where should all our varibles should be places, this is not a good idea to keep them as global variables (in the global scope) because: 

- Naming collisions, in big probrams we can have the same name but used in defferent cntext for example in loops we use **i** most of the times to assign it to a variable. 

- Unexpected behavior, if we have an array of names in the top level and someone adds new code updating that array then the previous function aded for that array will differ and the last result will not be an expected behavior. 

- Unintended dependency, this may be a concern when we try to fix bugs but instead of updating a piede of code we would have to update everything if the variable is being used elsewhere. 

## Hiding in Plain (Function) Scope

After reviewing the posible errors that it could cause (having only global variables), we have to understant how and where we should declare them. 
First we have to define a global/medium scope, and make sure that variables can be useful in a certain scope than in global. 

```javascript
// outer/global scope
function hideTheCache() {
    // "middle scope", where we hide `cache`
    var cache = {};
    return factorial;
    // **********************
    function factorial(x) {
        // inner scope
        if (x < 2) return 1;
        if (!(x in cache)) {
        cache[x] = x * factorial(x - 1);
    }
    return cache[x];
    }
}
var factorial = hideTheCache();
factorial(6);
// 720
factorial(7);
// 5040
```

As you can see in the example above, we are declaring varibles inside the function *hideTheCache* but we have another variable in *factorial*, in this case the result will the returned from the inner function but we didn't needed to declare values in the outter function to make it work, because each function has its own work to do and we cannot mix their values. 

**Function Boundaries**
In the previous example we can see that we have the *return* property at different levels. In some cases those are wrapping another function:

> An IIFE is probably not the
best approach. In that case, you might look to create the scope
with a block instead of a function.

## Scoping with blocks

In general, we are used to group functions and call them block when they are bretween braces **{ . . . }** this can be used by functions, classes and objects. 

But they can behabe kind of different in **var** and **let** buckets. 

**VAR**

```JAVASCRIPT
function diff(x,y) {
    if (x > y) {
        var tmp = x; // `tmp` is function-scoped
        x = y;
        y = tmp;
    }
    return y - x;
}
```
In the example above, var is inside a block but as a recommendation *var* should be reserved for top-vele scope of a function. 

**LET**

This can be declared in inner functions, and will bihave dsame way as var. Both can be combined also depending on the context and best approach for the project. 

## Function Declarations in Blocks (FIB)

> Using let or const are
block-scoped, and var declarations are function-scoped.

What would happen to functions that were declare inside a block (loop)?
```javascript
if (false) {
    function ask() {
        console.log("Does this run?");
    }
}
ask();
```
This should throw an error because the function in not accessible from outtaside the loop. But this is kind of tricky since this behave certain ways in many browsers and engines. However, FiB is not worth it, and should be avoided.