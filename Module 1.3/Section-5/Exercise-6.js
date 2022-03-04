"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

// this should be sent as the body of the TODO to be created
let todoJSONBody = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

let createTODO = async function(todo) {
    try {
        // This endpoind is in charge to receive the todo and we are using method POST tocreaste a new one
        await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
    } catch(e) {
        console.error(`Unable to create todo ${e}`);
    }
};

createTODO(todoJSONBody);
