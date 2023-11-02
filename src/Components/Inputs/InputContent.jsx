import React from 'react';
import styles from '../../assets/css/TaskContext.module.css';

function InputContent(props) {
  return (
    <textarea
    className={styles.context}
     {...props}
    ></textarea>
  )
}

export default InputContent