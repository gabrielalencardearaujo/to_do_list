import React from 'react';
import '../assets/css/App.css';
import { Route, Routes } from 'react-router-dom'
import SideNav from './SideNav'
import TaskContext from './TaskContext'

function Home() {
  return (
    <main>
      <SideNav />
      <section>
        <TaskContext />
      </section>
    </main>
    
  )
}

export default Home