import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewMoreEventPage.module.css";

const ViewMoreEventPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/event-details-1-page");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/event-details-1-page");
  }, [navigate]);

  const onImage38Click = useCallback(() => {
    navigate("/event-details-1-page");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/event-details-page");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/event-details-page");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/event-details-page");
  }, [navigate]);

  return (
    <div className={styles.viewMoreEventPage}>
      <div className={styles.viewMoreEventPageChild} />
      <div className={styles.viewMoreEventPageChild} />
      <div className={styles.trendingEvent}>Trending event</div>
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
      <div className={styles.groupParent} onClick={onGroupContainer2Click}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} onClick={onRectangle3Click} />
          <div className={styles.letsPlantTogether}>
            Let’s Plant Together in George Town
          </div>
          <div className={styles.sun19Nov}>{`Sun, 19 Nov `}</div>
        </div>
        <img
          className={styles.image38Icon}
          alt=""
          src="/image-38@2x.png"
          onClick={onImage38Click}
        />
      </div>
      <div className={styles.viewMoreEventPageInner} />
      <div className={styles.letsPlantTogether1}>
        Let’s Plant Together in George Town
      </div>
      <div className={styles.sun19Nov1}>{`Sun, 19 Nov `}</div>
      <div className={styles.electricVehiclesCarsInChar} />
      <div className={styles.groupDiv} onClick={onGroupContainer4Click}>
        <div
          className={styles.rectangleContainer}
          onClick={onGroupContainer3Click}
        >
          <div className={styles.groupItem} onClick={onRectangle5Click} />
          <div className={styles.letsPlantTogether}>
            Why You Should Choose Electric Cars
          </div>
          <div className={styles.sun26Nov}>{`Sun, 26 Nov `}</div>
          <img className={styles.image48Icon} alt="" src="/image-48@2x.png" />
        </div>
      </div>
      <img className={styles.image49Icon} alt="" src="/image-49@2x.png" />
      <div className={styles.details}>Details</div>
    </div>
  );
};

export default ViewMoreEventPage1;
