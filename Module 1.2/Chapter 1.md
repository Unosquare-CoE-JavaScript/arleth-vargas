# What's the scope? 

There are certain phases in JavaScript, execution and and compilation and some fiunctions, variables, behave in a certain way accoring to each phase. 

## Compiled vs. Interpreted

Code **compilation**, process the text of the code and trurns them in instructions. For example, if you wrote functions it will execute them, so this will work as it ahould. 

Code **interpretation**, is similoar to compilation BUT the processing model is different, the code is read an executed line by line. Which is importan because it executes functions right after the previous was executed.

## Compiling code

> Scope is primarily determined during compilation, so understanding
how compilation and execution relate is key in
mastering scope.

This is really important because sometimes we declare variabls or make comparisons that in compiled code give us different results. 

There we have three basic stages: 

-   **Tokenizing/Lexing** braks characters one by one and those are called tokens. `var, a, =, 2`

-   **Parsing** receices the tokens (previously generated) and transforms them in a nested tree (AST). `-> Variable declararion (var) -> Identifier (a) -> AssignementExxpression (2)`
  
-   **Code Generatiom** Transform AST (Abstract Syntax Tree) in axecutable code.

**Hoisting** In this case the code has already been processed but can throw errors after because of the scope. 

## Compiler Speak

We have clear until; now is that JS has two phases, and in order to process and handle we have Left and right hand side. 

**Target** a variable can be a target when we assign a value to it. But it can also be handled in compilation.

**Sources** thre are source references that are declared at first and when you try to use them or access to their properties become sources. 

## Cheating: Runtime Scope Modifications

**eval(. . .)** this function can expect a value to compile the function. And it can modify the scope of any function taht uses it. 

## Lexical Scope

When we place variables inside or outside of a function, it can be updated, accessed, or even throw errors in some cases dependiong the scope (function, global, brackets). 

In summary, the scopes are defined during compilation time. 
