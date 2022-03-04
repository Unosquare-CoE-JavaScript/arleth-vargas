# Understanding Asynchronous coding

## Async vs Sync

### Syncronous code 

Syncronous code is the "Default" this is one pice of code executing then the other pieces start executing after the first one was executed.

```javascript

function greeting(name){
    alert("hello!")
}

greeting("arleth");
greeting("juan");

```

The first alert will be displayed but not dissapear until we accept it.

The second alert wont appear because that is waiting the first piece of code to be executed and then it will be esecuted. 

### Asynchronous code

But if we want to make our code more performing then we can use asynchonous code. In this case the second piece of code wont be blocked by the first one.


```javascript 
const message = function() {
    setTimeout(function(){
        console.log("hello everyone!")
    }, 10)
}

const message2 = function() {
    console.log("Hello world!")
}

message();
message2();
```

In this example the first piece will start and there is a time interval until the message appear, but while that time is running we will still receive the second piede of code and the second message will appear first. 

## Advantages and disadvantages 

Sync: 
- Easy to wwrite (this is the first we learn when we learn to write code)
- Can block code, less performant

Async : 

- Faster that sync but can be difficult to understand. 

## The event loop

It is important for callbacks b ecause it is always litening to the messages it is receiving and makes sure that all code is handled. It can execute messages by priority, it has a queue that controls that the code was executed. 
This is key in making thing async. It allows JS to do other things while executing queue. 


## Quiz 

1. True or False, synchronous code is easier to reason about and write. **true**
2. What JavaScript feature facilitates asynchronous coding in JavaScript? **Async callbacks**
3. Which of the following is an advantage of asynchronous coding? **Most peformant**
4. Which of the following is an advantage of synchronous coding? **Is the easiest to understand**
5. What is the minimum number of milliseconds you can use with setTimeout? **0 is allowed but 10 is used to have compatiibility in most brosers**
https://stackoverflow.com/questions/9647215/what-is-minimum-millisecond-value-of-settimeout
6. What is the first parameter for the setTimeout function? **Callback**