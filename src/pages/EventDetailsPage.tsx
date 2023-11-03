import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EventDetailsPage.module.css";

const EventDetailsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/view-more-event-page");
  }, [navigate]);

  return (
    <div className={styles.eventDetailsPage}>
      <div className={styles.eventDetailsPageChild} />
      <div className={styles.eventDetailsPageChild} />
      <div className={styles.details}>Details</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.whyYouShouldContainer}>
        <p className={styles.whyYouShould}>{`Why You Should Choose `}</p>
        <p className={styles.whyYouShould}>Electric Cars in Bayan Lepas</p>
      </div>
      <div className={styles.exploringTheProsContainer}>
        <p className={styles.whyYouShould}>
          Exploring the pros of having an electric car
        </p>
        <p className={styles.whyYouShould}>
          and positive impacts of it towards environment
        </p>
      </div>
      <div className={styles.participants}>Participants</div>
      <div className={styles.eventDetailsPageInner} />
      <div className={styles.joinThis}>Join this !</div>
      <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
      <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
      <img className={styles.image45Icon} alt="" src="/image-45@2x.png" />
      <img className={styles.image47Icon} alt="" src="/image-47@2x.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.div}>15+</div>
      <div className={styles.div1}>19</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.time}>Time</div>
      <div className={styles.ticket}>Ticket</div>
      <img
        className={styles.screenshot20231102121037RIcon}
        alt=""
        src="/screenshot-20231102-121037removebgpreview-1@2x.png"
      />
      <div className={styles.sun26Nov}>{`Sun,26 Nov `}</div>
      <div className={styles.bayanLepas}>Bayan Lepas</div>
      <div className={styles.date}>Date</div>
      <div className={styles.venue}>Venue</div>
      <div className={styles.am}>{`16:00 -  18:00 AM `}</div>
      <div className={styles.freeOfCharge}>Free of Charge</div>
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
      <img className={styles.image50Icon} alt="" src="/image-50@2x.png" />
    </div>
  );
};

export default EventDetailsPage;
