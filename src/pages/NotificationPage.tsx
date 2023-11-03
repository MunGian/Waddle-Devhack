import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotificationPage.module.css";

const NotificationPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onGroupIcon2Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.notificationPage}>
      <div className={styles.notificationPageChild} />
      <img
        className={styles.notificationPageItem}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIconClick}
      />
      <div className={styles.notificationPageInner} />
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <div className={styles.notificationPageInner} />
      <img
        className={styles.notificationPageChild1}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon2Click}
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
      </div>
      <div className={styles.notifications}>Notifications</div>
      <div className={styles.whatsNew}>Whats New</div>
      <div className={styles.newNotifications}>2 new notifications</div>
      <img className={styles.vectorIcon} alt="" src="/vector25.svg" />
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.buttonChild} />
        <div className={styles.buttonInner} />
      </div>
      <b className={styles.notification}>Notification</b>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-169@2x.png"
      />
      <div className={styles.notificationPageChild2} />
      <div className={styles.unmaskingGreenwashingJoin}>
        Unmasking Greenwashing: Join us in Penang as we uncover the truth behind
        'eco-friendly' claims. Let's protect our ......
      </div>
      <img
        className={styles.notificationPageChild3}
        alt=""
        src="/rectangle-171@2x.png"
      />
      <div className={styles.notificationPageChild4} />
      <div className={styles.theJohorGovernment}>
        The Johor government wants to encourage the people to make full use of
        public transportation, which is why we are ...
      </div>
      <div className={styles.past}>Past</div>
      <div className={styles.hoursAgo}>18 hours ago</div>
      <div className={styles.dayAgo}>1 day ago</div>
      <img
        className={styles.notificationPageChild5}
        alt=""
        src="/rectangle-173@2x.png"
      />
      <div className={styles.notificationPageChild6} />
      <div className={styles.newTrainFleets}>
        New train fleets, track circuit, power supply systems: North-South,
        East-West MRT lines complete renewal works ...
      </div>
      <div className={styles.daysAgo}>5 days ago</div>
      <img
        className={styles.iconHome}
        alt=""
        src="/-icon-home1.svg"
        onClick={onIconHomeClick}
      />
    </div>
  );
};

export default NotificationPage;
