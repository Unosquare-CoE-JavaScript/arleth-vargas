#   The Necessity of Callbacks

## Understanding Callbacks
They are the traditional way to use asynchronous functions. It pases a function into another function and the one that is in the call back is executes after something happens.

```javascript
let logCall = function(){
    console.log('this is a callback, functiomn was called back')
}

//this makes the code asynchronous
setTimeout(logCall, 3000);
// after 3 sec it calls back to the function
```
This can also be applied to buttons (for example) and also control the events using callbacks. 


Asynchronous code is also helpful when we make calls to an AAPI and the reponse takes too long, in this case the rest of the code won't be delayed.


## Problems with JS Callbacks

This can have problems if we depend on calls to another server, API,etc and rely all the code there will bring us problems when using asynchronous calls. For these issues we can use promises. 