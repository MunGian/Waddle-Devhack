import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PublicBusesPage2.module.css";

const PublicBusesPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/public-buses-page-1");
  }, [navigate]);

  const onImage5Click = useCallback(() => {
    navigate("/public-buses-page-3");
  }, [navigate]);

  const onGroupIcon3Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onGroupIcon4Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.publicBusesPage2}>
      <div className={styles.publicBusesPage2Child} />
      <div className={styles.publicBusesPage2Item} />
      <div className={styles.publicBusesPage2Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.persiaranBayanIndahContainer}>
          <p className={styles.persiaranBayanIndah}>
            Persiaran Bayan Indah, 11900 Bayan Lepas
          </p>
        </div>
      </div>
      <div className={styles.publicBus}>Public Bus</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.queensbayMall}>Queensbay Mall</div>
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src="/1641201removebgpreview-1@2x.png"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.jalanPenang}>
          Jalan Penang , 10000 George Town
        </div>
      </div>
      <div className={styles.komtarTower}>Komtar Tower</div>
      <img
        className={styles.eps10BluePinPointOrLocatiIcon}
        alt=""
        src="/eps10bluepinpointorlocationsolidiconforwebsiteuiandmobileisolatedonwhitebackgroundfreevectorremovebgpreview-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.image5Icon}
        alt=""
        src="/image-5@2x.png"
        onClick={onImage5Click}
      />
      <div className={styles.atTheMoment}>at the moment......</div>
      <div
        className={styles.publicBusesAvailable}
      >{`Public buses available `}</div>
      <div className={styles.publicBusesPage2Child1} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.publicBusesPage2Child2}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.publicBusesPage2Child3}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.publicBusesPage2Child1} />
      <img
        className={styles.publicBusesPage2Child5}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.publicBusesPage2Child7}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div
        className={styles.rectangleContainer}
        onClick={onGroupContainer2Click}
      >
        <div className={styles.groupInner} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
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

export default PublicBusesPage2;
