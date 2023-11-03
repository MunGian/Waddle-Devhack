import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RewardPage2.module.css";

const RewardPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onProgressTextClick = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onNewRewardsTextClick = useCallback(() => {
    navigate("/reward-page-1");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/reward-page-3");
  }, [navigate]);

  const onCompleteTextClick = useCallback(() => {
    navigate("/reward-page-3");
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
    <div className={styles.rewardPage2}>
      <div className={styles.rewardPage2Child} onClick={onRectangleClick} />
      <div className={styles.rewardPage2Item} onClick={onRectangle1Click} />
      <div className={styles.rewardPage2Inner} />
      <div className={styles.progress} onClick={onProgressTextClick}>
        Progress
      </div>
      <div className={styles.newRewards} onClick={onNewRewardsTextClick}>
        <p className={styles.new}>New</p>
        <p className={styles.new}>Rewards</p>
      </div>
      <div className={styles.myRewards}>
        <p className={styles.new}>{`My `}</p>
        <p className={styles.new}>Rewards</p>
      </div>
      <div className={styles.youHaveNo}>You have no pending exhanges</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.goToMain}>Go to Main Page</div>
      <div className={styles.lineDiv} />
      <div className={styles.rewardPage2Child1} />
      <img className={styles.vectorIcon} alt="" src="/vector20.svg" />
      <div className={styles.processing}>Processing</div>
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector21.svg"
        onClick={onVectorIcon1Click}
      />
      <div className={styles.complete} onClick={onCompleteTextClick}>
        Complete
      </div>
      <div className={styles.rewardPage2Child2} />
      <div className={styles.rewardPage2Child3} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.rewardPage2Child4} alt="" src="/group-3.svg" />
      <img className={styles.rewardPage2Child5} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.rewardPage2Child3} />
      <img
        className={styles.rewardPage2Child7}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.rewardPage2Child8} />
      <img className={styles.rewardPage2Child9} alt="" src="/group-18351.svg" />
      <img
        className={styles.rewardPage2Child10}
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

export default RewardPage2;
