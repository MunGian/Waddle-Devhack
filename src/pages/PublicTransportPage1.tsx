import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PublicTransportPage1.module.css";

const PublicTransportPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/public-buses-page-1");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/mrt-page-3");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/lrt-page-3");
  }, [navigate]);

  const onFrameContainer9Click = useCallback(() => {
    navigate("/train-services-page-1");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/public-transport-page1");
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
    navigate("/home-page");
  }, [navigate]);

  const onPngtreeAvatarIconProfileIcImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.publicTransportPage}>
      <div className={styles.publicTransportPageChild} />
      <div className={styles.publicTransportPageItem} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.publicTransport}>Public Transport</div>
        <img className={styles.frameItem} alt="" src="/group-18317.svg" />
        <div className={styles.frameInner} />
        <img className={styles.frameItem} alt="" src="/group-18317.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.publicTransport}>Public Transport</div>
        <img className={styles.frameItem} alt="" src="/group-18317.svg" />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.publicTransport2}>
        <p className={styles.public}>{`Public `}</p>
        <p className={styles.public}>Transport</p>
      </div>
      <div className={styles.wasteManagement}>
        <p className={styles.public}>{`Waste `}</p>
        <p className={styles.public}>Management</p>
      </div>
      <div className={styles.carpool}>Carpool</div>
      <img
        className={styles.publicTransportPageInner}
        alt=""
        src="/group-18333.svg"
      />
      <div className={styles.publicTransportPageItem} />
      <div className={styles.waddle}>Waddle</div>
      <img
        className={styles.publicTransportPageChild2}
        alt=""
        src="/group-18359.svg"
      />
      <div className={styles.frameParent} onClick={onFrameContainer3Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameItem} alt="" src="/group-18317.svg" />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.publicBuses}>Public Buses</div>
        <img className={styles.frameChild6} alt="" src="/group-18374.svg" />
      </div>
      <div className={styles.frameGroup} onClick={onFrameContainer5Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameItem} alt="" src="/group-18317.svg" />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.massRapidTransitContainer}>
          <p className={styles.public}>Mass Rapid Transit</p>
          <p className={styles.public}>(MRT)</p>
        </div>
        <img className={styles.frameChild10} alt="" src="/group-18376.svg" />
      </div>
      <div className={styles.frameContainer} onClick={onFrameContainer7Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameItem} alt="" src="/group-18317.svg" />
          <div className={styles.frameInner} />
        </div>
        <img className={styles.frameChild14} alt="" src="/group-18375.svg" />
        <div className={styles.lightRailTransitContainer}>
          <p className={styles.public}>Light Rail Transit</p>
          <p className={styles.public}>(LRT)</p>
        </div>
      </div>
      <div className={styles.frameParent1} onClick={onFrameContainer9Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameItem} alt="" src="/group-18317.svg" />
          <div className={styles.frameInner} />
        </div>
        <div className={styles.trainServiceKtmbetsContainer}>
          <p className={styles.public}>Train Service</p>
          <p className={styles.public}>(KTMB/ETS)</p>
        </div>
        <img className={styles.frameChild18} alt="" src="/group-18377.svg" />
      </div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.publicTransport7}>Public Transport</div>
      <div className={styles.publicTransportPageChild3} />
      <img
        className={styles.publicTransportPageChild4}
        alt=""
        src="/group-18312.svg"
      />
      <div className={styles.polygonParent}>
        <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
        <div className={styles.frameChild19} />
        <div className={styles.frameChild20} />
      </div>
      <img
        className={styles.publicTransportPageChild5}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.publicTransportPageChild6}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.publicTransportPageChild3} />
      <img
        className={styles.publicTransportPageChild8}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.publicTransportPageChild10}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
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
      <img
        className={styles.pngtreeAvatarIconProfileIc}
        alt=""
        src="/pngtreeavatariconprofileiconmemberloginvectorisolatedpngimage-5247852removebgpreview-1@2x.png"
        onClick={onPngtreeAvatarIconProfileIcImageClick}
      />
    </div>
  );
};

export default PublicTransportPage1;
