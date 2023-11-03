import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro12.module.css";

const IPhone1415Pro12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-11");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro12}>
      <div className={styles.iphone1415Pro12Child} />
      <img
        className={styles.iphone1415Pro12Item}
        alt=""
        src="/group-183592.svg"
      />
      <img
        className={styles.iphone1415Pro12Inner}
        alt=""
        src="/line-2.svg"
        onClick={onLineIconClick}
      />
      <div className={styles.createYourAccount}>Create your account now</div>
      <div className={styles.getStartedWith}>Get started with Waddle</div>
      <div className={styles.codeIsSentContainer}>
        <p className={styles.codeIsSent}>Code is sent.</p>
        <p className={styles.codeIsSent}>Please verify your code</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.iphone1415Pro12Child1} />
      <div className={styles.iphone1415Pro12Child2} />
      <div className={styles.iphone1415Pro12Child3} />
      <div className={styles.didntGetTheContainer}>
        <span>{`Didn’t get the code ? `}</span>
        <span className={styles.resend}>Resend</span>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} onClick={onRectangle4Click} />
        <div className={styles.next} onClick={onNextTextClick}>
          Next
        </div>
      </div>
    </div>
  );
};

export default IPhone1415Pro12;
