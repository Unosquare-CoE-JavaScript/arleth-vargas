import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


// this is testing the initial condition not the INITIAL STATE
test('button has correct initial color', () => {
  render(<App />);
  // this will find element with a role of button with the text 'change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  // this is the expected style
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red'
  })
});


test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  // before click it chould be red
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red'
  })
  // click button
  fireEvent.click(colorButton);
  // after click this should change to blue
  expect(colorButton).toHaveStyle({
    backgroundColor: 'blue'
  })
  // test should alsop change
  expect(colorButton.textContent).toBe('Change to red');
});
