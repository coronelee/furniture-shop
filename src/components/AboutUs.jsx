import React from "react";
import styles from "../styles/AboutUs.module.scss";
import { FaAmazon } from "react-icons/fa";
import { AiOutlineAlibaba } from "react-icons/ai";
import { LiaSalesforce } from "react-icons/lia";
export default function AboutUs() {
  return (
    <div className={styles.aboutUs__container}>
      <div className={styles.container__textTop}>
        <div style={{ fontSize: 30 }}>Learn about us</div>
        <div style={{ fontSize: 20, color: 'rgba(55, 55, 55, 1)'}}>
          <hr align="left" width="30" size="1" color="black" />
          It’s short title here
        </div>
      </div>
      <div className={styles.container__blockBottom}>
        <div className={styles.blockBottom__leftPicture}></div>
        <div className={styles.blockBottom__rightBlock}>
          <div className={styles.rb__top}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            rerum optio? Accusantium possimus et iure cupiditate omnis. Illo
            explicabo magni consequatur, reiciendis quos aliquid, minima ipsa
            suscipit omnis voluptates exercitationem? <br />
            <button>More about us</button>
          </div>
          <div className={styles.rb__bot}>
            <FaAmazon />
            <AiOutlineAlibaba />
            <LiaSalesforce />
          </div>
        </div>
      </div>
    </div>
  );
}
