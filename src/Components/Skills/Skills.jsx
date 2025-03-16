import React from 'react';
import styles from './Skills.module.css';

import js from '../images/javascript.png';
import html from '../images/html.png';
import react from '../images/react.png';
import vue from '../images/vue.png';
import css from '../images/css.png';

import java from '../images/java.png';
import spring from '../images/spring.png';
import git from '../images/git.png';
import svn from '../images/svn.png';
import mariadb from '../images/mariadb.png';
import oracle from '../images/oracle.png';

const skills = [
  {
    image: js,
    title:"Java Script"
  },
  {
    image: html,
    title:"HTML5"
  },
  {
    image: css,
    title:"css"
  },
  {
    image: react,
    title:"React"
  },
  {
    image: vue,
    title:"Vue"
  },
  {
    image: java,
    title:"Java"
  },
  {
    image: spring,
    title:"Spring"
  },
  {
    image: git,
    title:"Git"
  },
  {
    image: svn,
    title:"SVN"
  },
  {
    image: mariadb,
    title:"MariaDB"
  },
  {
    image: oracle,
    title:"Oracle"
  }
];

export default function Skills(props) {
  const getTools = (cardItem) => {
    return (
      <div className={styles["card"]} key={cardItem.title} >
        <li>
            <div style={{alignItems:'center',textAlign:'center'}}>
              <img src={cardItem.image} className={styles["card-image"]} alt='' />
            </div>
            <div> 
                <p className={styles["card-title"]}>{cardItem.title}</p>
            </div>
        </li>
      </div>
    );
  };

  return (
    <div className={styles["box"]} id='interest' ref={(el) => (props.ref.current[3] = el)}>
      <h2 className={styles["heading"]}>My <b>Skills</b></h2>
      <div className={styles["skill"]}>
        <div className={styles["list"]}>
          <div className={styles["cardList"]}>
            {skills.map((item) => {
              return getTools(item);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}