import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FirstPage from "./components/FirstPage/FirstPage";
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <Router><Routes>

      <Route path='/' exact element={
        <>
          <DarkMode />
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
