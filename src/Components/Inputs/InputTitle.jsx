import React from 'react';
import styles from '../../assets/css/TaskContext.module.css';

function InputTitle({ read, ...props }) {
  return (
    <input
      className={styles.title}
      {...props}
    />
  )
}

export default InputTitle;