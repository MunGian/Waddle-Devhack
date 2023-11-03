import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RewardPage3.module.css";

const RewardPage3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/reward-page-2");
  }, [navigate]);

  const onProcessingTextClick = useCallback(() => {
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

  const onRectangle13Click = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onRectangle14Click = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onProgressTextClick = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onNewRewardsTextClick = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.rewardPage3}>
      <div className={styles.rewardPage3Child} />
      <div className={styles.myRewards}>
        <p className={styles.my}>{`My `}</p>
        <p className={styles.my}>Rewards</p>
      </div>
      <div className={styles.rewardPage3Item} />
      <div className={styles.rewardPage3Inner} />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector18.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.processing} onClick={onProcessingTextClick}>
        Processing
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector19.svg" />
      <div className={styles.complete}>Complete</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.pointExchange}>Point Exchange</div>
      <div className={styles.touchNGo}>Touch N Go Credit - RM 10</div>
      <div className={styles.requestDateFulfillmentContainer}>
        <span className={styles.txt}>
          <p className={styles.my}>{`Request Date    `}</p>
          <p className={styles.my}>&nbsp;</p>
          <p className={styles.my}>{`Fulfillment Date `}</p>
        </span>
      </div>
      <div className={styles.div}>
        <span className={styles.txt}>
          <p className={styles.my}>: 29/10/2023</p>
          <p className={styles.my}>&nbsp;</p>
          <p className={styles.my}>: 30/10/2023</p>
        </span>
      </div>
      <div className={styles.rewardPage3Child1} />
      <div className={styles.pts}>10000 pts</div>
      <div className={styles.rewardPage3Child2} />
      <div className={styles.rewardPage3Child3} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.rewardPage3Child4} alt="" src="/group-3.svg" />
      <img className={styles.rewardPage3Child5} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.rewardPage3Child3} />
      <img
        className={styles.rewardPage3Child7}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.rewardPage3Child8} />
      <img className={styles.rewardPage3Child9} alt="" src="/group-18351.svg" />
      <img
        className={styles.rewardPage3Child10}
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
      <div className={styles.rewardPage3Child11} onClick={onRectangle13Click} />
      <div className={styles.rewardPage3Child12} onClick={onRectangle14Click} />
      <div className={styles.progress} onClick={onProgressTextClick}>
        Progress
      </div>
      <div className={styles.newRewards} onClick={onNewRewardsTextClick}>
        <p className={styles.my}>New</p>
        <p className={styles.my}>Rewards</p>
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

export default RewardPage3;
