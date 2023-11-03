import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro11.module.css";

const IPhone1415Pro11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLineIconClick = useCallback(() => {
    navigate("/iphone-14-15-pro-6");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-15-pro-12");
  }, [navigate]);

  const onNextTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-12");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro11}>
      <div className={styles.iphone1415Pro11Child} />
      <img
        className={styles.iphone1415Pro11Item}
        alt=""
        src="/group-183592.svg"
      />
      <img
        className={styles.iphone1415Pro11Inner}
        alt=""
        src="/line-2.svg"
        onClick={onLineIconClick}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.malaysia60}>Malaysia ( +60 )</div>
      </div>
      <div className={styles.countryRegion}>Country / Region</div>
      <div className={styles.enterYourPhone}>Enter your Phone Number</div>
      <div className={styles.createYourAccount}>Create your account now</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.phoneNumber}>Phone Number</div>
      <div className={styles.getStartedWith}>Get started with Waddle</div>
      <img
        className={styles.malaysiaFlagPngXl1Icon}
        alt=""
        src="/malaysiaflagpngxl-1@2x.png"
      />
      <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector16.svg" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} onClick={onRectangle2Click} />
        <div className={styles.next} onClick={onNextTextClick}>
          Next
        </div>
      </div>
    </div>
  );
};

export default IPhone1415Pro11;
