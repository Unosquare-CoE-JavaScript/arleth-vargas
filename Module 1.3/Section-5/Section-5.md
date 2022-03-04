# Async Await

This simplifies promises, looks like a regular asynchronous code.

Async is kind of listening to the promises until that is resolven then we can continue. 

```javascript
const asyncFunc = async function(){
    let p1 = await asyncFunction();
    console.log(p1);
    console.log(`${p1}-more info`)
}
asyncFunc();
```
In summary, we use **asyn** to define **wait** to pause until the promise is resolved. 