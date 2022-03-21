# React testing library with Jest

This is a library that helps us to test React com,ponents. 

React Testing library has a virtual DOM for tests. 
Jest runs the tests and determine if test passes or not. 

> create-react-app includes config, webpack, web server and testing library

This is the react library testing syntax: 

```javascript
test('renders learn react link', () => {
  // creates a virtual DOM
  render(<App />);
  // getByText > finds the element that is displaying the text in parenthesis
  const linkElement = screen.getByText(/learn react/i);
  // This is the expected result in this case that text should be in the component
  expect(linkElement).toBeInTheDocument();
});
```

**linkElement** this argunment will be analyzed
**toBeInTheDocument** this is the matcher (this is the expected result)

## TDD  (test driven development)

Write tests before writing code, then write code according to the expected in the tests. 
We should apply TDD in order to have a more efficient app and not tleft testing at the end. 

## Types of tests 

- Unit tests. Tests one unit of code in isolation. This is not covering the interaction of the users, that is part of functional testing.
- Integratioon tests, checks how multiple unit work together
- Funtional Tests, tests a particulkar function of software an not a particular piece of code. 
- Acceptance / end-to-end tests, use actual browser and server (cypress, selenium)

## BDD Behavior Driven Development 

this involves the interaction with many roles, defines process for different groups to interact.

Sources:

Role definitions: 
- https://www.w3.org/TR/wai-aria/#role-definitions
Documentation of jest (custom matchers and style examples) :
- https://github.com/testing-library/jest-dom 


## Color button example
**fireEvent** helps up to interact with elements and launch an event
The example an the quizzes ate attached in the folder color button

## Unit testing functions

This is remomended in order to separate functions from components and unit tests to test complex logic. 

## ESlint
 linter. analyses static text and marks syntax that breaks rules
 static. analyze code as writte, not what happens when code is run. 

 In VSCode install ehr ESlint extension and in thje .vsconfig add:
 ```
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
 ```

 ## Sundaes on Demand

We are going to create a project that connects to the ("server")[https://github.com/bonnie/udemy-TESTING-LIBRARY/tree/main/sundae-server] to get all the siundaes flavors available.  Tests are going to simulare the response from the server using MOCKS.

This is a helpful cheatsheet https://testing-library.com/docs/react-testing-library/cheatsheet/

Component overlays https://react-bootstrap.github.io/components/overlays/#popovers