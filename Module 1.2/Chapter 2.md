# Illustrating Lexical Scope

We  have already read about the scopes but now we need to understand how the program is handled by JS engine. 

## Marbles, and buckets and bubbles... oh my!

The methaphore of bucket is about this:

- You have 3 marbles: green, blue and red.
- Put all of them in a yellow bucket, it doesn't mean that the marbles will  change their color but those belong to a bigger one. 

In JS, the buckets are functions and blocks.

``` javascript
// outer/global scope: RED
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
    ];
function getStudentName(studentID) {
    // function scope: BLUE
    for (let student of students) {
        // loop scope: GREEN
        if (student.id == studentID) {
        return student.name;
        }
    }
}

var nextStudent = getStudentName(73);
console.log(nextStudent); // Suzy

```
As you can see in the example above, the bucked would be all the code, and the marbles the functions that are there. These are determined in compilation, and there are also some sub-marbles for exampl the for loop in the function. 

And about accesses, you can access to students from any place in the file because that belongs to a **Global scope** but it that would have been declared in the function then it wouldn't be accessible. 

## A conversation among friends

This metaphore is about:

- Ypu were invited to a party, and there are many different group of friends with different conversations and you can listen or interact one by one but not all at the same time. 

In JS we have 3 main concepts: 

- **Engine** responsible of start and finish compilation and execution in JS programs.
  
- **Compiler** Parsing and code-generation.

- **Scope Manager**  Keeps the list of declared variables and enforces the set of rules as to how accessible are in the code.

Using the previous example, this is the steps that follows the app:

- Engine start compilation
- The compiler defines the valiables if those were not first defined. For example it starts with *students* 
- The scope manager starts declaring the variables that the compiler has found.

## Nested Scope

Do you remember the sub-marble in the first part of this file? Well that is what we call nested scope. 

In the example we are using the student name in the for loop and it has its own Scope Manager. 

