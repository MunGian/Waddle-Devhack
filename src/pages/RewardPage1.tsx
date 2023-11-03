import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RewardPage1.module.css";

const RewardPage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/reward-page-2");
  }, [navigate]);

  const onProgressTextClick = useCallback(() => {
    navigate("/reward-page");
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
    <div className={styles.rewardPage1}>
      <div className={styles.rewardPage1Child} />
      <div className={styles.rewardPage1Item} />
      <div className={styles.rewardPage1Inner} onClick={onRectangle2Click} />
      <div className={styles.progress} onClick={onProgressTextClick}>
        Progress
      </div>
      <div className={styles.newRewards}>
        <p className={styles.new}>New</p>
        <p className={styles.new}>Rewards</p>
      </div>
      <div className={styles.myRewards} onClick={onMyRewardsTextClick}>
        <p className={styles.new}>{`My `}</p>
        <p className={styles.new}>Rewards</p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rewardPage1Child1} />
      <img className={styles.tng1Icon} alt="" src="/tng-1@2x.png" />
      <div className={styles.lineDiv} />
      <div className={styles.rewardPage1Child2} />
      <div className={styles.pts}>10000 pts</div>
      <div className={styles.touchNGo}>Touch N Go Credit</div>
      <div className={styles.rm10}>RM 10</div>
      <div className={styles.rewardPage1Child3} />
      <div className={styles.rewardPage1Child4} />
      <div className={styles.rewardPage1Child5} />
      <div className={styles.rewardPage1Child6} />
      <div className={styles.pts1}>10000 pts</div>
      <div className={styles.waddleCashbackVoucher}>
        Waddle Cashback voucher
      </div>
      <div className={styles.rm101}>RM 10</div>
      <div className={styles.rewardPage1Child7} />
      <div className={styles.rewardPage1Child8} />
      <div className={styles.rewardPage1Child9} />
      <div className={styles.rewardPage1Child10} />
      <div className={styles.pts2}>10000 pts</div>
      <div className={styles.grabfoodEvoucher}>GrabFood eVoucher</div>
      <div className={styles.rm102}>RM 10</div>
      <div className={styles.rewardPage1Child11} />
      <div className={styles.rewardPage1Child12} />
      <div className={styles.rewardPage1Child13} />
      <div className={styles.rewardPage1Child14} />
      <div className={styles.pts3}>10000 pts</div>
      <div className={styles.paypalTransfer}>PayPal Transfer</div>
      <div className={styles.rm103}>RM 10</div>
      <img className={styles.groupIcon} alt="" src="/group-18371.svg" />
      <img className={styles.grab1Icon} alt="" src="/grab-1@2x.png" />
      <img className={styles.paypal1Icon} alt="" src="/paypal-1@2x.png" />
      <div className={styles.rewardPage1Child15} />
      <div className={styles.rewardPage1Child16} />
      <img
        className={styles.rewardPage1Child17}
        alt=""
        src="/group-18312.svg"
      />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.rewardPage1Child18} alt="" src="/group-3.svg" />
      <img className={styles.rewardPage1Child19} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.rewardPage1Child16} />
      <img
        className={styles.rewardPage1Child21}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.rewardPage1Child22} />
      <img
        className={styles.rewardPage1Child23}
        alt=""
        src="/group-18351.svg"
      />
      <img
        className={styles.rewardPage1Child24}
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

export default RewardPage1;
