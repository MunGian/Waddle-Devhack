import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MRTPage1.module.css";

const MRTPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/mrt-page-3");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/mrt-page-2");
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
    <div className={styles.mrtPage1}>
      <img
        className={styles.imgPeopleIndicator1ppl1Icon}
        alt=""
        src="/imgpeopleindicator1ppl-1@2x.png"
      />
      <div className={styles.mrtPage1Child} />
      <div className={styles.mrtPage1Child} />
      <div className={styles.mrt}>MRT</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.decSat}>
        <span className={styles.decSatTxtContainer}>
          <p className={styles.dec}>02 Dec</p>
          <p className={styles.dec}>Sat</p>
        </span>
      </div>
      <div className={styles.mrtPage1Inner} />
      <div className={styles.kajangMrtLine}>Kajang MRT Line 9</div>
      <div className={styles.sungaiBuloh}>Sungai Buloh ~ Kajang</div>
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.check}>Check</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.mrtPage1Child1} alt="" src="/group-3.svg" />
      <img className={styles.mrtPage1Child2} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.mrtPage1Child4}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.mrtPage1Child6}
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

export default MRTPage1;
