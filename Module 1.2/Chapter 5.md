# The (not so) Secret Lifecycle of Variables

A variable can be sighltly differetn dependyng on the place it is declared, on top, after funtion, etc. 

## When can I use a variable?

Interesting example: 

```javascript
greeting();
// Hello!
function greeting() {
    console.log("Hello!");
}
```

how is this possible? how can a function can be called in the top and declared in the bottom? it is hoisting. 

**Hoisting: Declaration vs. Expression**
In the example above we can see a formal declared function but it throws error when we declare it lioke thi:

```javascript
greeting();
// TypeError
var greeting = function greeting() {
console.log("Hello!");
};
```

In both cases hoisting is being aplied but in this case the function reference association is not handled in the inizialization. 

## Hoisting: Yet another metaphor

```JAVASCRIPT
var greeting; // hoisted declaration
greeting = "Hello!"; // the original line 1
console.log(greeting); // Hello!
greeting = "Howdy!"; // `var` is gone!
```
>The “rule” of the hoisting metaphor is that function declarations are hoisted first, then variables are hoisted immediately after all the functions.

## Re-declaration?

```javascript
var studentName = "Frank";
console.log(studentName); // Frank
var studentName;
console.log(studentName); // Frank <--- still!
// let's add the initialization explicitly
var studentName = undefined;
console.log(studentName); // undefined <--- see!?
```
As you can see in the previous example the re declaration is allowed, but in the following example using "let" this is throwing a *SyntaxError* and will no execute. 

```javascript
let studentName = "Frank";
console.log(studentName);
let studentName = "Suzy";
```

Because we are declaring *studentName* twice, this error will still occur with *var* because double declaration is not allowed.

**Constants?**

We can also declare using **const** and this is more constrained that **let**. This has to start with a value by default if not it will throw a *SyntaxError*

```javascript
const studentName = "Frank";
console.log(studentName);
// Frank
studentName = "Suzy"; // TypeError
```
Also, the value can't be re-declared cause it is a constant value. 

**Loops**

In some cases, when the value is declared within an scope, then it can be re declared, for example in loops: 

```javascript
var keepGoing = true;
while (keepGoing) {
    let value = Math.random();
    if (value > 0.5) {
        keepGoing = false;
    }
}
```

As you can see we are using **let** and the program will not throw any errors cause that variable belongs to the same scope. But same aas above, it cannot be a **const** value, because it will throw errors when trying to re assing a value inside a loop, even if they belong to the same scope. 

```javascript
for (const i = 0; i < 3; i++) {
// oops, this is going to fail with
// a Type Error after the first iteration
}
```

## Uninitialized Variables (aka, TDZ)

Temporal Dead Zone (TDZ), IS the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.

```JAVASCRIPT
{
 	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
	// This is the temporal dead zone for the age variable!
 	// This is the temporal dead zone for the age variable!
	let age = 25; // Whew, we got there! No more TDZ
	console.log(age);
}
```

Source:
- https://www.freecodecamp.org/news/what-is-the-temporal-dead-zone/

## Finally Initialized

We have reviewed the declaration of variables before, but what is the difference of declare and initialize?


> Declaring a variable means that we reserve the name in memory at current scope

```javascript
function scopeExample() {

    let age; // 1
    age = 20; // 2
    let hands = 2; // 3
}
```

> Initialize can be confused with assign a value to a variable but it actually starts when we have it declared and in the inicialization it can still be an undefined value. 