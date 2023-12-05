import React from "react";
import styles from "../assets/css/SideNav.module.css";
import { ReactComponent as IconFile } from "../assets/img/iconFile.svg";
import { ReactComponent as IconMenu } from "../assets/img/iconMenu.svg";
import Task from "./Task";
import { newTask } from "../Hooks/useLocalStorage";

function SideNav({ data, setData, setTaskActive, taskActive }) {
  const [menu, setMenu] = React.useState(false);

  // Criar um novo arquivo/task
  function handleClick() {
    const ID = newTask(data.length);

    if (data.length === 0) {
      setData([ID]);
      setTaskActive({ ...ID });
    } else if (data[data.length - 1].title !== "undefined") {
      setData((value) => [...value, ID]);
      setTaskActive({ ...ID });
    }
  }

  function toggleMenu({ target }) {
    setMenu(!menu);
  }

  return (
    <section
      className={
        menu
          ? `${styles.sideBarContainer}`
          : `${styles.sideBarContainer} ${styles.menuClosed}`
      }
    >
      <div className={menu ? styles.title : `${styles.title} ${styles.center}`}>
        <IconMenu onClick={toggleMenu} className={styles.iconMenu} />
        {menu ? <p>To do List</p> : ""}
      </div>

      <div className={styles.iconsDiv}>
        <IconFile onClick={handleClick} className={styles.icon} />
      </div>

      <div
        className={
          menu
            ? `${styles.taskContainer}`
            : `${styles.taskContainer} ${styles.notVisible}`
        }
      >
        {data &&
          data.map((task, index) => (
            <Task
              key={index}
              title={task.title}
              id={task.id}
              setData={setData}
              data={data}
              setTaskActive={setTaskActive}
              taskActive={taskActive}
            />
          ))}
      </div>
    </section>
  );
}

export default SideNav;
