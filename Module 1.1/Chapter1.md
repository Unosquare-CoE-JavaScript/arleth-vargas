# What is Javascript?

The name has nothing to do with "Java". This was only used for marketing purposes, it was supposed to be  LiveScript but since it was designed for Java programmers it was modified. 

The only smmilarities beetween them is {} and ;

**It was implemented in all browsers**

> What is TC39?
> Ecma International's TC39 is a group of JavaScript developers, implementers, academics, and more, collaborating with the community to maintain and evolve the definition of JavaScript.

They decide and write the specifications for JS but there were some issues when realzed that JS official speccification was different from the JS on the web, with some exceptions allowed and denied.

JavaScrips is a **multi-paradigm language** because it is not strictly following  one paradigm (like c#, c++, java) this offers more flexibility and we can decide what todo lin by line. 

> Specially for changes related to style, patterns, etc.

Basically **backward compatibility** means that it will still be working in the future, if there are new changes in the languaje, those will still be valid for old JavaScript code (it won't break). **Which is amazing!** but it is **not forward compatible**.

> If you run a program that uses
an ES2019 feature in an engine from 2016, you’re very likely
to see the program break and crash.

## Transpile 
If the syntax is not compatible then we have to transpile it. Those problems appear to be part of the forward compatibility issue. The most used tool for this is babel which converts from a newer syntax to an older one. 

before
```javascript
const username = user?.name
```

after (this one is compatible with browser engine)
```javascript
var _user;
const username = (_user = user) == null ? void 0 : user.name
```

> A polyfill is a piece of code (usually JavaScript on the web) used to provide modern functionality in older browsers that don't natively support it.

Conclusion. Most used techniques to solve compatibility issues are Transpilation and polyfilling.

## Interpretation

The comon definition for JS is that it is an interpretated (script) languaje. 

> In scripted or interpreted languages, an error on line 5 of a
program won’t be discovered until lines 1 through 4 have
already executed. In processing model the error would be caught before any execution. 

In conclusion,. JS is a parsed language but it is not the same behavior as in Java. It is interpreted line by line.

## Web Assembly (WASM)

WASM is well known as the fastest version of JavaScript and can be processed by a JS engine and skip the parsing (which is nomally done by JS). 
