import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewMoreEventPage.module.css";

const ViewMoreEventPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  return (
    <div className={styles.viewMoreEventPage}>
      <div className={styles.myEvent}>My Event</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.exploreMore}>Explore more...</div>
        <img className={styles.icon} alt="" src="/54481-1@2x.png" />
      </div>
      <div className={styles.electricVehiclesCarsInChar} />
      <div className={styles.viewMoreEventPageChild} />
      <div className={styles.viewMoreEventPageItem} />
      <div className={styles.viewMoreEventPageInner} />
      <div className={styles.recyclingWorkshop}>Recycling Workshop</div>
      <div className={styles.sun19Nov}>{`Sun, 19 Nov `}</div>
      <div className={styles.wed22Nov}>{`Wed, 22 Nov `}</div>
      <div className={styles.advantagesOfElectricContainer}>
        <p className={styles.advantagesOf}>{`Advantages of `}</p>
        <p className={styles.advantagesOf}>{`Electric Vehicles   `}</p>
      </div>
      <img
        className={styles.wasteManagementRecyclingGarIcon}
        alt=""
        src="/wastemanagementrecyclinggarbagesortingiconvector28974935removebgpreview-1@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <div className={styles.communityEvent}>Community Event</div>
    </div>
  );
};

export default ViewMoreEventPage;
