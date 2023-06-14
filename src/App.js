import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Resume from './Resume1';
import AboutDeveloper from './AboutDeveloper';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
        <Routes>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/aboutDeveloper' element={<AboutDeveloper/>} />
       </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
