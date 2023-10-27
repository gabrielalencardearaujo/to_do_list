import React from 'react';
import styles from '../assets/css/TaskContext.module.css';
import { ReactComponent as CloseTask } from '../assets/img/deleteTask.svg';
import { ReactComponent as EditTask } from '../assets/img/iconPencilEdit.svg';

function TaskContext() {
  const [valueTitle, setValueTitle] = React.useState('Compras no Mercado.');
  const [valueText, setValueText] = React.useState('')

  function handleHeight({target}) {
    console.log(target)
    target.style.height = '300px';
    target.style.height = (target.scrollHeight) + 'px';

  }

  return (
    <section className={styles.container}>
      <div className={styles.containerIcons}>
        <EditTask className={styles.closeTask} />
        <CloseTask className={styles.closeTask} />
      </div>

      <article className={styles.containerContext}>
        <input 
        className={styles.title} 
        type='text'
        value={valueTitle}
        onChange={({target}) => setValueTitle(target.value)}
        />

        <textarea 
        className={styles.context} 
        value={valueText}
        onChange={({target}) => setValueText(target.value)}
        onInput={handleHeight}
        ></textarea>

      </article>
    </section>
  )
}

export default TaskContext