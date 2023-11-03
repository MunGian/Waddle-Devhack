import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SubscriptionPage.module.css";

const SubscriptionPage: FunctionComponent = () => {
  const navigate = useNavigate();

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
    <div className={styles.subscriptionPage}>
      <div className={styles.subscriptionPageChild} />
      <div className={styles.subscriptionPageItem} />
      <img
        className={styles.subscriptionPageInner}
        alt=""
        src="/group-18312.svg"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <img
        className={styles.subscriptionPageChild1}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.subscriptionPageItem} />
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <div className={styles.subscriptionPageChild5} />
      <img
        className={styles.subscriptionPageChild6}
        alt=""
        src="/group-18351.svg"
      />
      <img
        className={styles.subscriptionPageChild7}
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
      <div className={styles.subscriptionPageChild8} />
      <img className={styles.vectorIcon} alt="" src="/vector15.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector15.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector15.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector15.svg" />
      <img
        className={styles.subscriptionPageChild9}
        alt=""
        src="/group-18406.svg"
      />
      <div className={styles.waddlePro}>Waddle Pro</div>
      <img className={styles.vectorIcon4} alt="" src="/vector15.svg" />
      <div className={styles.priorityBookingFor}>
        Priority Booking for Rides
      </div>
      <div className={styles.exclusiveDiscountFor}>
        Exclusive Discount for Trasnport
      </div>
      <div className={styles.exclusiveAccessTo}>
        Exclusive Access to Community Forum
      </div>
      <div className={styles.freePickUp}>Free Pick Up on Recyclable Item</div>
      <div className={styles.exclusiveProRewards}>Exclusive Pro Rewards</div>
      <div className={styles.rm4}>RM 4</div>
      <div className={styles.div}>99</div>
      <img className={styles.lineIcon} alt="" src="/line-61.svg" />
      <div className={styles.perMonth}>
        <span className={styles.perMonthTxtContainer}>
          <p className={styles.per}>PER</p>
          <p className={styles.per}>MONTH</p>
        </span>
      </div>
      <div className={styles.subscriptionPageChild10} />
      <div className={styles.freeTrialForContainer}>
        <span className={styles.perMonthTxtContainer}>
          <p className={styles.per}>{`Free  Trial `}</p>
          <p className={styles.per}>{`for `}</p>
          <p className={styles.per}>30 Days</p>
        </span>
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

export default SubscriptionPage;
