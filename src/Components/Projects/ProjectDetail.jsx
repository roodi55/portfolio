import React from 'react';
import styles from './ProjectDetail.module.css';

import { useLocation } from 'react-router';

export default function ProjectDetail() {
  const location = useLocation();
  const params = location.state;

  return (
    <div className={styles["box"]}>
      {/* 프로젝트명 기간 설명 기술 */}
      <div className={styles["project"]}>
        <h1>{params.title}</h1>
        <h4 className={styles["sub"]}>{params.desc}</h4>
        <div className={styles["wrapper-stack"]}>
          <h4><b>What I used:</b></h4>
          <ul>{params.techStack.map((item)=>{
            return(
              <li className={styles["tag"]} key={item}>
                {item}              
              </li>
            )
          })}</ul>
        </div>
      </div>
      {/* 문제 역할 및 기여도 배운점 */}
      <div className={styles["detail"]}>
        <h3 className={styles["heading"]}>Feathers of the project:</h3>
        <div className={styles["desc"]}>
          {params.goal}
        </div>
        <div className={styles['line']}></div>
        <h3 className={styles["heading"]}>My main activities:</h3>
        <ul className={styles["desc"]}>
          {params.role.map((item)=>{
            return(
              <li className={styles["roles"]} key={item}>
                {item}              
              </li>
            )
          })}
        </ul>
        <div className={styles['line']}></div>
        <h3 className={styles["heading"]}>What I learned:</h3>
        <div className={styles["desc"]}>
          {params.learn}
        </div>
      </div>
    </div>
  );
}