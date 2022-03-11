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

**Animation timeline**
this is not only the track of the duration but also the timeline of the animation.  

## Hooks

**useState** The React useState Hook allows us to track state in a function component. State generally refers to data or properites that need to be tracking in an application.
**useEffect** What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
**useMemo** The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance.

**Custom hook** is a hook that we build for ourselves. Lets you exttract functions and reuse it in functions. This is a convetional pattern and it is **important**. Rules to create custom hooks:
- **use** has to be in the first part of the name
- they follow rules of hooks, apply them at top leve, we can only call them from **React Functions**

In the medium clap example, the **useClapAnimation** will handle all the animation and will be invoked by the function we have to handle the clap, within the mediun clap component. 

**refs**

This can be applied to modufy children components.