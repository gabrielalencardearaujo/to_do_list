import React from 'react';
import styles from '../assets/css/SideNav.module.css';
import {ReactComponent as IconFolder } from '../assets/img/iconFolder.svg';
import {ReactComponent as IconFile} from '../assets/img/iconFile.svg';
import {ReactComponent as DeleteTask} from '../assets/img/deleteTask.svg';
import Task from './Task';
import useLocalStorage from '../Hooks/useLocalStorage';

const newTask = (id) => {
  return {id: 'task' + id,
  title: 'undefined',
  body: '',
  }
};

function SideNav({data, setData}) {
  // const [taskActive, setTaskActive] = React.useState('');

  // Criar um novo arquivo/task
  function handleClick() {
    if(data.length === 0) setData([newTask(data.length)]);

    if(data.length > 0 && data[data.length - 1].title !== 'undefined') 
      setData((value) => [...value, newTask(data.length)])
      // setTaskActive(newTask(data.length))
  }
  
  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.title}>To do List</div>
      <div className={styles.iconsDiv}>
        <IconFolder onClick={handleClick} className={styles.icon}/>
        <IconFile onClick={handleClick} className={styles.icon} />
      </div>

      <div className={styles.taskContainer}>
        {data && data.map((task, index) => (
          <Task 
          key={index}
          title={task.title}
          id={task.id}
          setData={setData}
          data={data}
           />
        ))}

        <div className={`${styles.task} ${styles.taskDesactive}`} id='task1'>
          <p>Churrasco do Diego</p>
        </div>
      </div>
      
    </section>
  )
}

export default SideNav
