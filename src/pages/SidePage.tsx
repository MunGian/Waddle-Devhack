import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SidePage.module.css";

const SidePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomepageTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onRewardsTextClick = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onSubscriptionTextClick = useCallback(() => {
    navigate("/subscription-page");
  }, [navigate]);

  const onPngtreeAvatarIconProfileIcImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.sidePage}>
      <div className={styles.sidePageChild} />
      <div className={styles.sidePageItem} />
      <img className={styles.sidePageInner} alt="" src="/group-18312.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild1} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
        <div className={styles.groupChild1} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild1} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
        <div className={styles.groupChild1} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
        </div>
      </div>
      <div className={styles.waddle}>Waddle</div>
      <img className={styles.sidePageChild3} alt="" src="/group-18359.svg" />
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild21} />
        <div className={styles.groupChild22} />
        <div className={styles.groupChild23} />
        <div className={styles.groupChild24} />
        <div className={styles.groupChild25} />
      </div>
      <div className={styles.polygonParent}>
        <div className={styles.groupChild26} />
        <img className={styles.groupChild} alt="" src="/polygon-5.svg" />
        <div className={styles.groupChild27} />
      </div>
      <div className={styles.notifications}>Notifications</div>
      <div className={styles.new}>New</div>
      <div className={styles.today}>Today</div>
      <div className={styles.thisWeek}>This Week</div>
      <div className={styles.newNotifications}>2 new notifications</div>
      <div className={styles.sidePageChild4} />
      <div className={styles.sidePageChild5} />
      <b className={styles.elonMusk}>Elon Musk</b>
      <b className={styles.homepage} onClick={onHomepageTextClick}>
        Homepage
      </b>
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector10.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector11.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector12.svg" />
      <b className={styles.rewards} onClick={onRewardsTextClick}>
        Rewards
      </b>
      <b className={styles.aboutUs}>About Us</b>
      <b className={styles.privacyPolicy}>Privacy Policy</b>
      <b className={styles.helpAndSupport}>Help and Support</b>
      <b className={styles.termAndCondition}>Term and Condition</b>
      <b className={styles.subscription} onClick={onSubscriptionTextClick}>
        Subscription
      </b>
      <img className={styles.vectorIcon6} alt="" src="/vector13.svg" />
      <img
        className={styles.pngtreeAvatarIconProfileIc}
        alt=""
        src="/pngtreeavatariconprofileiconmemberloginvectorisolatedpngimage-5247852removebgpreview-1@2x.png"
        onClick={onPngtreeAvatarIconProfileIcImageClick}
      />
    </div>
  );
};

export default SidePage;
