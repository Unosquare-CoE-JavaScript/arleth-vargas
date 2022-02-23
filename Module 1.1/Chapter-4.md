# The bigger picture

This chapter is about the three main pillars in JavaScript.

## Pillar 1: Scope and Closure

> Scopes are like buckets, and variables are like marbles you put into those buckets.

In some cases we can have nested expresions or statements but only the variables at the level of that scope are available, the other ones are hidden.

> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

Also we can fing different level of access to variables:

**Block Scope** 
It means that all the variables that were declared in the same stack of code between *{}* are available. 

**Function Scope**

This can be used with **var** declared variables, that are in the same function. For example it can be usen in closures if we want to access to an outer variable.

**Global Scope**

Those valiables **const** can be declared out of the function an are accessible for any other function from any place in the class.

Sources:

- https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript

## Pillar 2: Prototypes

We already covered this in *chapter 3* but there is another approach rhar is called **behavior delegation**. Thah is applied in casses when there are some objects linked to another one. 

## Pillar 3: Types and Coercion

This was also covered in chapter 2 and the main issue sometimes is that we do not understand the conversion of variables and we can get some erros when combining them. But also get dofferent behavior in case we want to compare them, **==** is different from **===**