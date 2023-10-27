import React from 'react';
import styles from '../assets/css/SideNav.module.css';
import IconFileSVG from '../assets/img/IconFileSVG';
import {ReactComponent as IconFolder} from '../assets/img/iconFolder.svg';

function SideNav() {
  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.title}>To do List</div>
      <div className={styles.iconsDiv}>
        <IconFileSVG />
        <IconFolder />
      </div>
    </section>
  )
}

export default SideNav