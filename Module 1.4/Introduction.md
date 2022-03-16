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

## Hooks: The first foundational pattern

**useState** The React useState Hook allows us to track state in a function component. State generally refers to data or properites that need to be tracking in an application.
**useEffect** What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
**useMemo** The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance.

**Custom hook** is a hook that we build for ourselves. Lets you exttract functions and reuse it in functions. This is a convetional pattern and it is **important**. Rules to create custom hooks:
- **use** has to be in the first part of the name
- they follow rules of hooks, apply them at top leve, we can only call them from **React Functions**

In the medium clap example, the **useClapAnimation** will handle all the animation and will be invoked by the function we have to handle the clap, within the mediun clap component. 

**refs**

This can be applied to modufy children components.

## The Compound components pattern

Every component is isolated, self contained but still can be part of another component. In the example we have a main component which is **Mediumclap** but it is containing 3 different elements (icon, count, totalCount). 

Why should we use them? Because we can have its own props for each com ponents (individual props), we expose an understable UI to API (easy to iunderstand), prevent from props overload in case there are some props that are not necessary in the other components.   

**Context** is used to shapre data that can be considered "global" for a tree of React Components.

## Reusable styles

As in the title if we want to apply same style in components (e.g background color) then we can use styles in className or inline styles.  

## The control props pattern

So we have some form elements but it is recomendable to use components instead. Esample, we have a coontrolled input element, we can handle the state acvcording the value we get there or throw an event that can change the state and ask for another value. In oruy example we want to use callback in order to have controlled components in the medium  clap example. The state value is in **value** and the state updated is in **onClap** in this case we want to have two entities but share the total count.

## Custom hooks : deeper look 

In case we have smaller modules and we want to break them and use custom hooks then we have it to help us with the re-usability. 

## The props collection pattern

this is used to give the user more flexibility, it is used to split a little biut the component and for example change the components we want to show, replace them, etc. and the app won't break. In the example I have replaced the icon by an  emoji. 
An advantage is that the user can render another component using the same props that other components. It makes easiert to replace props in many components. 

## The props getter pattern

The props we pass inline can overwrite the object we created before. The prop getter  is a function and the props collection is an object. 

> Function in sequence wellknown as Currying in Javascript arrow function sequence

https://medium.com/@harouny/currying-in-javascript-arrow-function-sequence-2a510441215a

## State Initializers

We have **initialState** that is the default state when it first starts, then the **update state** that is the one in charge to run a function in case something changes, and finally we have the **reset state** in charge to set the state to its iniitial state. 
Side effects are used to make changes after reset is applied.

## The state reducer pattern

> A reducer is a function but has an special array that takes the state and action and return a new stated based on that action. 

So, we can have an internal state that can be managed by the value that we are passing in the components and return a new state. 
Reducer receives state and action and based of the type we can return a different state and change the behavior. 
Dispatch, ehrn we cal;l iut we pass an object and it rpresents an action, the mos important in thi case is the **Type**, it gors to the reducer and then we use **case** to define the next action. 