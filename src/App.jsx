import React from 'react'; 
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskStorage from './TaskStorage';
import Home from './Components/Home';
import SideNav from './Components/SideNav';

const title = 'Hello World!';

const App = () => {
  return (
    <BrowserRouter>
      <TaskStorage>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </TaskStorage>
    </BrowserRouter>
  )
}


export { App }
