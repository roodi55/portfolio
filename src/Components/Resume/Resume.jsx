import React, { Component } from 'react';
import styles from './Resume.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCode, faPen } from "@fortawesome/free-solid-svg-icons";

import git from '../images/github.png';

class Resume extends Component {
  render() {
    return (
      <div className={styles["box"]} >
        {/* work */}
        <span className={styles["heading"]}>
          <FontAwesomeIcon icon={faBuilding} ></FontAwesomeIcon>&nbsp;
          Work Experience
        </span>
        <section className={styles["container"]}>
          <div className={styles["timeline_centered"]}>
            {/* fst */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>
              <div>
                <span className={styles["connection"]}>아이트리드 솔루션
                  <span className={styles["period"]}> &nbsp;개발팀 대리</span>
                </span>
                <div className={styles["period"]}>2023-11 ~ 024-09 (11개월)</div>
              </div>
              <div className={styles["title"]}>
                <div>포트미스 개선사업 설계 참여</div>
                <div>2024-07-15 ~ 2024-09-05</div>
              </div>
              <div className={styles["title"]}>
                <div>3fit 설계 및 개발</div>
                <div>2024-05-01 ~ 2024-09-30</div>
              </div>
              <div className={styles["title"]}>
                <div>SEL 사회정서분석 반응형 웹 개발</div>
                <div>2023-11-01 ~ 2024-04-30</div>
              </div>
            </div>
            {/* snd */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>      
              <div>
                <span className={styles["connection"]}>(주)비엑스티
                  <span className={styles["period"]}>&nbsp;전산팀 사원</span>
                </span>
                <div className={styles["period"]}>2023-04 ~ 2023-10 (7개월)</div>
              </div>
              <div className={styles["title"]}>
                <div>자사 ERP 기능 추가 및 개선</div>
                <div>2023-04-04 ~ 2023-10-31</div>
              </div>
            </div>
            {/* thd */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>     
              <div>
                <span className={styles["connection"]}>(주)그로윈
                  <span className={styles["period"]}>&nbsp;SI개발팀 사원</span>
                </span>
                <div className={styles["period"]}>2021-05 ~ 2023-03 (2년)</div>
              </div>
              <div className={styles["title"]}>
                <div>합동화력운용체계(JFOSK) 개발</div>
                <div>2022-01-01 ~ 2023-03-31</div>
              </div>
              <div className={styles["title"]}>
                <div>코트라DB 마이그레이션</div>
                <div>2021-05-01 ~ 2021-12-01</div>
              </div>
            </div>
          </div>
        </section>
        {/* personal */}
        <span className={styles["heading"]}>
          <FontAwesomeIcon icon={faCode} ></FontAwesomeIcon>&nbsp;
          Personal Experience
        </span>
        <section className={styles["container"]}>
          <div className={styles["timeline_centered"]}>
            {/* fst */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>
              <div>
                <div className={styles["connection"]}> 중부정보보호 지원센터</div>
                <div className={styles["period"]}>2020-09 ~ 2021-03</div>
              </div>
              <div className={styles["title"]}>
                <div>클라우드 보안 실습</div>
                <div>2024-09-06</div>
              </div>
              <div className={styles["title"]}>
                <div>침해사고대응 포렌식 실습 수료</div>
                <div>2024-08-20</div>
              </div>
            </div>
            {/* snd */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>
              <div>
                <div className={styles["connection"]}>인천일보 아카데미</div>
                <div className={styles["period"]}>2020-09 ~ 2021-03</div>
              </div>
              <div className={styles["title"]}>
                <div>Mohel(모두의 헬퍼) 재능 경매 프로그램 구현</div>
                <div>2021-02-05 ~ 2021-03-17</div>
              </div>
              <div className={styles["desc"]}>
                <div>
                  <b>공통 역할 :</b><br/>
                  - 프로젝트 기획 및 스토리보드 작성<br/>
                  - 클래스 및 데이터베이스 정의, 설계 및 구현<br/><br/>

                  <b>엔지니어 :</b><br/>
                  - 팀원들이 작성한 문서 하나로 통합<br/>
                  - 플로우차트 설계 및 수정<br/>
                  - 백엔드 베이스 코드 설계<br/>
                  - 코드 통합 및 그에 따른 오류를 검출 해결<br/>
                  - 깃 허브 사용시 발생하는 오류를 검출해 수정<br/><br/>

                  1.메세지 담당<br/>
                  - J-Query를 사용하여 저장되어있는 데이터를 최신순으로 호출<br/>
                  - 메시지함에서 아이디 선택시 아이디값을 파라미터로 넘겨 일치하는 회원정보 호출<br/>
                  - 메시지 상세 내역 호출 및 상태값 변경<br/>
                  - 답장하기 버튼 클릭하면 받아온 메세지 상세정보 데이터 받아와서 textarea안에 표시<br/>
                  - 메세지 쓰기 버튼 클릭하면 메세지 쓰기 페이지만 호출<br/>
                  - 전송버튼 클릭시 메세지 전송 후 상대방 받은 메세지함과 본인 보낸 메세지함에서 확인<br/>
                  - 마이페이지 클릭시 생성되는 메세지관련 버튼을 js파일로 생성하여 마이페이지 버튼 클릭시 나오는 모든 페이지에 전달<br/><br/>

                  2.스케쥴 담당<br/>
                  - 거래 요청글에 대하여 로그인 사용자 구분하여 스케쥴 노출<br/><br/>
                    헬퍼<br/>
                  - 스케쥴 관리 버튼 클릭시 스케쥴 유무에 따라 빈페이지 혹은 저장된 스케쥴 데이터 호출<br/>
                  - 스케쥴 입력시 항목추가, 제거 버튼으로 textarea 5개까지 생성 및 제거 가능<br/>
                  - 스케쥴 입력 버튼 클릭시 Ajax를 이용하여 동적으로 생성된 데이터 전송<br/>
                  - 저장된 스케쥴이 있다면 반복문 이용하여 데이터 호출<br/><br/>
                  위시어<br/>
                  - 스케쥴 관리 버튼 클릭시 저장된 데이터가 없다면 alert창 안내<br/>
                  - 저장된 데이터가 있다면 반복문 이용하여 데이터 호출<br/>
                  - 스케쥴의 상태값이 수락 전 이면 수락, 거절버튼 생성<br/>
                  - 스케쥴의 상태값이 수락 후라면 항목별로 확인 버튼 생성<br/>
                  - 전체 스케쥴 수락 또는 항목별 스케쥴 수락시 상태값 변경 및 메세지 전송<br/><br/>

                  3.프로필 담당<br/>
                  - 마이페이지 버튼 클릭시 로그인 유무 확인하여 회원 프로필 노출<br/>
                  - 수정하기 버튼 클릭시 로그인 유무 확인하여 수정하기 페이지로 이동<br/>
                  - 적용하기 클릭시 암호화된 비밀번호와 입력한 값 확인하여 수정<br/>
                  - null 허용인 항목 체크<br/><br/>

                  <ul className={styles["tag"]}>
                    <li>#Oracle</li>
                    <li>#Eclipse</li>
                    <li>#Visual Studio</li>
                    <li>#Apache Tomcat</li>
                    <li>#JAVA</li>
                    <li>#Java Script</li>
                    <li>#HTML</li>
                    <li>#J-Query</li>
                    <li>#Gson(JSON)</li>
                    <li>#MyBatis</li>
                  </ul>
                </div>
              </div>
              <div className={styles["title"]}>
                <div>영화관 예약 프로그램 구현</div>
                <div>2021-01-20 ~ 2021-02-04</div>
              </div>
              <div className={styles["desc"]}>
                <div>
                  <b>공통 역할 :</b><br/>
                  - 프로젝트 기획 및 스토리보드 작성<br/>
                  - 플로우차트 설계<br/>
                  - 데이터베이스 정의, 설계 및 구현<br/>
                  - 공통 css를 작성 후 규정에 맞게 개발<br/><br/>

                  <b>엔지니어 :</b><br/>
                  - 코드 통합 및 그에 따른 오류를 검출 해결<br/>
                  - 깃 허브 사용시 발생하는 오류를 검출해 수정<br/><br/>

                  1.메인페이지 제작<br/>
                  - ModelAndView 사용<br/>
                  - 페이지에 접속시 json 사용하여 데이터 호출<br/>
                  - addObject 함수 사용하여 JSP로 각종 테이터 넘겨줌<br/>
                  - 영화를 선택하면 영화코드(키 데이터)를 파라미터로 넘겨 상세페이지로 이동<br/>
                  - 상세페이지에서는 해당 영화의 포스터와 이름, 연령대, 개봉상태, 영화설명 그리고 당일날짜 +7일의 예약가능 날짜를 보여줌<br/><br/>

                  2.영화 예약 페이지 제작<br/>
                  -날짜 클릭시 영화코드와 클릭날짜를 파라미터로 넘겨줌<br/>
                  -onreadystatechange를 사용하여 데이터를 받았다면 screening함수에 데이터를 파라미터로 넘겨 호출<br/>
                  -해당 날짜에 예약가능한 영화의 관람가능 연령대와 시간 그리고 상영관 리스트 호출<br/>
                  -상영시간 클릭시 지정해놓은 해당시간 인덱스 번호와 json으로 받아온 영화정보 파라미터로 전송 후 영화관 좌석 보여주는 페이지로 이동

                  <ul className={styles["tag"]}>
                    <li>#Oracle</li>
                    <li>#Eclipse</li>
                    <li>#Apache Tomcat</li>
                    <li>#JAVA</li>
                    <li>#Java Script</li>
                    <li>#HTML</li>
                    <li>#Ajax</li>
                    <li>#Gson(JSON)</li>
                    <li>#MyBatis</li>
                  </ul>
                </div>
              </div>
              <div className={styles["title"]}>
                <div>쇼핑몰 페이지 구현</div>
                <div>2020-12-21 ~ 2021-01-18</div>
              </div>
              <div className={styles["desc"]}>
              <div>
                <b>공통 역할 :</b><br/>
                - 프로젝트 기획 및 스토리보드 작성<br/>
                - 플로우차트 설계<br/>
                - 데이터베이스 정의, 설계 및 구현<br/>
                - 공통 css를 작성 후 규정에 맞게 개발<br/><br/>

                <b>엔지니어 :</b><br/>
                메인 페이지 제작<br/>
                - DB사용 로그인 구현 및 성공시 페이지 이동<br/>
                - 데이터베이스와 연결하여 메인페이지에서 모든 상품 데이터 호출<br/><br/>

                1.검색기능<br/>
                - DB 조회 조건 검색 기능 구현<br/><br/>

                2.분류기능<br/>
                - 카테고리 버튼을 생성하여 DB에 구분코드 추가 후 카테고리별 검색 기능 구현<br/><br/>

                3.상세페이지<br/>
                - 상품 클릭시 상품번호(키 데이터)를 파라미터로 전송하여 해당 상품 상세페이지로 이동<br/><br/>


                2. 마이페이지 제작<br/>
                - 마이페이지 클릭하면 로그인 되어있는 회원정보 데이터 호출<br/>
                - 수정하기 버튼 클릭시 input 박스 생성하여 수정 기능 가능하게 구현<br/>
                - 핸드폰 번호를 체크하여 본인 확인 후 수정 기능 구현<br/>
                <a href="https://github.com/roodi55/sososo/tree/master/project">
                  <img src={git} alt='git' style={{width: '30px' , padding: '5px 0 0 5px'}}/>
                </a>
                  <ul className={styles["tag"]}>
                    <li>#Oracle</li>
                    <li>#Eclipse</li>
                    <li>#Apache Tomcat</li>
                    <li>#JAVA</li>
                    <li>#Java Script</li>
                    <li>#HTML</li>
                  </ul>
                </div>
              </div>
            </div>            
          </div>
        </section>
        {/* education */}
        <span className={styles["heading"]}>
          <FontAwesomeIcon icon={faPen} ></FontAwesomeIcon>&nbsp;
          Education
        </span>
        <section className={styles["container"]}>
          <div className={styles["timeline_centered"]}>
            {/* fst */}
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>
              <div>
                <div className={styles["connection"]}>방송통신대학교(4년제) 컴퓨터과학과</div>
                <p>편입/재학중</p>
                <div className={styles["period"]}>2023.03 ~</div>
              </div>
            </div>
            <div className={styles["timeline_icon"]}>
            </div>
            <div className={styles["label"]}>
              <div>
                <div className={styles["connection"]}>한국폴리텍대학 안성캠퍼스(2.3년제) 패션디자인과</div>
                <p>졸업 3.74/4.5</p>
                <div className={styles["period"]}>2013.03 ~ 2015.02</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;