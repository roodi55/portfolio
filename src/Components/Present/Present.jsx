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
            <p> 
              안녕하세요. 배우고 행동하고 기록하며 개발하는 이소정입니다.<br/>
              저는 주로 자바를 이용한 프로젝트에 참여해 왔으며 다양한 지식 쌓기 위해 프론트, 데이터베이스 관련 업무 또한  <br/>
              경험하였습니다. 분석에 능하고 리팩토링 능력이 출중한 자바 개발자가 되기 위해 노력하고자 합니다.
            </p>
          </div>
         
        </div>
    </div>
  );
}