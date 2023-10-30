import React from 'react';
import '../assets/css/App.css';
import SideNav from './SideNav'
import TaskContext from './TaskContext'
import useLocalStorage from '../Hooks/useLocalStorage';

function Home() {
  const {data, setData} = useLocalStorage();

  return (
    <main>
      <SideNav setData={setData} data={data} />
      <section>
        <TaskContext />
      </section>
    </main>
    
  )
}

export default Home