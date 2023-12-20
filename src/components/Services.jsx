import React from "react";
import styles from "../styles/Services.module.scss";
import { CiDeliveryTruck, CiCircleCheck, CiStar } from "react-icons/ci";
export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.content__textTop}>
          <div style={{ fontSize: 30 }}>We provide that service</div>
          <div style={{ fontSize: 20 }}>
            <hr align="center" width="100" size="1" color="black" />
            It is a long established fact that a reader will be distracted by
            the service.
          </div>
        </div>
        <div className={styles.content__forms}>
          <div className={styles.form}>
            <div
              className={styles.form__picture}
              style={{ backgroundColor: "#15BCE01A" }}
            >
              <CiDeliveryTruck color="#15BCE0" />
            </div>
            <div className={styles.form__textTop}>Free Delevary</div>
            <div className={styles.form__textBot}>
              It is a long established fact that a reader will be the service.
            </div>
          </div>
          <div className={styles.form}>
            <div
              className={styles.form__picture}
              style={{ backgroundColor: "#E0155E17" }}
            >
              <CiCircleCheck color="#E0155E" />
            </div>
            <div className={styles.form__textTop}>100% Guarnatee</div>
            <div className={styles.form__textBot}>
              It is a long established fact that a reader will be the service.
            </div>
          </div>
          <div className={styles.form}>
            <div
              className={styles.form__picture}
              style={{ backgroundColor: "#151DE01C" }}
            >
              <CiStar color="#151DE0" />
            </div>
            <div className={styles.form__textTop}>Best Quality</div>
            <div className={styles.form__textBot}>
              It is a long established fact that a reader will be the service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
