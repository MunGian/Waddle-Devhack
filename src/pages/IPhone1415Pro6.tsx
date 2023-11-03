import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro6.module.css";

const IPhone1415Pro6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-10");
  }, [navigate]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/iphone-14-15-pro-11");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-11");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro6}>
      <div className={styles.iphone1415Pro6Child} />
      <img
        className={styles.iphone1415Pro6Item}
        alt=""
        src="/group-183592.svg"
      />
      <img
        className={styles.iphone1415Pro6Inner}
        alt=""
        src="/line-2.svg"
        onClick={onLineIconClick}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <div
        className={styles.haveAnAccountContainer}
        onClick={onHaveAnAccountClick}
      >
        <span>{` Have an account ?  `}</span>
        <span className={styles.login}>Login</span>
      </div>
      <div className={styles.password}>Password</div>
      <div className={styles.username}>Username</div>
      <img className={styles.lockIcon} alt="" src="/lock1.svg" />
      <div className={styles.iphone1415Pro6Child1} />
      <div className={styles.createYourAccount}>Create your account now</div>
      <img className={styles.usersIcon} alt="" src="/users1.svg" />
      <div className={styles.iphone1415Pro6Child2} />
      <div className={styles.namegmailcom}>name@gmail.com</div>
      <img className={styles.userIcon} alt="" src="/user.svg" />
      <div className={styles.username1}>Username</div>
      <div className={styles.password1}>Password</div>
      <div className={styles.enterYourPassword}>Enter Your Password Again</div>
      <img className={styles.lockIcon1} alt="" src="/lock1.svg" />
      <div className={styles.frameParent}>
        <div className={styles.polygonParent}>
          <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.groupItem} onClick={onRectangle6Click} />
        <div
          className={styles.signUp}
          onClick={onSignUpTextClick}
        >{`Sign up `}</div>
      </div>
      <div className={styles.password2}>Password</div>
      <div className={styles.email}>{`Email `}</div>
      <div className={styles.getStartedWith}>Get started with Waddle</div>
      <div className={styles.orSignUp}>Or Sign Up using</div>
      <img className={styles.vectorIcon} alt="" src="/vector32.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector33.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector34.svg" />
    </div>
  );
};

export default IPhone1415Pro6;
