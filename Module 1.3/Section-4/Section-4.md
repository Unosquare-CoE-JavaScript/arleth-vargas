# Promises

They provide asynchronous pattern that can be really helpfull to solve some issues that we have reported in callbacks.
> This is an object with properties and methods.

## Fetch 
This is a simple way to make HTTP requests, this is not part of JS itself.  

> Note. Check which broswers can use fetch. 
https://caniuse.com/fetch

## SWAPI

https://swapi.dev/ 

We are going to use this API because it has large amoun of data. 


## Finally 

Waits untill al promises are execurte and then it displays whatever is needed (it can be a callback) it will be displayed if the promises were run correctly or not, this can also have a catch but that won't doffer the result in finally. 


## Promise ALL

**Promise.all** this is working when all propises are resolved.

**Promise.allSettled** the psomises that this is handling are not necesary dependant on eachother, this will still work if some promisses were rejected or resolved. 

**Promise.any** returns a promise that runs as soon as ANY promise is resolved. 