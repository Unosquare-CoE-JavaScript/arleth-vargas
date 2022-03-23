# Concurrent Rendering Adventures in React 18

## Introduction

Whats new? <Suspense /> and concurrent mode. We will be working with node and npm latest versions. 

## Suspense component

Very usefuls, it allows you to suspend the rendering of a component if you are waiting for data or is not ready to be rendered. Works as a promise that can also reject it and throw errors. 

**SWR** is also used to load data and can be conbined with suspense.
In the example we are removing all the **Loading** references and only apply it in the suspense component in Index.jsx.
Also syntax was updated: 
```javascript
// BEFORE
if (!movie) {
    return <Loading />;
  }
//AFTER
const movie = data!;
```

## Error handling 
When we use suspense the resourse can faul and throw an error. 
we can wrap every component in:
```javascript
<ErrorBoundary FallbackComponent={ErrorFallback}>
```
And it will only trhow the error at level component instead of breaking all the app.

## Nesting suspense

**REACT 17** 
We can use as meny **suspense** components as we need. In react 18 it is handlinh NULL Fallbacks.

## Parrallel suspense

**REACT 17** 
In the example we have added two differende suspense components wrappingt different components, and as you can see both load asynchronously and we get two different spinners for each one. One loads faster and appears before the other component. 

## React 18

Some changes related to routes: 

```javascript
// before
import { useRoutes } from 'react-router';
// after
import { useRoutes } from 'react-router-dom';


//before
ReactDOM.render(
//after
ReactDOM.createRoot(document.getElementById('root')!).render(
```
## New hooks

**useDeferredValue()** Returns a deferred version of the value that may lag behind
**useTransition()** Avoid undesirable states when waiting for content
**useMutableSource() or useSyncExternalStore()**Enables React components to safely and efficiently read from a
mutable external source in Concurrent Mode. Avoids tearing.
**useOpaqueIdentifier() or useId()** Can be used to generate unique ID’s in an SSR-safe way


BUT according to documentation: https://reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue 

these are the new hooks: 

Suspense: 

    -Suspense
    -SuspenseList
    -useTransition
    -useDeferredValue

Note. We should import in {} to know that react is importing only the function and not the hole thing.

## Start transition and useTransition

This is helpful when we want to control how react components suspen d. We can also render new components in case timeout is expired. 
In case we have a pending time then we can add a compnent in the meantime, in the example we have added an small icon until all the prime number are loaded. 