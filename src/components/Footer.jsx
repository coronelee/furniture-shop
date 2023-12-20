import React from "react";
import styles from "../styles/Footer.module.scss";
import {
  CiPhone,
  CiMail,
  CiFacebook,
  CiInstagram,
  CiTwitter,
} from "react-icons/ci";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.container__column}>
          <div className={styles.column__nameComp}>SQ R3</div>
          <div className={styles.column__phone}>
            <CiPhone /> +8801760-007083
          </div>
          <div className={styles.column__email}>
            <CiMail /> uiuxmdomith@gmail.com
          </div>
          <div className={styles.column__social}>
            <CiFacebook />
            <CiInstagram />
            <CiTwitter />
          </div>
        </div>
        <div className={styles.container__column}>
          <div className={styles.column__nameLinks}>Usefull Links</div>
          <div className={styles.column__links}>
            <div>Home</div>
            <div>About Us</div>
            <div>Service</div>
            <div>Furniture</div>
          </div>
        </div>
        <div className={styles.container__column}>
          <div className={styles.column__nameLinks}>FAQ</div>
          <div className={styles.column__links}>
            <div>Lorem Ipsum Dolar</div>
            <div>Lorem Ipsum Dolar Us</div>
            <div>Lorem Ipsum Dolar</div>
            <div>Lorem Ipsum Dolar</div>
          </div>
        </div>
        <div className={styles.container__column}>
          <div className={styles.column__news}>Newsletter</div>
          <input type="text" placeholder="Enter your mail" />{" "}
          <button className={styles.sendButton}>Send</button> <br />
          <button className={styles.downloadButton}>Download App</button>
        </div>
      </div>
    </div>
  );
}
