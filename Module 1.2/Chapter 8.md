# The Module Pattern 

This design pattern is one of the most importan patterns in Javascript, which is used to wrap variables and functions in a single scope. 

## Encapsulation and Least Exposure (POLE)

Thre is a new trend in front end programming to irganize applications around Component architecture. 
The main idea is to group and limit tghe scope of cerain functions, first we have to recognize whic are provate and public to define the scope or encapsulation. 

## What Is a Module?

> A module is a collection of related data and functions. A module is **stateful**.

**Namespaces (Stateless Grouping)**
```javascript 
// namespace, not module
var Utils = {
    cancelEvt(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();
    },
    wait(ms) {
        return new Promise(function c(res){
            setTimeout(res,ms);
        });
    },
    isValidEmail(email) {
        return /[^@]+@[^@.]+\.[^@.]+/.test(email);
    }
};
```
In the example abobe we have independient functions, gathering functionality is a **good practice**. 

**Data Structures (Stateful Grouping)**
```javascript
var Student = (function defineStudent(){
    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];
    var publicAPI = {
        getName
    };
    return publicAPI;
    // ************************
    function getName(studentID) {
        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }
})();
Student.getName(73); // Suzy
```
In the example above, we can see that *Student* is an instance of a module. And that method is able to accessto **private data** from *records*

## Node CommonJS Modules

Modules are the fundamental building blocks of the code structure. The module system allows you to organize your code, hide information and only expose the public interface of a component using module.exports. Every time you use the require call, you are loading another module.

```javascript
// add.js
function add (a, b) {
  return a + b
}

module.exports = add
```

In node.js module system, each file is treated as a separate module.

Sources:
- https://nodejs.org/api/modules.html
- https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/