import React from 'react';
import '../assets/css/App.css';
import { Route, Routes } from 'react-router-dom'
import SideNav from './SideNav'
import TaskContext from './TaskContext'
import useLocalStorage from '../Hooks/useLocalStorage';

function Home() {
  const {setStorage, storage} = useLocalStorage();

  return (
    <main>
      <SideNav />
      <section>
        <TaskContext setStorage={setStorage} />
      </section>
    </main>
    
  )
}

export default Home