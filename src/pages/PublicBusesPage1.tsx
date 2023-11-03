import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PublicBusesPage1.module.css";

const PublicBusesPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/public-buses-page-2");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/public-buses-page-2");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/public-buses-page-2");
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
    <div className={styles.publicBusesPage1}>
      <div className={styles.publicBusesPage1Child} />
      <div className={styles.publicBusesPage1Item} />
      <div className={styles.publicBusesPage1Item} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div
        className={styles.publicBusesPage1Inner1}
        onClick={onGroupContainer1Click}
      >
        <div className={styles.groupChild} />
      </div>
      <div className={styles.publicBus}>Public Bus</div>
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
      <div
        className={styles.publicBusesPage1Child1}
        onClick={onRectangle5Click}
      />
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
      <div className={styles.publicBusesPage1Child2} />
      <img className={styles.image18Icon} alt="" src="/image-181@2x.png" />
      <img
        className={styles.istockphoto1156487275612x612Icon}
        alt=""
        src="/istockphoto1156487275612x612removebgpreview-2@2x.png"
      />
      <div className={styles.publicBusesPage1Child3} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.publicBusesPage1Child4}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.publicBusesPage1Child5}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.publicBusesPage1Child3} />
      <img
        className={styles.publicBusesPage1Child7}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.publicBusesPage1Child9}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainer2Click}>
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

export default PublicBusesPage1;
