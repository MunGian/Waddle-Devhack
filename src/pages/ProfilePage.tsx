import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfilePage.module.css";

const ProfilePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIcon3Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/iphone-14-15-pro-13");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onRectangle16Click = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onRewardsTextClick = useCallback(() => {
    navigate("/reward-page");
  }, [navigate]);

  const onGroupIcon7Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onGroupIcon9Click = useCallback(() => {
    navigate("/wallet-page");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/waste-management-page");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/carpool-page-1");
  }, [navigate]);

  const onFrameContainer13Click = useCallback(() => {
    navigate("/side-page");
  }, [navigate]);

  const onGroupContainer11Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onRectangle71Click = useCallback(() => {
    navigate("/subscription-page");
  }, [navigate]);

  const onSubscriptionTextClick = useCallback(() => {
    navigate("/subscription-page");
  }, [navigate]);

  const onImage17IconClick = useCallback(() => {
    navigate("/subscription-page");
  }, [navigate]);

  const onIconHome1Click = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePageChild} />
      <div className={styles.profilePageItem} />
      <img className={styles.profilePageInner} alt="" src="/group-18312.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.polygonParent}>
        <img className={styles.groupChild} alt="" src="/polygon-1.svg" />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <img className={styles.profilePageChild1} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.profilePageItem} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.profilePageChild4}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.profilePageChild5} />
      <img className={styles.profilePageChild6} alt="" src="/group-18351.svg" />
      <img className={styles.profilePageChild6} alt="" src="/group-18351.svg" />
      <div className={styles.accountSettings}>Account Settings</div>
      <div className={styles.logOutParent} onClick={onGroupContainer1Click}>
        <div className={styles.logOut}>Log out</div>
        <img className={styles.groupChild1} alt="" src="/group-18367.svg" />
      </div>
      <div className={styles.waddleParent}>
        <div className={styles.waddle}>Waddle</div>
        <img className={styles.groupChild2} alt="" src="/group-18359.svg" />
      </div>
      <img className={styles.profilePageChild8} alt="" src="/group-18352.svg" />
      <b className={styles.yuenShenQi}>Yuen Shen Qi Dong</b>
      <div className={styles.rectangleParent} onClick={onGroupContainer3Click}>
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
      </div>
      <div className={styles.profilePageChild9} />
      <img className={styles.vectorIcon} alt="" src="/vector17.svg" />
      <div className={styles.profilePageChild10} />
      <b className={styles.memberId}>Member ID</b>
      <b className={styles.b}>159978462</b>
      <div className={styles.profilePageChild11} />
      <b className={styles.profile}>Profile</b>
      <b className={styles.editProfile}>Edit Profile</b>
      <div className={styles.profilePageChild12} />
      <b className={styles.language}>Language</b>
      <div className={styles.profilePageChild13} />
      <b className={styles.helpAndSupport}>Help and Support</b>
      <img className={styles.image16Icon} alt="" src="/image-181@2x.png" />
      <div className={styles.rectangleGroup} onClick={onGroupContainer4Click}>
        <div className={styles.groupChild8} onClick={onRectangle16Click} />
        <b className={styles.rewards} onClick={onRewardsTextClick}>
          Rewards
        </b>
        <img className={styles.image18Icon} alt="" src="/image-181@2x.png" />
      </div>
      <img className={styles.image19Icon} alt="" src="/image-181@2x.png" />
      <img className={styles.image20Icon} alt="" src="/image-181@2x.png" />
      <div className={styles.homePageParent}>
        <div className={styles.homePage}>
          <div className={styles.homePageChild} />
          <div className={styles.profilePageItem} />
          <img
            className={styles.homePageInner}
            alt=""
            src="/group-18312.svg"
            onClick={onGroupIcon7Click}
          />
          <div className={styles.rectangleDiv} />
          <img className={styles.homePageChild2} alt="" src="/group-3.svg" />
          <div className={styles.ellipseDiv} />
          <img
            className={styles.frameIcon}
            alt=""
            src="/frame-18322.svg"
            onClick={onFrameClick}
          />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild} />
            <div className={styles.publicTransport}>Public Transport</div>
            <img className={styles.frameItem} alt="" src="/group-18317.svg" />
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild} />
            <div className={styles.publicTransport}>Public Transport</div>
            <img className={styles.frameItem} alt="" src="/group-18317.svg" />
            <div className={styles.frameInner} />
          </div>
          <div className={styles.features}>Features</div>
          <div className={styles.frameParent} onClick={onFrameContainer3Click}>
            <div className={styles.frameGroup}>
              <div className={styles.frameChild} />
              <div className={styles.publicTransport}>Public Transport</div>
              <img className={styles.frameItem} alt="" src="/group-18317.svg" />
              <div className={styles.frameInner} />
              <img className={styles.frameItem} alt="" src="/group-18317.svg" />
            </div>
            <div className={styles.publicTransport3}>
              <p className={styles.public}>{`Public `}</p>
              <p className={styles.public}>Transport</p>
            </div>
          </div>
          <div className={styles.wasteManagement}>
            <p className={styles.public}>{`Waste `}</p>
            <p className={styles.public}>Management</p>
          </div>
          <div className={styles.communityEvents}>
            <p className={styles.public}>Community</p>
            <p className={styles.public}>Events</p>
          </div>
          <div className={styles.carpool}>Carpool</div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild8} />
            <div className={styles.frameChild9} />
            <div className={styles.frameChild10} />
            <div className={styles.frameChild11} />
            <div className={styles.frameChild12} />
            <div className={styles.frameChild13} />
            <div className={styles.frameChild14} />
            <div className={styles.frameChild15} />
          </div>
          <img
            className={styles.homePageChild4}
            alt=""
            src="/group-18333.svg"
          />
          <div className={styles.rectangleDiv} />
          <img
            className={styles.homePageChild6}
            alt=""
            src="/group-3.svg"
            onClick={onGroupIcon9Click}
          />
          <div className={styles.ellipseDiv} />
          <div className={styles.features}>Features</div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameGroup}>
              <div
                className={styles.rectangleParent3}
                onClick={onFrameContainer5Click}
              >
                <div className={styles.frameChild} />
                <div className={styles.publicTransport}>Public Transport</div>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-18317.svg"
                />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.wasteManagement1}>
                <p className={styles.public}>{`Waste `}</p>
                <p className={styles.public}>Management</p>
              </div>
              <div className={styles.rectangleParent4}>
                <div className={styles.frameChild19} />
                <div className={styles.frameChild20} />
                <div className={styles.frameChild21} />
                <div className={styles.frameChild11} />
                <div className={styles.frameChild12} />
                <div className={styles.frameChild13} />
                <div className={styles.frameChild25} />
                <div className={styles.frameChild26} />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameGroup}>
              <div className={styles.frameGroup}>
                <div className={styles.frameGroup}>
                  <div
                    className={styles.rectangleParent3}
                    onClick={onFrameContainer7Click}
                  >
                    <div className={styles.frameChild} />
                    <div className={styles.publicTransport}>
                      Public Transport
                    </div>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/group-18317.svg"
                    />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.carpoolServices}>
                    <p className={styles.public}>Carpool</p>
                    <p className={styles.public}>Services</p>
                  </div>
                  <img
                    className={styles.groupChild9}
                    alt=""
                    src="/group-18427.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent6}>
            <div className={styles.frameChild30} />
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild31} />
              <div className={styles.frameChild32} />
              <div className={styles.frameChild33} />
              <div className={styles.frameChild34} />
            </div>
            <div className={styles.frameChild30} />
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild31} />
              <div className={styles.frameChild32} />
              <div className={styles.frameChild33} />
              <div className={styles.frameChild34} />
            </div>
          </div>
          <img
            className={styles.homePageChild8}
            alt=""
            src="/group-18344.svg"
          />
          <div className={styles.waddle1}>Waddle</div>
          <img
            className={styles.homePageChild9}
            alt=""
            src="/group-18359.svg"
          />
          <div
            className={styles.rectangleParent9}
            onClick={onFrameContainer13Click}
          >
            <div className={styles.frameChild30} />
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild31} />
              <div className={styles.frameChild32} />
              <div className={styles.frameChild33} />
              <div className={styles.frameChild34} />
            </div>
            <div className={styles.frameChild30} />
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild31} />
              <div className={styles.frameChild32} />
              <div className={styles.frameChild33} />
              <div className={styles.frameChild34} />
            </div>
          </div>
          <div className={styles.welcomeBack}>Welcome Back ,</div>
          <div className={styles.yuenShenQi1}>Yuen Shen Qi Dong</div>
          <div
            className={styles.rectangleParent}
            onClick={onGroupContainer11Click}
          >
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
          </div>
          <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
        </div>
        <div className={styles.rectangleParent13}>
          <div className={styles.groupChild8} onClick={onRectangle71Click} />
          <b className={styles.rewards} onClick={onSubscriptionTextClick}>
            Subscription
          </b>
          <img
            className={styles.image17Icon}
            alt=""
            src="/image-181@2x.png"
            onClick={onImage17IconClick}
          />
        </div>
      </div>
      <img
        className={styles.iconHome1}
        alt=""
        src="/-icon-home1.svg"
        onClick={onIconHome1Click}
      />
    </div>
  );
};

export default ProfilePage;
