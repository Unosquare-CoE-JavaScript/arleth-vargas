# Making use of generartors

A generator is way to write code and make it work for a time contioniously. (over and over again) like re entering to that function. 
We will use PASS or YIELD. 

```JAVASCRIPT
"use strict";

// WE USE ASTERISK TO MAKE IT A GENERATOR

function *genTest() {
    let x = 0;
    console.log('start');
    // this pauses at this pont and it is waiting to continue
    yield ++x;
    console.log(x);
    x++;
    console.log(x);
    yield x++;
    console.log('end');
    return x;
};

//here we invoke generator
// we will be able to move to the next method to make it work
let gen = genTest();

gen:

// this is making the generator to continue
let val = gen.next()
```


## Iterators

This is another way to impement access to data. 

```javascript
"use strict";

let arr = ['a', 'b', 'c', 'd'];

let it = arr[Symbol.iterator]();

it.next();
// get a
it.next();
// get b

. . .
```
This is still working as genratios, the only difference is that we dont have the YIELD keyboard, but it is more than that. 

This looks similar to generators, right? BUT in large amount of data we can see a difference. 
In generators we hae to load the entire collection to loop it and in iterators we only need to know the current possition. 

In summary, both seems to do the same job and are really importan to develop some feature and we can use the correct one according to the project needs. 