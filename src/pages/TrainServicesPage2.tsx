import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TrainServicesPage2.module.css";

const TrainServicesPage2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/train-services-page-1");
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
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.trainServicesPage2}>
      <div className={styles.trainServicesPage2Child} />
      <div className={styles.trainServicesPage2Item} />
      <div className={styles.trainServicesPage2Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.trainServicesPage2Child1} />
      <div className={styles.trainServicesPage2Child2} />
      <div className={styles.ipoh}>Ipoh</div>
      <div className={styles.trainServicesPage2Child3} />
      <div className={styles.trainServicesPage2Child3} />
      <div className={styles.selectTicket}>Select Ticket</div>
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.selectTicketFor}>Select Ticket For</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.trainServicesPage2Child5} />
      <img className={styles.lineIcon} alt="" src="/line-561.svg" />
      <div className={styles.paritBuntar}>Parit Buntar</div>
      <div className={styles.pax}>1 Pax</div>
      <div className={styles.trainServicesPage2Child6} />
      <div className={styles.novMon}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>27 Nov</p>
          <p className={styles.nov}>Mon</p>
        </span>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.trainServicesPage2Child7} />
      <div className={styles.novTue}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>28 Nov</p>
          <p className={styles.nov}>Tue</p>
        </span>
      </div>
      <div className={styles.novWed}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>29 Nov</p>
          <p className={styles.nov}>Wed</p>
        </span>
      </div>
      <div className={styles.novThur}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>30 Nov</p>
          <p className={styles.nov}>Thur</p>
        </span>
      </div>
      <div className={styles.decFri}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>01 Dec</p>
          <p className={styles.nov}>Fri</p>
        </span>
      </div>
      <div className={styles.decSat}>
        <span className={styles.novMonTxtContainer}>
          <p className={styles.nov}>02 Dec</p>
          <p className={styles.nov}>Sat</p>
        </span>
      </div>
      <div className={styles.trainServicesPage2Child8} />
      <div className={styles.trainServicesPage2Child9} />
      <div className={styles.trainServicesPage2Child10} />
      <div className={styles.train0001}>Train - 0001</div>
      <div className={styles.depart29}>Depart : 29 Nov 05:45</div>
      <div className={styles.arrive29}>Arrive : 29 Nov 06:55</div>
      <div className={styles.hours10Minutes}>1 hours 10 minutes</div>
      <div className={styles.fromRm3200}>FROM RM 32.00</div>
      <div className={styles.seatsLeft}>200 seats left</div>
      <div className={styles.trainServicesPage2Child11} />
      <div className={styles.train0002}>Train - 0002</div>
      <div className={styles.depart291}>Depart : 29 Nov 15:45</div>
      <div className={styles.arrive291}>Arrive : 29 Nov 16:55</div>
      <div className={styles.hours10Minutes1}>1 hours 10 minutes</div>
      <div className={styles.fromRm32001}>FROM RM 32.00</div>
      <div className={styles.seatsLeft1}>50 seats left</div>
      <div className={styles.trainServicesPage2Child12} />
      <img className={styles.groupIcon} alt="" src="/group-18312.svg" />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img
        className={styles.trainServicesPage2Child13}
        alt=""
        src="/group-3.svg"
      />
      <img
        className={styles.trainServicesPage2Child14}
        alt=""
        src="/group-3.svg"
      />
      <div className={styles.trainServicesPage2Child15} />
      <div className={styles.trainServicesPage2Child12} />
      <img
        className={styles.trainServicesPage2Child17}
        alt=""
        src="/group-3.svg"
        onClick={onGroupIcon3Click}
      />
      <div className={styles.trainServicesPage2Child15} />
      <img
        className={styles.trainServicesPage2Child19}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon4Click}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
      </div>
      <div className={styles.rectangleGroup} onClick={onFrameContainer2Click}>
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

export default TrainServicesPage2;
