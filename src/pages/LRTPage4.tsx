import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LRTPage4.module.css";

const LRTPage4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/lrt-page-1");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/lrt-page-1");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/lrt-page-1");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/lrt-page-1");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/lrt-page-1");
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
    <div className={styles.lrtPage4}>
      <div className={styles.lrtPage4Child} />
      <div className={styles.lrtPage4Item} />
      <div className={styles.lrtPage4Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.lrtPage4Inner1} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.lrt}>LRT</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/1641201removebgpreview-1@2x.png"
      />
      <img
        className={styles.eps10BluePinPointOrLocatiIcon}
        alt=""
        src="/eps10bluepinpointorlocationsolidiconforwebsiteuiandmobileisolatedonwhitebackgroundfreevectorremovebgpreview-1@2x.png"
      />
      <div className={styles.currentLocation}>Current Location</div>
      <div className={styles.whereTo}>Where To ?</div>
      <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
      <div className={styles.lrtPage4Inner2} onClick={onGroupContainer2Click}>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainer3Click}>
        <div className={styles.groupInner} />
        <div className={styles.date}>Date</div>
      </div>
      <div className={styles.pax}>Pax</div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
        <div className={styles.groupChild1} />
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.lrtPage4Child1} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.lrtPage4Child2} alt="" src="/group-3.svg" />
      <img className={styles.lrtPage4Child3} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.lrtPage4Child1} />
      <img
        className={styles.lrtPage4Child5}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.lrtPage4Child7}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </div>
      <div className={styles.frameDiv} onClick={onFrameContainer2Click}>
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

export default LRTPage4;
