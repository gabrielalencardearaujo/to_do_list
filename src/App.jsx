import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import useLocalStorage from './Hooks/useLocalStorage';

const App = () => {
  const {data, setData} = useLocalStorage();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export { App }
