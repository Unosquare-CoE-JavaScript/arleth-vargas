# Advanced React Component Patterns

## Medium's Clap Component

First we have to know which are the states of the component:

- Default state, then the button was not clicked yet but it is showing an image of claps. 
- Clap count state, there is an animation that comes from the center to the outside. The clap count is displayed in its default state.
- Counter state, the counter appears and the number changes. and the count total increments.  

Those are the 3 states of this example.

## HOC (High Order Compoent)

This is technique to reuse component logic in React.  Before using hooks we can have a look to check HOCs.
This function takes a component that can have a logic and return another component, this is going to have same functionality. 
So the new component will have the main functionality but also can add more animations for example. 