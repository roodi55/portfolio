import React , { useEffect, useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import styles from './Tab.module.css';

export default function Tab(props) {

  const [isActive, setIsActive] = useState(0);

  const changeState = (val) => {
    setIsActive(val);
    props.onClick(val);
  }
  
  return (
    <div className={styles["sidebar"]} >
      {/* <div>
        <img src={logo} className={styles["my-img"]}/>
      </div> */}
      <ul className={styles["sidebar-nav"]} >
        <li className={isActive === 0 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(0)}>
            <span>Home</span>
        </li>
        <li className={isActive === 1 ? styles["sidebar-nav-items-active"] : styles["sidebar-nav-items"]} onClick={() => changeState(1)}>
            <span>About Me</span>
            {/* 자기소개 학력 경력 자격증*/}
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