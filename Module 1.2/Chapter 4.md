# Around the Global Scope 

We have mentioned it before, but what does **Global Scope**  exactly mean?

## Global This

We could define global varibles in the top of the program but we also have to know some concepts:

- **Window** All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object.Global functions are methods of the window object.
  
- **Self** is similar to **this**. This is refgerencing to the original value where the variable was created.

```javascript
const theGlobalScopeObject =
(typeof globalThis != "undefined") ? globalThis :
(typeof global != "undefined") ? global :
(typeof window != "undefined") ? window :
(typeof self != "undefined") ? self :
(new Function("return this"))();
```

In the exampleabove you will see how are those handled. 

## Globally Aware

In summary, Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program. Variables declared with var, let and const are quite similar when declared outside a block.