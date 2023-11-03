import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunityEventPage.module.css";

const CommunityEventPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/view-more-event-page");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/view-more-event-page1");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/event-details-1-page");
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
    <div className={styles.communityEventPage}>
      <div className={styles.communityEventPageChild} />
      <div className={styles.communityEventPageItem} />
      <div className={styles.communityEventPageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.ellipseDiv} />
      <div className={styles.communityEvent}>Community Event</div>
      <img className={styles.lineIcon} alt="" src="/line-39@2x.png" />
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.communityEventPageChild3} />
      <div className={styles.youHaveJoinedContainer}>
        <span>{`You have joined `}</span>
        <span className={styles.events}>2 events</span>
        <span>{` in this month !!!             `}</span>
      </div>
      <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
      <div className={styles.trendingEvent}>Trending event</div>
      <div className={styles.myEvent}>My event</div>
      <div className={styles.recyclingWorkshop}>Recycling Workshop</div>
      <div className={styles.sun19Nov}>{`Sun, 19 Nov `}</div>
      <div className={styles.wed22Nov}>{`Wed, 22 Nov `}</div>
      <div
        className={styles.advantagesOfElectric}
      >{`Advantages of Electric Vehicles   `}</div>
      <div className={styles.image29Parent} onClick={onGroupContainerClick}>
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        <div className={styles.viewAll}>View All</div>
      </div>
      <div className={styles.image30Parent} onClick={onGroupContainer1Click}>
        <img className={styles.image30Icon} alt="" src="/image-29@2x.png" />
        <div className={styles.viewAll}>View All</div>
      </div>
      <div className={styles.communityEventPageChild4} />
      <img
        className={styles.wasteManagementRecyclingGarIcon}
        alt=""
        src="/wastemanagementrecyclinggarbagesortingiconvector28974935removebgpreview-1@2x.png"
      />
      <div className={styles.communityEventPageChild5} />
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <div className={styles.rectangleParent} onClick={onGroupContainer2Click}>
        <div className={styles.groupChild} />
        <div className={styles.letsPlantTogether}>
          Let’s Plant Together in George Town
        </div>
        <div className={styles.sun19Nov1}>{`Sun, 19 Nov `}</div>
        <img className={styles.image38Icon} alt="" src="/image-381@2x.png" />
      </div>
      <div className={styles.communityEventPageChild6} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.communityEventPageChild7}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.communityEventPageChild8}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.communityEventPageChild6} />
      <img
        className={styles.communityEventPageChild11}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.communityEventPageChild13}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </div>
      <div
        className={styles.rectangleContainer}
        onClick={onFrameContainer2Click}
      >
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

export default CommunityEventPage;
