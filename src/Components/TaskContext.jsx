import React from 'react';
import styles from '../assets/css/TaskContext.module.css';
import { ReactComponent as CloseTask } from '../assets/img/deleteTask.svg';
import { ReactComponent as EditTask } from '../assets/img/iconPencilEdit.svg';
import { newTask } from '../Hooks/useLocalStorage';
import InputTitle from './Inputs/InputTitle';
import InputContent from './Inputs/InputContent';
import TaskHome from './TaskHome';

function TaskContext({ taskActive, setData, data }) {
  const [valueTitle, setValueTitle] = React.useState('');
  const [valueText, setValueText] = React.useState('');
  const [closed, setClosed] = React.useState(false);

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

  return (
    <>
      {(closed) ? (
        <div>
          <div className={styles.containerIcons}>
            <EditTask className={styles.closeTask} />
            <CloseTask onClick={setClosed((closed) => !closed)} className={styles.closeTask} />
          </div>

          <article className={styles.containerContext}>
            <InputTitle
              type='text'
              value={valueTitle}
              onChange={({ target }) => setValueTitle(target.value)}
              placeholder={(taskActive.title) ? 'undefined' : ''}
              onBlur={handleFocus}
              data={data}
              setData={setData}
              taskActive={taskActive}
            />

            <InputContent
              id='idTextarea'
              value={valueText}
              onChange={({ target }) => setValueText(target.value)}
              onInput={handleHeight}
              onBlur={handleFocus}
            />
          </article>
        </div>
      ) : (
        <TaskHome />
      )}
    </>

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