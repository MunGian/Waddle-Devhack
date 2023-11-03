import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone1415Pro10.module.css";

const IPhone1415Pro10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onStartExperienceTextClick = useCallback(() => {
    navigate("/iphone-14-15-pro-6");
  }, [navigate]);

  return (
    <div className={styles.iphone1415Pro10}>
      <div className={styles.iphone1415Pro10Child} />
      <div className={styles.iphone1415Pro10Item} />
      <div className={styles.iphone1415Pro10Inner} />
      <div className={styles.ellipseDiv} />
      <img className={styles.groupIcon} alt="" src="/group-183591.svg" />
      <div className={styles.waddle}>Waddle</div>
      <div className={styles.exploreTheSmartContainer}>
        <p className={styles.exploreTheSmart}>{`Explore the smart cities `}</p>
        <p className={styles.exploreTheSmart}>{`and leaves some `}</p>
        <p className={styles.exploreTheSmart}>sparkles in every place!</p>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector26.svg" />
      <div className={styles.iphone1415Pro10Child1} />
      <img className={styles.vectorIcon1} alt="" src="/vector27.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector28.svg" />
      <div className={styles.iphone1415Pro10Child2} />
      <img className={styles.vectorIcon3} alt="" src="/vector29.svg" />
      <div className={styles.iphone1415Pro10Child3} />
      <img className={styles.vectorIcon4} alt="" src="/vector30.svg" />
      <div className={styles.iphone1415Pro10Child4} />
      <img className={styles.vectorIcon5} alt="" src="/vector31.svg" />
      <div className={styles.rectangleDiv} />
      <div
        className={styles.startExperience}
        onClick={onStartExperienceTextClick}
      >
        Start Experience
      </div>
    </div>
  );
};

export default IPhone1415Pro10;
