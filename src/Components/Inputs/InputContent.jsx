import React from 'react';
import styles from '../../assets/css/TaskContext.module.css';

function InputContent(props) {

  function autoResizing({target}) {
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }

  return (
    <textarea
    className={styles.context}
    onClick={autoResizing}
    {...props}

    ></textarea>
  )
}

export default InputContent