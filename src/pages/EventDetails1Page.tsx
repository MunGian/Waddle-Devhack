import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventDetails1Page.module.css";

const EventDetails1Page: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  return (
    <div className={styles.eventDetails1Page}>
      <div className={styles.eventDetails1PageChild} />
      <div className={styles.eventDetails1PageChild} />
      <div className={styles.details}>Details</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.eventDetails1PageInner} />
      <div className={styles.time}>Time</div>
      <div className={styles.ticket}>Ticket</div>
      <img
        className={styles.screenshot20231102121037RIcon}
        alt=""
        src="/screenshot-20231102-121037removebgpreview-1@2x.png"
      />
      <div className={styles.sun19Nov}>{`Sun, 19 Nov `}</div>
      <div className={styles.georgeTown}>George Town</div>
      <div className={styles.date}>Date</div>
      <div className={styles.venue}>Venue</div>
      <div className={styles.am}>{`08:00 -  11:00 AM `}</div>
      <div className={styles.freeOfCharge}>Free of Charge</div>
      <div className={styles.letsPlantTogetherContainer}>
        <p className={styles.letsPlantTogether}>Let’s Plant Together</p>
        <p className={styles.letsPlantTogether}>in George Town</p>
      </div>
      <div className={styles.startPlantingNewContainer}>
        <p
          className={styles.letsPlantTogether}
        >{`Start planting new trees surrounding our living `}</p>
        <p className={styles.letsPlantTogether}>
          areas to make our city greener!
        </p>
      </div>
      <div className={styles.participants}>Participants</div>
      <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      <img
        className={styles.screenshot20231102120838ddIcon}
        alt=""
        src="/screenshot-20231102-120838ddremovebgpreview-1@2x.png"
      />
      <img
        className={styles.screenshot20231102121004RIcon}
        alt=""
        src="/screenshot-20231102-121004removebgpreview-1@2x.png"
      />
      <img className={styles.image42Icon} alt="" src="/image-42@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.joinThis}>Join this !</div>
      <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
      <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
      <img className={styles.image45Icon} alt="" src="/image-45@2x.png" />
      <img className={styles.image47Icon} alt="" src="/image-47@2x.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.div}>30+</div>
      <div className={styles.div1}>34</div>
    </div>
  );
};

export default EventDetails1Page;
