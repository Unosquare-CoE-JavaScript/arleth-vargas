import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// this is testing the initial condition not the INITIAL STATE
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red'
  })
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red'
  })
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({
    backgroundColor: 'blue'
  })
  expect(colorButton.textContent).toBe('Change to red');
});

// THIS IS THE INITIAL CONDITION

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
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
    backgroundColor: 'red'
  })
})

test('click button should disable button and checnge color to gray', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  // change color should be BLUE
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({
    backgroundColor: 'blue'
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
    backgroundColor: 'blue'
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
    backgroundColor: 'blue'
  })
})