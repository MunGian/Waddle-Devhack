import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PublicTransportPage.module.css";

const PublicTransportPage: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const onFrameContainer1Click = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/waste-management-page");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/carpool-page-1");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/side-page");
  }, [navigate]);

  const onPngtreeAvatarIconProfileIcImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.publicTransportPage}>
      <div className={styles.publicTransportPageChild} />
      <div className={styles.publicTransportPageItem} />
      <div className={styles.publicTransportPageItem} />
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.publicTransportPageChild1}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.publicTransportPageChild2}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.publicTransportPageChild4}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.publicTransportPageChild6}
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
      <div className={styles.waddle}>Waddle</div>
      <img
        className={styles.publicTransportPageChild7}
        alt=""
        src="/group-18359.svg"
      />
      <div className={styles.welcomeBack}>Welcome Back ,</div>
      <div className={styles.yuenShenQi}>Yuen Shen Qi Dong</div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleGroup} onClick={onFrameContainer1Click}>
          <div className={styles.frameChild1} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameChild2} alt="" src="/group-18317.svg" />
          <div className={styles.frameChild3} />
          <img className={styles.frameChild2} alt="" src="/group-18317.svg" />
          <div className={styles.publicTransport1}>
            <p className={styles.public}>{`Public `}</p>
            <p className={styles.public}>Transport</p>
          </div>
        </div>
      </div>
      <div className={styles.publicTransportPageInner1}>
        <div className={styles.rectangleGroup} onClick={onFrameContainer2Click}>
          <div className={styles.frameChild1} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameChild2} alt="" src="/group-18317.svg" />
          <div className={styles.frameChild3} />
          <div className={styles.wasteManagement}>
            <p className={styles.public}>{`Waste `}</p>
            <p className={styles.public}>Management</p>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
            <div className={styles.groupChild8} />
            <div className={styles.groupChild9} />
            <div className={styles.groupChild10} />
          </div>
        </div>
      </div>
      <div className={styles.publicTransportPageInner2}>
        <div className={styles.rectangleGroup} onClick={onFrameContainer3Click}>
          <div className={styles.frameChild1} />
          <img className={styles.frameChild2} alt="" src="/group-18317.svg" />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild11} />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <div className={styles.communityEvents}>
            <p className={styles.public}>Community</p>
            <p className={styles.public}>Events</p>
          </div>
        </div>
      </div>
      <div className={styles.publicTransportPageInner3}>
        <div className={styles.rectangleGroup} onClick={onFrameContainer4Click}>
          <div className={styles.frameChild1} />
          <div className={styles.publicTransport}>Public Transport</div>
          <img className={styles.frameChild2} alt="" src="/group-18317.svg" />
          <div className={styles.frameChild3} />
          <div className={styles.carpoolServices}>
            <p className={styles.public}>Carpool</p>
            <p className={styles.public}>Services</p>
          </div>
          <div className={styles.frameChild15} />
          <img className={styles.frameChild16} alt="" src="/group-18434.svg" />
        </div>
      </div>
      <div className={styles.publicTransportPageInner4}>
        <div
          className={styles.rectangleParent3}
          onClick={onFrameContainer7Click}
        >
          <div className={styles.frameChild17} />
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild18} />
            <div className={styles.frameChild19} />
            <div className={styles.frameChild20} />
            <div className={styles.frameChild21} />
          </div>
          <div className={styles.frameChild17} />
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild18} />
            <div className={styles.frameChild19} />
            <div className={styles.frameChild20} />
            <div className={styles.frameChild21} />
          </div>
        </div>
      </div>
      <div className={styles.features}>Features</div>
      <img
        className={styles.pngtreeAvatarIconProfileIc}
        alt=""
        src="/pngtreeavatariconprofileiconmemberloginvectorisolatedpngimage-5247852removebgpreview-1@2x.png"
        onClick={onPngtreeAvatarIconProfileIcImageClick}
      />
    </div>
  );
};

export default PublicTransportPage;
