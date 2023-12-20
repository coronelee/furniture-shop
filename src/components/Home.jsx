import styles from "../styles/Home.module.scss";
import { CiSearch, CiInstagram, CiTwitter, CiFacebook } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
function App() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>SQ R3</div>
        <div className={styles.header__buttonsBar}>
          <button>Home</button>
          <button>About</button>
          <button>Service</button>
          <button>Furniture</button>
          <button>Order Now</button>
          <button>
            <CiSearch style={{ height: 40, width: 40 }} />
          </button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.mainContainer__leftBlur}>
          <div className={styles.lb__social}>
            <CiFacebook />
            <CiInstagram />
            <CiTwitter />
          </div>
        </div>
        <div className={styles.mainContainer__rightBlur}>
          <div className={styles.rb__textTop}>
            Enjoy your life in our luxurious furniture
          </div>
          <div className={styles.rb__textCenter}>
            If you are looking for a furniture then you have come to the right
            place.
          </div>
          <button className={styles.rb__button}>Order Now</button>
        </div>
      </div>
      <div className={styles.home__feedback}>
        <div className={styles.hf__sale}>
          <div className={styles.sale__textTop}>120 k</div>
          <div className={styles.sale__textBot}>Furniture Sale</div>
        </div>
        <div className={styles.hf__review}>
          <div className={styles.review__textTop}>98 k</div>
          <div className={styles.review__textBot}>
            Review <FaStar color="yellow" /> (4.5)
          </div>
        </div>
        <div className={styles.hf__categories}>
          <div className={styles.categories__textTop}>125</div>
          <div className={styles.categories__textBot}>Furniture Categories</div>
        </div>
      </div>
    </>
  );
}

export default App;
