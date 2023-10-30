import React from 'react';
import styles from '../assets/css/TaskContext.module.css';
import { ReactComponent as CloseTask } from '../assets/img/deleteTask.svg';
import { ReactComponent as EditTask } from '../assets/img/iconPencilEdit.svg';

function TaskContext({taskActive}) {
  const [valueTitle, setValueTitle] = React.useState('');
  const [valueText, setValueText] = React.useState('');

  function handleHeight({target}) {
    target.style.height = '300px';
    target.style.height = (target.scrollHeight) + 'px';
  }

  React.useEffect(() => {
    if(taskActive.title !== 'undefined') {
      setValueText(taskActive.body);
      setValueTitle(taskActive.title);
    } else {
      setValueText('');
      setValueTitle('')
    }
  }, [taskActive])

  function handleFocus() {
    console.log('Desfocado')
  }

  return (
    <div>
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
        placeholder={(taskActive.title) ? 'undefined' : ''}
        onBlur={handleFocus}
        />

        <textarea 
        id='idTextarea'
        className={styles.context} 
        value={valueText}
        onChange={({target}) => setValueText(target.value)}
        onInput={handleHeight}
        onBlur={handleFocus}
        ></textarea>

      </article>
    </div>
  )
}

export default TaskContext

 // setStorage({
    //   title: target.value,
    //   content: valueText,
    //   id: target.id,
    // });

    // setStorage({
    //   title: valueTitle,
    //   content: target.value,
    //   id: target.id,
    // });