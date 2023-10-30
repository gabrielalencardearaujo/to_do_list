import React from 'react';
import styles from '../assets/css/SideNav.module.css';
import {ReactComponent as IconFolder } from '../assets/img/iconFolder.svg';
import {ReactComponent as IconFile} from '../assets/img/iconFile.svg';
import Task from './Task';
import useLocalStorage, { newTask } from '../Hooks/useLocalStorage';

function SideNav({data, setData, setTaskActive}) {

  // Criar um novo arquivo/task
  function handleClick() {
    const ID = newTask(data.length);
    
    if(data.length === 0) {
      setData([ID]);
      setTaskActive({...ID})
    } else if(data[data.length - 1].title !== 'undefined' ) {
      setData((value) => [...value, ID])
      setTaskActive({...ID})
    }
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
          setTaskActive={setTaskActive}
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
