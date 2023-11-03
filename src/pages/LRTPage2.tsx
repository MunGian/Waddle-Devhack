import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LRTPage2.module.css";

const LRTPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIcon3Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onGroupIcon4Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.lrtPage2}>
      <div className={styles.lrtPage2Child} />
      <div className={styles.lrtPage2Child} />
      <div className={styles.ampangLrtLine}>Ampang LRT Line 3</div>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <div className={styles.lrtPage2Inner} />
      <div className={styles.klangValley}>Klang Valley - Ampang LRT Line 3</div>
      <div className={styles.sentulTimurContainer}>
        <span className={styles.sentulTimurContainer1}>
          <p className={styles.sentulTimur}>Sentul Timur ~ Ampang</p>
          <p className={styles.sentulTimur}>&nbsp;</p>
          <p className={styles.stationsLine}>
            18 Stations , Line Length : 15 KM
          </p>
        </span>
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.lrtPage2Child1} />
      <div className={styles.lrtPage2Child2} />
      <div className={styles.lrtPage2Child3} />
      <div className={styles.lrtPage2Child4} />
      <img className={styles.lineIcon} alt="" src="/line-56.svg" />
      <img className={styles.lrtPage2Child5} alt="" src="/line-56.svg" />
      <img className={styles.lrtPage2Child6} alt="" src="/line-56.svg" />
      <img className={styles.lrtPage2Child7} alt="" src="/line-56.svg" />
      <img className={styles.lrtPage2Child8} alt="" src="/line-56.svg" />
      <div className={styles.lrtPage2Child9} />
      <div className={styles.station3}>Station 3</div>
      <div className={styles.station5}>Station 5</div>
      <div className={styles.station4}>Station 4</div>
      <div className={styles.station1}>Station 1</div>
      <div className={styles.station2}>Station 2</div>
      <div className={styles.destination}>Destination</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.lrtPage2Child10} alt="" src="/group-3.svg" />
      <img className={styles.lrtPage2Child11} alt="" src="/group-3.svg" />
      <div className={styles.lrtPage2Child12} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.lrtPage2Child14}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.lrtPage2Child12} />
      <img
        className={styles.lrtPage2Child16}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </div>
      <div className={styles.rectangleGroup} onClick={onFrameContainer2Click}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </div>
      <img
        className={styles.iconHome}
        alt=""
        src="/-icon-home.svg"
        onClick={onIconHomeClick}
      />
    </div>
  );
};

export default LRTPage2;
