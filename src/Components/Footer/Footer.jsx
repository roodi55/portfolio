import styles from "./Footer.module.css";

import so_mimo from '../images/so_mimo.png';

export default function Footer() {

    return (
        <div className={styles["main-footer"]}>
            <div className={styles["copyright"]}>
                <img className={styles["logo-img"]} src={so_mimo} alt="logo" />
                <p>made by sojeong</p>
            </div>
        </div>

    );
};