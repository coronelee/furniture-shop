import React, {useState} from "react";
import styles from "../styles/Furniture.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import Item from "./Item.jsx";
export default function Furniture() {
  const items = [
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(1).png",
      key: 1,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(2).png",
      key: 3,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(3).png",
      key: 4,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(4).png",
      key: 4,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(5).png",
      key: 4,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(6).png",
      key: 4,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(7).png",
      key: 2,
    },
    {
      title: "Furniture Name",
      description:
        "It is a long estiabs lished fact that a reader will be the service.",
      image: "../../public/orders/order(8).png",
      key:3,
    },
  ];
  
  const [keyFilt, setKeyFilt]  = useState(0);

  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer__content}>
        <div className={styles.topText}>
          <div className={styles.topText__first}>Our Furniture</div>
          <div className={styles.topText__second}>
            It is a long established fact that a reader will be distracted by
            the service.
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.panel__search}>
            <input type="text" placeholder="Search a furniture" />
            <button>
              <IoSearchOutline />
            </button>
          </div>
          <div className={styles.panel__filter}>
            <button onClick={() => setKeyFilt(0)}>All</button>
            <button onClick={() => setKeyFilt(1)}>Chair</button>
            <button onClick={() => setKeyFilt(2)}>Table</button>
            <button onClick={() => setKeyFilt(3)}>Bed</button>
            <button onClick={() => setKeyFilt(4)}>Sofa</button>
            <button onClick={() => setKeyFilt(5)}>Wardrobe</button>
            <button onClick={() => setKeyFilt(6)}>Almirah</button>
            <button onClick={() => setKeyFilt(7)}>Dimple</button>
            <button onClick={() => setKeyFilt(8)}>Rack</button>
            <button onClick={() => setKeyFilt(9)}>Stand</button>
          </div>
        </div>
        <div className={styles.orders}>
          {items.map((item, index) => (
            <Item key={index} item={item} keyFilt={keyFilt}/>
          ))}
        </div>
      </div>
    </div>
  );
}
