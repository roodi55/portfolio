import React  from 'react';
import styles from './About.module.css';

export default function About(props) {
  return (
      <div className={styles["box"]} id='about' ref={(el) => (props.ref.current[1] = el)}>
        <h2 className={styles["heading"]}>About <b>Me</b></h2>
        <div className={styles["about"]}>
          <p className={styles["br"]}>
            안녕하세요. 저는 주니어 개발자 이소정이라고 합니다.<br/>
            프론트엔드 백엔드 구분없이 흥미가 있어 풀 스택 개발자가 되고자 배워나가는 중입니다.<br/>
            아직 많은 프로젝트 경험이 있지는 않지만 협업에 익숙하며 팀원들과의 관계 또한 우호적이고 여전히 친분을 유지하고 있습니다.<br/>
            시작부터 함께한 프로젝트가 대부분이며 따라서 프로젝트의 전체적인 흐름을 파악하는 것에 자신이 있습니다.
          </p>
          <p className={styles["br"]}>
            또한, 비전공자로서 부족함이 있다 판단하여 회사생활 틈틈이 자격증을 취득하였고 <br/>
            현재 대학에 편입하여 부족한 부분을 채워나가고 있으며 곧 졸업을 앞두고 있습니다.<br/>
            앞으로도 업무에 필요한 지식과 기술을 습득하기 위해 끊임없이 노력하는 개발자가 되고자 합니다.<br/>
          </p>
          <div className={styles["tag"]}>
            <li>#SQL개발자</li>
            <li>#정보처리산업기사</li>
            <li>#컴퓨터활용능력1급</li>
            <li>#ITQ한글엑셀A등급</li>
          </div>
        </div>
      </div>
    );
}
