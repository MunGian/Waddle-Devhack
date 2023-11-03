import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarpoolPage21.module.css";

const CarpoolPage21: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/carpool-page-21");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.carpoolPage2}>
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <div className={styles.carpoolPage2Child} />
      <div className={styles.carpoolPage2Item} />
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.chooseThisPickUp}>Choose This Pick-Up</div>
      </div>
      <div className={styles.carpoolPage2Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.usmCafeteriaKembara}>
        USM Cafeteria Kembara L05
      </div>
      <div className={styles.addPickUpNotes}>Add pick-up notes</div>
      <div className={styles.jalanUniversitiMukimContainer}>
        <p className={styles.jalanUniversitiMukim}>
          Jalan Universiti, Mukim 13 Paya Terubong,
        </p>
        <p className={styles.jalanUniversitiMukim}>
          11800, Timur Laut, Pulau Pinang, Malaysia
        </p>
      </div>
      <img
        className={styles.pencilFlatBlueColorIconVe}
        alt=""
        src="/pencilflatbluecoloriconvector5285592removebgpreview-1@2x.png"
      />
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <img className={styles.image23Icon} alt="" src="/image-241@2x.png" />
    </div>
  );
};

export default CarpoolPage21;
