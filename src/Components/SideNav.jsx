import React from 'react';
import styles from '../assets/css/SideNav.module.css';
import {ReactComponent as IconFolder } from '../assets/img/iconFolder.svg';
import {ReactComponent as IconFile} from '../assets/img/iconFile.svg';
import {ReactComponent as DeleteTask} from '../assets/img/deleteTask.svg';

function SideNav() {

  function handleClick() {
    console.log('criar task ou folder');

  }

  function handleDelete(){
    console.log('deletar task');
  }

  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.title}>To do List</div>
      <div className={styles.iconsDiv}>
        <IconFolder onClick={handleClick} className={styles.icon}/>
        <IconFile onClick={handleClick} className={styles.icon} />
      </div>

      <div className={styles.taskContainer}>
        <div className={`${styles.task} ${styles.taskActive}`} id='task1'>
          <p className={styles.deleteTask} onClick={handleDelete}>
            <DeleteTask  />
          </p>
          <p>Compras no Supermercado. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est optio temporibus inventore autem commodi nesciunt placeat aliquam, suscipit sunt numquam vero explicabo ducimus odit nihil ex, cum dolores dicta?</p>
        </div>

        <div className={`${styles.task} ${styles.taskDesactive}`} id='task1'>
          <p>Compras no Supermercado. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est optio temporibus inventore autem commodi nesciunt placeat aliquam, suscipit sunt numquam vero explicabo ducimus odit nihil ex, cum dolores dicta?</p>
        </div>
      </div>
      
    </section>
  )
}

export default SideNav