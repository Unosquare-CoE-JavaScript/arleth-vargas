import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const colorRed = 'MediumVioletRed'
  const colorBlue =  'MidnightBlue'
  const [ buttonColor, setButtonColor ] = useState(colorRed);
  const [ disabled, setDisabled ] = useState(false);
  
  const newButtonColor = buttonColor === colorRed ? colorBlue : colorRed;
  
  return (
    <div>
      <button
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >Change to {replaceCamelWithSpaces(newButtonColor)}</button>
    <br />
    <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)} />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>  
  );
}

export default App;