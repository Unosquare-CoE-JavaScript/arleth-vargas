"use strict";

//there we can present some errors when we have large numbers
// here we are getting number one by one and when we want to get more number we will need 
// to CONTINUE the generator
const fibonacci = function *(len, nums = [0,1]) {
    
    // storing first 2 positions
    let num1 = nums[0],
        num2 = nums[1],
        next,
        cnt = 2;

    while (cnt < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        cnt++;
        // pause and continue the sequence
        yield nums;
    }

    return nums;
};

var fib = fibonacci(1000);

// with fib.next(); we can get numbers one by one
// and ger many numbers in sequence, the array will be increasing everytime it re runs. 