// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


// imrs - import react useState
import React, { useState } from 'react';
import Alert from './components/Alert';

// react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');

      document.body.style.backgroundColor = "#242b32";

      showAlert("Dark Mode has been enabled.", "success");

      document.title = 'PeaceTextUtils - Dark Mode';
    }
    else {
      setMode('light')

      document.body.style.backgroundColor = 'white';

      showAlert("Light Mode has been enabled.", "success");
      document.title = 'PeaceTextUtils - Light Mode';


      // setInterval(() => {
      //   document.title = 'An Amaizing App!!!';
      // }, 500);
      // setInterval(() => {
      //   document.title = 'PeaceTextUtils!!!';
      // }, 1000);
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    // JSX Fragment
    <>
      <Router>

        {/* <Navbar title='textUtils'/> */}
        <Navbar title="PeaceTextUtils" mode={mode} toggleFunction={toggleMode} nav1='Home' nav2='About' />


        <Alert showAlert={showAlert} alert={alert} />


        <Switch>
          <Route exact path="/about">
          <About mode={mode} />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading='Enter the text below to analyze:' mode={mode} />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

// console.log(ab);

export default App;
