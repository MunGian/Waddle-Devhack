import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PublicBusesPage3.module.css";

const PublicBusesPage3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/public-buses-page-2");
  }, [navigate]);

  const onGroupIcon3Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onGroupIcon4Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.publicBusesPage3}>
      <div className={styles.publicBusesPage3Child} />
      <div className={styles.publicBusesPage3Item} />
      <div className={styles.publicBusesPage3Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.publicBus}>Public Bus</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <img
        className={styles.n1Icon}
        alt=""
        src="/375703054-1328471204703232-1501637449130216725-n-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.publicBusesPage3Child1}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.publicBusesPage3Child2}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.publicBusesPage3Child4}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.publicBusesPage3Child6}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
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

export default PublicBusesPage3;
