import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert(" Dark mode has been enable", "Success ")
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enable", "Success ")
      document.title = "TextUtils - Light Mode";
    }
  };


  return (
    <>
        <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
      {/* <BrowserRouter>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={ */}
            <Textform showAlert={showAlert} heading="Enter Text to analyze below "mode={mode}/>
      {/* //       }></Route>
      //     </Routes>
      // </BrowserRouter> */}
        </div>
    </>
  )  
}

export default App;
