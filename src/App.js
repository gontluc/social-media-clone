import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import FirstPage from "./components/FirstPage/FirstPage";
import DarkMode from './components/DarkMode/DarkMode';

function App() {

  // Dark Mode Feauture
  const [darkMode, setDarkMode] = useState(false)

  const onDarkModeToggle = () => {
    // Fixing transition animation (background, background-color)
    document.querySelector('body').style = 'transition-property: color background-color'
    document.querySelector('body').style = 'transition-timing-function: ease-in-out'
    document.querySelector('body').style = 'transition-duration: 1s'

    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'default' : 'dark')
  }

  return (
    <Router><Routes>

      <Route path='/' exact element={
        <>
          <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle}/>
          <FirstPage />
        </>
      }/>

      <Route path='/home' exact element={
        <>
          HOME
        </>
      }/>
      
    </Routes></Router>
  );
}

export default App;
