"use strict";

// this function can take its ime to complete and we have code
// remaining this function. 
const massiveProcess = function(num) {
    return new Promise(function(resolve, reject) {
        if (isNaN(num)) {
            reject("Please enter a number!");
        } else {
            let result = 0;
            //We can also use setTimeout in order to print the last console.log without
            // blocking it.
            setTimeout(function() {
                // here we are making some operations that can take a time to be processed. 
                for (let i = num ** 7; i >= 0; i--) {        
                    result += Math.atan(i) * Math.tan(i);
                };
                resolve(result);
            }, 0);
        }
    });
};

// this promise is handling the diaplay of the number
massiveProcess(10)
    .then(function(amt) {
        console.log("The number is: " + amt);
    })
    .catch(function(msg) {
        console.error(msg);
    });



//This is now being displayed before the previous function and it is not being blocked
console.log(5 * 5 + 100);