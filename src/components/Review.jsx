import React from "react";
import styles from "../styles/Review.module.scss";
import Feedback from "./Feedback";
import { CiStar } from "react-icons/ci";
export default function Review() {
  const items = [
    {
      name: "Mr. Jone Ambrose",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi rerum culpa mollitia veritatis! Suscipit ipsam accusantium magni dolore consequuntur illum ipsa numquam! Cupiditate labore deleniti vel ad sequi deserunt quisquam?",
      image: "../../public/clients/client(1).png",
      date: "20 - 07 - 21",
    },
    {
      name: "Miss Kate",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellat fugiat odit sint blanditiis laudantium minus. Tenetur rerum totam cum officiis ducimus sint inventore, ex dolorem facilis sit recusandae! Velit!",
      image: "../../public/clients/client(2).png",
      date: "27 - 02 - 22",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer__content}>
        <div className={styles.content__textTop}>
          <div style={{ fontSize: 30 }}>What say clients about us</div>
          <div style={{ fontSize: 20 }}>
            <hr align="left" width="70" size="1" color="black" />
            It is a long established fact that a reader will be distracted by
            the service.
          </div>
        </div>
        <div className={styles.content__feedback}>
          <div className={styles.feedback__}>
            {items.map((item, index) => (
              <Feedback key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
