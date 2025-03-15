import React , { useState } from 'react';
import styles from './Tab.module.css';

export default function Tab(props) {

  const [isActive, setIsActive] = useState(0);

  const changeState = (val) => {
    setIsActive(val);
    props.onClick(val);
  }
  
  return (
    <div className={styles["sidebar"]} >

      <ul className={styles["sidebar-nav"]} >
        <li className={isActive === 0 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(0)}>
            <span>Home</span>
        </li>
        <li className={isActive === 1 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(1)}>
            <span>About Me</span>
        </li>
        <li className={isActive === 2 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(2)}>
            <span>Projects</span>
        </li>
        <li className={isActive === 3 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(3)}>
            <span>Skills</span>
        </li>
      </ul>
    </div>
  );
}