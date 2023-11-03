import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarpoolPage2.module.css";

const CarpoolPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/carpool-page-2");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/carpool-page-2");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/carpool-page-1");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/carpool-page-2");
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
    <div className={styles.carpoolPage2}>
      <div className={styles.carpoolPage2Child} />
      <div className={styles.carpoolPage2Child} />
      <div className={styles.carpoolPage2Inner} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupDiv} onClick={onGroupContainer1Click}>
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
      <div className={styles.jalanPenang10000}>
        Jalan Penang, 10000 George Town
      </div>
      <div className={styles.komtarTower}>Komtar Tower</div>
      <div className={styles.kekLokSi}>Kek Lok Si Temple</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.carpoolPage2Child1} />
      <div className={styles.carpoolPage2Child2} />
      <div className={styles.carpoolPage2Child3} />
      <div className={styles.carpoolPage2Child4} />
      <div className={styles.recent}>Recent</div>
      <div className={styles.saved}>Saved</div>
      <div className={styles.suggested}>Suggested</div>
      <div className={styles.chewJetty}>Chew Jetty</div>
      <div className={styles.weldQuay10300}>Weld Quay, 10300 George Town</div>
      <div className={styles.jlnBukitBendera}>
        Jln Bukit Bendera, 11300 Bukit Bendera
      </div>
      <div className={styles.penangHill}>Penang Hill</div>
      <div className={styles.batuFeringhiBeach}>Batu Feringhi Beach</div>
      <img className={styles.image18Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.carpoolPage2Child5} />
      <div className={styles.carpoolPage2Child6} />
      <div className={styles.carpoolPage2Child7} />
      <div className={styles.carpoolPage2Child8} onClick={onRectangle8Click} />
      <div className={styles.queensbayMall}>Queensbay Mall</div>
      <div className={styles.persiaranBayanIndahContainer1}>
        <p className={styles.persiaranBayanIndah}>
          Persiaran Bayan Indah, 11900 Bayan Lepas
        </p>
      </div>
      <div className={styles.jlnBalikPulauContainer1}>
        <p className={styles.persiaranBayanIndah}>
          Jln Balik Pulau, 11500 Air Itam
        </p>
      </div>
      <div className={styles.jalanPenang100001}>
        Jalan Penang, 10000 George Town
      </div>
      <div className={styles.komtarTower1}>Komtar Tower</div>
      <div className={styles.kekLokSi1}>Kek Lok Si Temple</div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.carpoolPage2Child1} />
      <div className={styles.carpoolPage2Child2} />
      <div className={styles.carpoolPage2Child3} />
      <div className={styles.carpoolPage2Child4} />
      <div className={styles.recent}>Recent</div>
      <div className={styles.saved}>Saved</div>
      <div className={styles.suggested}>Suggested</div>
      <div className={styles.chewJetty1}>Chew Jetty</div>
      <div className={styles.weldQuay103001}>Weld Quay, 10300 George Town</div>
      <div className={styles.jlnBukitBendera1}>
        Jln Bukit Bendera, 11300 Bukit Bendera
      </div>
      <div className={styles.penangHill1}>Penang Hill</div>
      <div className={styles.batuFeringhiBeach1}>Batu Feringhi Beach</div>
      <img className={styles.image18Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image19Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.carpoolPage2Child5} />
      <div className={styles.carpoolPage2Child6} />
      <div className={styles.carpoolPage2Child7} />
      <div className={styles.jlnBatuFerringhi}>
        Jln Batu Ferringhi, 11100 George Town
      </div>
      <div className={styles.carpoolPage2Child17} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.carpoolPage2Child18} alt="" src="/group-3.svg" />
      <img className={styles.carpoolPage2Child19} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.carpoolPage2Child17} />
      <img
        className={styles.carpoolPage2Child21}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.carpoolPage2Child23}
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

export default CarpoolPage2;
