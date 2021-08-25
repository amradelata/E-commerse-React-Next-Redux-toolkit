import styles from "./Checkout.module.css";
import Link from "next/link";
const Checkout = (props) => {
  return (
    <>
      <div className={styles.stepsBar}>
        <div className={styles.step}>
          <div
            className={styles.circle}
            // style={{ backgroundColor: !props.Shipping && "#ef5013" }}
          >
            <div className={styles.stepName}>shipping</div>
            {props.Shipping ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>1</div>
            )}
          </div>

          <div className={styles.line}></div>
        </div>
        {/*  */}

        <div className={styles.step}>
          <div className={styles.circle}>
            <div className={styles.stepName}>payment</div>
            {props.Payment ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>2</div>
            )}
          </div>
          <div className={styles.line}></div>
        </div>

        {/*  */}

        <div className={styles.step}>
          <div className={styles.circle}>
            <div className={styles.stepName}>Done</div>
            {props.Done ? (
              <img src="/./icons/checked.svg" />
            ) : (
              <div className={styles.number}>3</div>
            )}
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
