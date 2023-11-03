import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MRTPage2.module.css";

const MRTPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/mrt-page-1");
  }, [navigate]);

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
    <div className={styles.mrtPage2}>
      <div className={styles.mrtPage2Child} />
      <div className={styles.mrtPage2Child} />
      <div className={styles.kajangMrtLine}>Kajang MRT Line 9</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.mrtPage2Inner} />
      <div className={styles.klangValley}>Klang Valley - Kajang MRT Line 9</div>
      <div className={styles.sungaiBulohContainer}>
        <span className={styles.sungaiBulohContainer1}>
          <p className={styles.sungaiBuloh}>Sungai Buloh ~ Kajang</p>
          <p className={styles.sungaiBuloh}>&nbsp;</p>
          <p className={styles.stationsLine}>
            31 Stations , Line Length : 51 KM
          </p>
        </span>
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.mrtPage2Child1} />
      <div className={styles.mrtPage2Child2} />
      <div className={styles.mrtPage2Child3} />
      <div className={styles.mrtPage2Child4} />
      <img className={styles.lineIcon} alt="" src="/line-56.svg" />
      <img className={styles.mrtPage2Child5} alt="" src="/line-56.svg" />
      <img className={styles.mrtPage2Child6} alt="" src="/line-56.svg" />
      <img className={styles.mrtPage2Child7} alt="" src="/line-56.svg" />
      <img className={styles.mrtPage2Child8} alt="" src="/line-56.svg" />
      <div className={styles.mrtPage2Child9} />
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
      <img className={styles.mrtPage2Child10} alt="" src="/group-3.svg" />
      <img className={styles.mrtPage2Child11} alt="" src="/group-3.svg" />
      <div className={styles.mrtPage2Child12} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.mrtPage2Child14}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.mrtPage2Child12} />
      <img
        className={styles.mrtPage2Child16}
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

export default MRTPage2;
