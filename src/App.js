import './App.css';
import {ThemeProvider} from '@material-ui/styles'
import { Routes, Route } from 'react-router-dom';
import theme from './common/navbar/Theme'
import Header from './common/navbar/Header';
import TimesheetsMain from './pages/timesheets/TimesheetsMain';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Routes></Routes> */}
      
      <Header/>
      <TimesheetsMain/>
    </ThemeProvider>
  );
}

export default App;
