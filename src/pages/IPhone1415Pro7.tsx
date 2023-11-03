import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro7.module.css";

const IPhone1415Pro7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onResetPasswordTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onBackToLoginClick = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro7}>
      <div className={styles.frame}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          alt=""
          src="/line-21.svg"
          onClick={onLineIconClick}
        />
        <div className={styles.forgotPassword}>Forgot Password?</div>
        <div className={styles.wellSendReset}>
          We’ll send reset instructions to your email
        </div>
        <div className={styles.frameInner} />
        <div className={styles.namegmailcom}>name@gmail.com</div>
        <img className={styles.userIcon} alt="" src="/user.svg" />
        <div className={styles.email}>{`Email `}</div>
      </div>
      <div className={styles.iphone1415Pro7Inner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.resetPassword} onClick={onResetPasswordTextClick}>
        Reset Password
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.backToLogin} onClick={onBackToLoginClick}>
          Back to login
        </div>
      </div>
      <img
        className={styles.arrowLeftCircleIcon}
        alt=""
        src="/arrowleftcircle.svg"
      />
      <div className={styles.dontHaveAccountContainer}>
        <span>{`Don’t have account ?  `}</span>
        <span className={styles.signUp}>Sign Up</span>
      </div>
    </div>
  );
};

export default IPhone1415Pro7;
