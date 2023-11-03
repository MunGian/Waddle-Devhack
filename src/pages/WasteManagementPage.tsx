import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WasteManagementPage.module.css";

const WasteManagementPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/home-page");
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
    <div className={styles.wasteManagementPage}>
      <div className={styles.wasteManagementPageChild} />
      <div className={styles.wasteManagementPageChild} />
      <div className={styles.wasteManagement}>
        <p className={styles.waste}>{`Waste `}</p>
        <p className={styles.waste}>Management</p>
      </div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.wasteManagementPageInner} />
      <div className={styles.sellingTrash}>Selling Trash</div>
      <div className={styles.howToUse}>How to Use ?</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.wasteManagementPageChild1} />
      <img
        className={styles.recyclingGarbageBinDoodleIIcon}
        alt=""
        src="/recyclinggarbagebindoodleiconvector31407233removebgpreview-1@2x.png"
      />
      <img
        className={styles.dxojae3u8aavyh8RemovebgPreviIcon}
        alt=""
        src="/dxojae3u8aavyh8removebgpreview-1@2x.png"
      />
      <div className={styles.waitOurDriverContainer}>
        <p className={styles.waste}>Wait our driver to pick up</p>
        <p className={styles.waste}>at your address</p>
      </div>
      <div className={styles.deliverTheTrashContainer}>
        <p className={styles.waste}>Deliver the trash to the</p>
        <p className={styles.waste}>nearest recycling centre</p>
      </div>
      <div className={styles.learnNow}>Learn now</div>
      <div className={styles.dropBox}>Drop Box</div>
      <img
        className={styles.istockphoto1355770547170667aIcon}
        alt=""
        src="/istockphoto1355770547170667aremovebgpreview-1@2x.png"
      />
      <div className={styles.howToSell}>How to Sell and Order Trash ?</div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-133.svg" />
      <div className={styles.balance}>{`Balance : `}</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.rm10000}>RM 100.00</div>
      <div className={styles.wasteManagementPageChild2} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.wasteManagementPageChild3}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.wasteManagementPageChild4}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.wasteManagementPageChild2} />
      <img
        className={styles.wasteManagementPageChild6}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.wasteManagementPageChild8}
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

export default WasteManagementPage;
