// Promises

// using SWAPI

"use strict";

const swapi = function(num) {
    let url = "https://swapi.dev/api/people/";

    fetch(url + num + "/")
    .then(data => data.json())
    .then(obj => {
        console.log(obj);
        return fetch(obj.homeworld);
    })
    .then(hwdata => hwdata.json())
    .then(hwobj => console.log(hwobj));
};

//Converts the data into an object then we can get the list of data in that specific page
// So we can retrieve and format the data later

swapi(9);

console.log("Other commands!");