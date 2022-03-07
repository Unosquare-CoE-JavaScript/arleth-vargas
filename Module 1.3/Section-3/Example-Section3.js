// The Necessity of Callbacks


let students = [{name:"Mary",score:90,school:"East"},
{name:"James",score:100,school:"East"},
{name:"Steve",score:40,school:"East"},
{name:"Gabe",score:90,school:"West"},
{name:"Rachel",score:85,school:"East"},
{name:"Rochelle",score:95,school:"West"},
{name:"Lynette",score:75,school:"East"}];


// since we want to make changes many times this is using callbacks
// here we are only getting students that are part of east
let processStudents = function(data, callback) {
    for (let i = 0; i < data.length; i++) {
      //converts it to lower case
        if (data[i].school.toLowerCase() === "east") {
            if (typeof callback === "function") {
                callback(data[i]);
            }
        }
    }
}

// we want to see if a student passed or not 
// (only working for the east students)
processStudents(students, function(obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed!");
    }
});
// returns only 4 students all of them from east and with scores more that 60
console.log("End of processStudents");

let determineTotal = function() {
    let total = 0,
        count = 0;
    // gets all east students (in total 5 students)
    processStudents(students, function(obj) {
        total = total + obj.score;
        count++;
    });

    console.log("Total Score: " + total + " - Total Count: " + count);
}

determineTotal();

//if we had a long list of students this can appear before the previous code is executed
console.log("more code that is not blocked");