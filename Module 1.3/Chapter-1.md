
# Async vs Sync

## Syncronous code 

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

## Asynchronous code

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

# Advantages and disadvantages 