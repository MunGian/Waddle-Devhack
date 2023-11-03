import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/community-event-page");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/public-transport-page");
  }, [navigate]);

  const onGroupIcon2Click = useCallback(() => {
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

  const onGroupContainer6Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageChild} />
      <div className={styles.homePageItem} />
      <img
        className={styles.homePageInner}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIconClick}
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame-18322.svg"
        onClick={onFrameClick}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.publicTransport}>Public Transport</div>
        <img className={styles.frameItem} alt="" src="/group-18317.svg" />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />
        <div className={styles.publicTransport}>Public Transport</div>
        <img className={styles.frameItem} alt="" src="/group-18317.svg" />
        <div className={styles.frameInner} />
      </div>
      <div className={styles.features}>Features</div>
      <div className={styles.frameParent} onClick={onFrameContainer3Click}>
        <div className={styles.rectangleContainer}>
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
      <div className={styles.frameDiv}>
        <div className={styles.frameChild8} />
        <div className={styles.frameChild9} />
        <div className={styles.frameChild10} />
        <div className={styles.frameChild11} />
        <div className={styles.frameChild12} />
        <div className={styles.frameChild13} />
        <div className={styles.frameChild14} />
        <div className={styles.frameChild15} />
      </div>
      <img className={styles.homePageChild1} alt="" src="/group-18333.svg" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.homePageChild3}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon2Click}
      />
      <div className={styles.ellipseDiv} />
      <div className={styles.features}>Features</div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleContainer}>
          <div
            className={styles.rectangleParent1}
            onClick={onFrameContainer5Click}
          >
            <div className={styles.frameChild} />
            <div className={styles.publicTransport}>Public Transport</div>
            <img className={styles.frameItem} alt="" src="/group-18317.svg" />
            <div className={styles.frameInner} />
          </div>
          <div className={styles.wasteManagement1}>
            <p className={styles.public}>{`Waste `}</p>
            <p className={styles.public}>Management</p>
          </div>
          <div className={styles.rectangleParent2}>
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
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleContainer}>
              <div
                className={styles.rectangleParent1}
                onClick={onFrameContainer7Click}
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
              <div className={styles.carpoolServices}>
                <p className={styles.public}>Carpool</p>
                <p className={styles.public}>Services</p>
              </div>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-18427.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.frameChild30} />
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
          <div className={styles.frameChild34} />
        </div>
        <div className={styles.frameChild30} />
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
          <div className={styles.frameChild34} />
        </div>
      </div>
      <img className={styles.homePageChild5} alt="" src="/group-18344.svg" />
      <div className={styles.waddle}>Waddle</div>
      <img className={styles.homePageChild6} alt="" src="/group-18359.svg" />
      <div
        className={styles.rectangleParent7}
        onClick={onFrameContainer13Click}
      >
        <div className={styles.frameChild30} />
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
          <div className={styles.frameChild34} />
        </div>
        <div className={styles.frameChild30} />
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild31} />
          <div className={styles.frameChild32} />
          <div className={styles.frameChild33} />
          <div className={styles.frameChild34} />
        </div>
      </div>
      <div className={styles.welcomeBack}>Welcome Back ,</div>
      <div className={styles.yuenShenQi}>Yuen Shen Qi Dong</div>
      <div
        className={styles.rectangleParent10}
        onClick={onGroupContainer6Click}
      >
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
      </div>
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
    </div>
  );
};

export default HomePage;
