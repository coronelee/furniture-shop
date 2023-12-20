import React from "react";
import styles from "../styles/Furniture.module.scss";
import { TbFaceIdError } from "react-icons/tb";
const Item = ({ item, keyFilt }) => {
  return (
    <>
      {(() => {
        if (keyFilt == 1) {
          return item.key == 1 ? (
            <div className={styles.order}>
              <img src={item.image} alt="" />
              <div className={styles.titleOrder}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <button>Order now</button>
            </div>
          ) : (
            ""
          );
        } else if (keyFilt == 3) {
          return item.key == 3 ? (
            <div className={styles.order}>
              <img src={item.image} alt="" />
              <div className={styles.titleOrder}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <button>Order now</button>
            </div>
          ) : (
            ""
          );
        } else if (keyFilt == 4) {
          return item.key == 4 ? (
            <div className={styles.order}>
              <img src={item.image} alt="" />
              <div className={styles.titleOrder}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <button>Order now</button>
            </div>
          ) : (
            ""
          );
        } else if (keyFilt == 0) {
          return (
            <div className={styles.order}>
              <img src={item.image} alt="" />
              <div className={styles.titleOrder}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
              <button>Order now</button>
            </div>
          );
        }
        else return (<TbFaceIdError style={{width:100, height:100}}/>)
      })()}
    </>
  );{}
};

export default Item;
