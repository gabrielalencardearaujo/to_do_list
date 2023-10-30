import React from 'react';
import { ReactComponent as DeleteTaskSVG } from '../assets/img/deleteTask.svg';
import styles from '../assets/css/SideNav.module.css';

function Task({ title, id, data, setData }) {

  function handleDelete({target}){
    const ID = target.parentElement.parentElement.id || target.parentElement.id

    const newData = data.filter((task, index) => {
      return task.id !== ID;
    })
    setData(newData);
  }

  return (
    <div 
    className={`${styles.task} ${styles.taskActive}`} 
    id={id}
    >

      <p className={styles.deleteTask} onClick={handleDelete} id={id}>
        <DeleteTaskSVG />
      </p>
      <p>{title}</p>

    </div>
  )
}

export default Task