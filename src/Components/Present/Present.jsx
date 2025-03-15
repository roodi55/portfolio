import React from 'react';
import styles from './Present.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperclip } from "@fortawesome/free-solid-svg-icons";

import so from '../images/sojeong.jpg';
import git from '../images/github.png';

export default function Present(props) {
  return (
    <div id='start'>
        <div className={styles["container"]} ref={(el) => (props.ref.current[0] = el)}>
          <div className={styles["container-img"]}>
            <div className={styles["wrapper-img"]}>
              <img src={so} alt='myImage' />
            </div>
            <div className={styles["info"]}>
              <h2><b>이소정</b></h2>
              <h5>Junior Web Develper</h5>
              <h5>
                <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon>&nbsp;
                Incheon, Republic of Korea
              </h5>
            </div>
          </div>
          <div className={styles["container-right"]}>
            <h5>
              <FontAwesomeIcon icon={faPaperclip} ></FontAwesomeIcon>&nbsp;
              Keep grinding! Stay persistence!
            </h5>
            <p> 
              안녕하세요. 풀 스텍 개발자를 꿈꾸는 주니어 개발자 이소정 입니다.<br/>
              저는 주로 자바를 이용한 웹 프로젝트에 참여해 왔으며 다양한 경험을 쌓기 위해 프론트엔드, 백엔드 구분 없이 <br/>
              꾸준히 공부하며 나아가는 개발자가 되고자 합니다.
            </p>
          </div>
         
        </div>
    </div>
  );
}