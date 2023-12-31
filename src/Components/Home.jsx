import React from 'react';
import '../assets/css/App.css';
import styles from '../assets/css/TaskContext.module.css';
import SideNav from './SideNav'
import TaskContext from './TaskContext'
import useLocalStorage from '../Hooks/useLocalStorage';
import TaskHome from './TaskHome';


function Home() {
  const { data, setData } = useLocalStorage();
  const [taskActive, setTaskActive] = React.useState({});

  return (
    <main>
      <SideNav
        setData={setData}
        data={data}
        setTaskActive={setTaskActive}
        taskActive={taskActive}
      />
      <section className={styles.container}>
        {(taskActive.title === undefined) ? (
          <TaskHome />
        ) : (
          <TaskContext 
          setTaskActive={setTaskActive}
          taskActive={taskActive} 
          setData={setData} 
          data={data} />
        )}
      </section>
    </main>
  )
}

export default Home;