import React from 'react';
import styles from '../assets/css/TaskContext.module.css';
import { ReactComponent as CloseTask } from '../assets/img/deleteTask.svg';
import { ReactComponent as EditTask } from '../assets/img/iconPencilEdit.svg';
import { ReactComponent as ReadTask } from '../assets/img/book-open-solid.svg';
import { newTask } from '../Hooks/useLocalStorage';
import InputTitle from './Inputs/InputTitle';
import InputContent from './Inputs/InputContent';
import TaskHome from './TaskHome';

function TaskContext({ taskActive, setData, data, setTaskActive }) {
  const [valueTitle, setValueTitle] = React.useState('');
  const [valueText, setValueText] = React.useState('');
  const [read, setRead] = React.useState(false);

  function handleHeight({ target }) {
    target.style.height = '300px';
    target.style.height = (target.scrollHeight) + 'px';
  }

  React.useEffect(() => {
    if (taskActive.title !== 'undefined') {
      setValueText(taskActive.body);
      setValueTitle(taskActive.title);
    } else {
      setValueText('');
      setValueTitle('')
    }
  }, [taskActive])

  function handleFocus() {
    const tasksUpdate = data.map((task) => {
      if (task.id === taskActive.id) return newTask(taskActive.id, valueTitle, valueText);
      else return task
    })
    setData([...tasksUpdate])
  }

  function handleClosed() {
    setTaskActive({
      id: -1,
      title: undefined,
      body: '',
    })
  }

  return (
    <div>
      <div className={styles.containerIcons}>
         {(read) ? (
          <EditTask onClick={() => setRead(!read)} className={styles.closeTask}/>
        ) : (
          <ReadTask onClick={() => setRead(!read)} className={styles.closeTask}/>
        ) }
        <CloseTask onClick={handleClosed} className={styles.closeTask} />
      </div>

      <article className={styles.containerContext}>
        <InputTitle
          type='text'
          value={valueTitle}
          onChange={({ target }) => setValueTitle(target.value)}
          placeholder={(taskActive.title) ? 'undefined' : ''}
          onBlur={handleFocus}
          disabled={read}
        />

        <InputContent
          id='idTextarea'
          value={valueText}
          onChange={({ target }) => setValueText(target.value)}
          onInput={handleHeight}
          onBlur={handleFocus}
          disabled={read}
        />
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