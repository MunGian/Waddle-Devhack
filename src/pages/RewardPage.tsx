import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RewardPage.module.css";

const RewardPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/reward-page-2");
  }, [navigate]);

  const onNewRewardsTextClick = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onMyRewardsTextClick = useCallback(() => {
    navigate("/reward-page-2");
  }, [navigate]);

  const onGroupIcon3Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onGroupIcon5Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.rewardPage}>
      <img className={styles.rewardPageChild} alt="" src="/rectangle-135.svg" />
      <img className={styles.rewardPageItem} alt="" src="/ellipse-62.svg" />
      <img
        className={styles.rewardPageInner}
        alt=""
        src="/rectangle-1331.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.active}>Active</div>
      <div className={styles.rewardPageChild1} />
      <img className={styles.groupIcon} alt="" src="/group-18371.svg" />
      <div className={styles.waddlePointBalance}>Waddle Point Balance</div>
      <div className={styles.pts}>100 pts</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.youHaveCollectedContainer}>
        <p className={styles.youHaveCollected}>You have collected</p>
        <p className={styles.youHaveCollected}>100 pts this month</p>
      </div>
      <div className={styles.todaysJourney}>TODAY’S JOURNEY</div>
      <img className={styles.vectorIcon} alt="" src="/vector22.svg" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-63.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector23.svg" />
      <img className={styles.rewardPageChild2} alt="" src="/ellipse-64.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector24.svg" />
      <div className={styles.rewardPageChild3} />
      <div className={styles.totalDistance}>Total Distance</div>
      <div className={styles.totalHours}>Total Hours</div>
      <div className={styles.pointsEarned}>Points Earned</div>
      <div className={styles.rewardPageChild4} />
      <div className={styles.rewardPageChild5} />
      <div className={styles.kilometers}>Kilometers</div>
      <div className={styles.div}>0.01</div>
      <div className={styles.points}>Points</div>
      <div className={styles.hours}>Hours</div>
      <div className={styles.div1}>0.00</div>
      <div className={styles.div2}>0</div>
      <div className={styles.rewardPageChild6} />
      <div className={styles.rewardPageChild7} onClick={onRectangle7Click} />
      <div className={styles.rewardPageChild8} onClick={onRectangle8Click} />
      <div className={styles.progress}>Progress</div>
      <div className={styles.newRewards} onClick={onNewRewardsTextClick}>
        <p className={styles.youHaveCollected}>New</p>
        <p className={styles.youHaveCollected}>Rewards</p>
      </div>
      <div className={styles.myRewards} onClick={onMyRewardsTextClick}>
        <p className={styles.youHaveCollected}>{`My `}</p>
        <p className={styles.youHaveCollected}>Rewards</p>
      </div>
      <div className={styles.rewardPageChild9} />
      <div className={styles.rewardPageChild10} />
      <img className={styles.rewardPageChild11} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.rewardPageChild12} alt="" src="/group-3.svg" />
      <img className={styles.rewardPageChild13} alt="" src="/group-3.svg" />
      <div className={styles.rewardPageChild14} />
      <div className={styles.rewardPageChild10} />
      <img
        className={styles.rewardPageChild16}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.rewardPageChild17} />
      <img className={styles.rewardPageChild18} alt="" src="/group-18351.svg" />
      <img
        className={styles.rewardPageChild19}
        alt=""
        src="/group-18351.svg"
        onClick={onGroupIcon5Click}
      />
      <div className={styles.rectangleParent} onClick={onGroupContainer1Click}>
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
      </div>
      <img
        className={styles.iconHome}
        alt=""
        src="/-icon-home1.svg"
        onClick={onIconHomeClick}
      />
    </div>
  );
};

export default RewardPage;
