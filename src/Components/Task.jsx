import React from 'react';
import { ReactComponent as DeleteTaskSVG } from '../assets/img/deleteTask.svg';
import styles from '../assets/css/SideNav.module.css';

function Task({ title, id, data, setData, setTaskActive, taskActive }) {

  function handleDelete({ target, taskActive }) {
    const ID = target.parentElement.parentElement.id || target.parentElement.id
    const newData = data.filter((task, index) => {
      return task.id != ID;
    })

    setData(newData);
    setTaskActive({})
  }

  function handleClick({ target }) {
     const clickTask = data.filter((task) => target.id == task.id);
     setTaskActive(...clickTask);
  }

  return (
    <>
      {(taskActive.id === id) ? (
        <div
          className={`${styles.task} ${styles.taskActive}`}
          id={id}
        >
          <p className={styles.deleteTask} id={id} onClick={handleDelete}>
            <DeleteTaskSVG />
          </p>
          <p id={id}>{title}</p>
        </div>
      ) : (
        <div 
          className={`${styles.task} ${styles.taskDesactive}`} 
          id={id}
          onClick={handleClick}
        >
          <p id={id}>{title}</p>
        </div>
      )}
    </>
  )
}

export default Task