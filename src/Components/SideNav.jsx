import React from 'react';
import styles from '../assets/css/SideNav.module.css';
import {ReactComponent as IconFolder } from '../assets/img/iconFolder.svg';
import {ReactComponent as IconFile} from '../assets/img/iconFile.svg';

function SideNav() {
  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.title}>To do List</div>
      <div className={styles.iconsDiv}>
        <IconFolder className={styles.icon}/>
        <IconFile className={styles.icon} />
      </div>
      
    </section>
  )
}

export default SideNav