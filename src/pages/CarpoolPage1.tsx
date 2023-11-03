import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarpoolPage1.module.css";

const CarpoolPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/carpool-page-21");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/carpool-page-21");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/carpool-page-21");
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
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.carpoolPage1}>
      <div className={styles.carpoolPage1Child} />
      <div className={styles.carpoolPage1Item} />
      <div className={styles.carpoolPage1Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div
        className={styles.carpoolPage1Inner1}
        onClick={onGroupContainer1Click}
      >
        <div className={styles.groupChild} />
      </div>
      <div className={styles.carpool}>Carpool</div>
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
      <div className={styles.rectangleDiv} />
      <div className={styles.carpoolPage1Child1} onClick={onRectangle5Click} />
      <div className={styles.popularDestinations}>Popular destinations</div>
      <div className={styles.savedAddress}>Saved address</div>
      <div className={styles.queensbayMall}>Queensbay Mall</div>
      <div className={styles.persiaranBayanIndahContainer}>
        <p className={styles.persiaranBayanIndah}>
          Persiaran Bayan Indah, 11900 Bayan Lepas
        </p>
      </div>
      <div className={styles.jlnBalikPulauContainer}>
        <p className={styles.persiaranBayanIndah}>
          Jln Balik Pulau, 11500 Air Itam
        </p>
      </div>
      <div className={styles.neverForgetAn}>Never Forget an Address Again!</div>
      <div className={styles.jalanPenang10000}>
        Jalan Penang, 10000 George Town
      </div>
      <div className={styles.komtarTower}>Komtar Tower</div>
      <div className={styles.kekLokSi}>Kek Lok Si Temple</div>
      <div className={styles.add}>Add</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.carpoolPage1Child2} />
      <img className={styles.image18Icon} alt="" src="/image-181@2x.png" />
      <img
        className={styles.istockphoto1156487275612x612Icon}
        alt=""
        src="/istockphoto1156487275612x612removebgpreview-2@2x.png"
      />
      <div className={styles.carpoolPage1Child3} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.carpoolPage1Child4} alt="" src="/group-3.svg" />
      <img className={styles.carpoolPage1Child5} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.carpoolPage1Child3} />
      <img
        className={styles.carpoolPage1Child7}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.carpoolPage1Child9}
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

export default CarpoolPage1;
