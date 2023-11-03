import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MRTPage3.module.css";

const MRTPage3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/mrt-page-1");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onCurrentLocationTextClick = useCallback(() => {
    navigate("/mrt-page-1");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/mrt-page-1");
  }, [navigate]);

  const onPaxTextClick = useCallback(() => {
    navigate("/mrt-page-1");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
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
    <div className={styles.mrtPage3}>
      <div className={styles.mrtPage3Child} />
      <div className={styles.mrtPage3Item} />
      <div className={styles.mrtPage3Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.mrtPage3Inner1} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.mrt}>MRT</div>
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
      <div
        className={styles.currentLocation}
        onClick={onCurrentLocationTextClick}
      >
        Current Location
      </div>
      <div className={styles.whereTo}>Where To ?</div>
      <img className={styles.vectorIcon} alt="" src="/vector14.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector14.svg" />
      <div className={styles.mrtPage3Inner2}>
        <div className={styles.groupInner} />
      </div>
      <div className={styles.rectangleParent} onClick={onGroupContainer3Click}>
        <div className={styles.groupInner} />
        <div className={styles.date}>Date</div>
      </div>
      <div className={styles.pax} onClick={onPaxTextClick}>
        Pax
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
        <div className={styles.groupChild1} />
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.mrtPage3Child1} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.mrtPage3Child2} alt="" src="/group-3.svg" />
      <img className={styles.mrtPage3Child3} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.mrtPage3Child1} />
      <img
        className={styles.mrtPage3Child5}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.mrtPage3Child7}
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

export default MRTPage3;
