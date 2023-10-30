import React from 'react';
import styles from '../assets/css/TaskContext.module.css';
import { ReactComponent as CloseTask } from '../assets/img/deleteTask.svg';
import { ReactComponent as EditTask } from '../assets/img/iconPencilEdit.svg';

function TaskContext({taskActive}) {
  const [valueTitle, setValueTitle] = React.useState('Compras no Mercado.');
  const [valueText, setValueText] = React.useState('');

  React.useEffect(() => {
    if(taskActive.title !== undefined) {
      setValueText(taskActive.body);
      setValueTitle(taskActive.title);
    } else {
      setValueText('');
      setValueTitle('')
    }
  }, [taskActive])

  function handleHeight({target}) {
    target.style.height = '300px';
    target.style.height = (target.scrollHeight) + 'px';
  }

  function handleChangeTitle({target}) {
    setValueTitle(target.value)
   
  }

  function handleChangeContent({target}) {
    setValueText(target.value)
   
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
        onChange={handleChangeTitle}
        />

        <textarea 
        id='idTextarea'
        className={styles.context} 
        value={valueText}
        onChange={handleChangeContent}
        onInput={handleHeight}
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