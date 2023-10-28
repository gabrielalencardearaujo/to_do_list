import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskStorage from './TaskStorage';
import Home from './Components/Home';

const App = () => {

  return (
    <BrowserRouter>
      <TaskStorage>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </TaskStorage>
    </BrowserRouter>
  )
}


export { App }
