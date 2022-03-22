import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

// These colors were updated for third quiz
const colorRed = 'MediumVioletRed'
const colorBlue =  'MidnightBlue'

// this is testing the initial condition not the INITIAL STATE
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(colorBlue)}` })
  expect(colorButton).toHaveStyle({
    backgroundColor: colorRed
  })
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(colorBlue)}` })
  expect(colorButton).toHaveStyle({
    backgroundColor: colorRed
  })
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({
    backgroundColor: colorBlue
  })
  expect(colorButton.textContent).toBe(`Change to ${replaceCamelWithSpaces(colorRed)}`);
});

// THIS IS THE INITIAL CONDITION

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces(colorBlue)}` });
  expect(colorButton).toBeEnabled();
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

// THESE ARE TESTS FOT THE FIRST QUIZ
// Button disable on checkbox check
test('checkbox should have disabled button after click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
})

test('checkbox should have enabled button after second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  // this is simulating 2 clicks
  fireEvent.click(checkbox)
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
})

// THESE ARE TESTS FOT THE SECOND QUIZ
// Disable button turns gray

test('disable button should change color to gray and enable should change to red', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  // disabled button should be gray
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })

  // enabled button should be red
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: colorRed
  })
})

test('click button should disable button and checnge color to gray', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  // change color should be BLUE
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({
    backgroundColor: colorBlue
  })

  // disable button should be gray
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })
})

test('enabled button should change color to blue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  // change color should be BLUE
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({
    backgroundColor: colorBlue
  })

  // disable button should be gray
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })

  // enable again button should be blue
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({
    backgroundColor: colorBlue
  })
})

// These tests we added for the function replaceCamelWithSpaces
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Gray')).toBe('Gray');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces(colorBlue)).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces(colorRed)).toBe('Medium Violet Red');
  });
});

