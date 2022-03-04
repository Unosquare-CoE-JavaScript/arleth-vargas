// this is based on Exercise 2

var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
    */
    let p1 = fetch(url + 'posts/').then(response1 => response1.json()),
        p2 = fetch(url + 'comments/').then(response2 => response2.json()),
        p3 = fetch(url + 'todos/').then(response3 => response3.json());

    // this is going to be executed once ALL the promises above were executed with SUCCESS
    // P1,P2,P3 ARE THE PROMISSES THAT IS IS CONTROLLING

    // JIC in the that msg is an arrow function. 
    Promise.all([p1, p2, p3])
    .then(msg => {
        nsp.posts = msg[0];
        nsp.comments = msg[1];
        nsp.todos = msg[2];
        console.log("We have received the data!");
    })
    .catch(err => console.log(`Problem retrieving data: ${err}`));

    //already has values at this point
    return nsp;
})(MAINAPP || {});

/*
I am getting: 
MAINAPP : {
    comments: (500){...}
    posts: (100) {...}
    todos: (200) {...}
}
same as example 2
*/