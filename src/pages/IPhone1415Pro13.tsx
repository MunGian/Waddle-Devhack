import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro13.module.css";

const IPhone1415Pro13: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-12");
  }, [navigate]);

  const onDontHaveAccountClick = useCallback(() => {
    navigate("/iphone-14-15-pro-6");
  }, [navigate]);

  const onForgetPasswordTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-7");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro13}>
      <div className={styles.iphone1415Pro13Child} />
      <img
        className={styles.iphone1415Pro13Item}
        alt=""
        src="/line-2.svg"
        onClick={onLineIconClick}
      />
      <div
        className={styles.dontHaveAccountContainer}
        onClick={onDontHaveAccountClick}
      >
        <span>{`Don’t have account ?  `}</span>
        <span className={styles.signUp}>Sign Up</span>
      </div>
      <div
        className={styles.forgetPassword}
        onClick={onForgetPasswordTextClick}
      >
        Forget Password?
      </div>
      <img
        className={styles.iphone1415Pro13Inner}
        alt=""
        src="/group-183591.svg"
      />
      <div className={styles.welcomeToWaddleContainer}>
        <p className={styles.welcomeTo}>{`Welcome To `}</p>
        <p className={styles.welcomeTo}>Waddle</p>
      </div>
      <div className={styles.emailOrUsername}>Email or Username</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.usersIcon} alt="" src="/users.svg" />
        <div className={styles.namegmailcom}>name@gmail.com</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.password}>Password</div>
      </div>
      <div className={styles.password1}>Password</div>
      <img className={styles.lockIcon} alt="" src="/lock.svg" />
      <div className={styles.groupParent}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} onClick={onRectangle2Click} />
          <div className={styles.signIn}>Sign in</div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.signInWrapper} onClick={onGroupContainer3Click}>
          <div className={styles.signIn}>Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default IPhone1415Pro13;
