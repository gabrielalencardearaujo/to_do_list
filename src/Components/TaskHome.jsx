import React from 'react';
import styles from '../assets/css/TaskHome.module.css';

function TaskHome() {
  return (
    <div className={styles.containerHome}>
      <div>
        <h1>To do List</h1>
        <p>Create new Folder ( Ctrl + , )</p>
        <p>Create new File ( Ctrl + . )</p>
      </div>
    </div>
  )
}

export default TaskHome;