import React from 'react'
import { MuiTypography } from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckBox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { SignInPage } from './pages/SignInPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9041ff',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        {/*       <MuiCheckbox />
      <MuiRadioButton />
      <MuiSelect />
      <MuiTextField />
      <MuiTypography />
      <MuiButton /> */}
        <SignInPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
