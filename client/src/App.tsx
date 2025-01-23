import React from 'react'
import { MuiTypography } from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <MuiCheckbox />
      <MuiRadioButton />
      <MuiSelect />
      <MuiTextField />
      <MuiTypography />
      <MuiButton />
    </div>
  );
}

export default App;
