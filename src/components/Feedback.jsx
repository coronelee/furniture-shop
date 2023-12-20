import React from "react";
import styles from "../styles/Review.module.scss";
import { TiStarFullOutline } from "react-icons/ti";
const Feedback = ({ item }) => {
  return (
    <div className={styles.client}>
      <img src={item.image} alt="" />
      <div className={styles.client__rightBlock}>
        <div className={styles.client__title}>{item.name}</div>
        <div className={styles.client__date}>{item.date}</div>
        <div className={styles.client__text}>{item.text}</div>
        <TiStarFullOutline color="rgb(223, 224, 0)" style={{width:20, height:20}}/> 
        <TiStarFullOutline color="rgb(223, 224, 0)" style={{width:20, height:20}}/>
        <TiStarFullOutline color="rgb(223, 224, 0)" style={{width:20, height:20}}/>
        <TiStarFullOutline color="rgb(223, 224, 0)" style={{width:20, height:20}}/>
        <TiStarFullOutline color="rgb(223, 224, 0)" style={{width:20, height:20}}/>
      </div>
    </div>
  );
};

export default Feedback;
