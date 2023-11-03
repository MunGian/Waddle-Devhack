import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarpoolPage3.module.css";

const CarpoolPage3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage17IconClick = useCallback(() => {
    navigate("/carpool-page-2");
  }, [navigate]);

  return (
    <div className={styles.carpoolPage3}>
      <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
      <div className={styles.carpoolPage3Child} />
      <div className={styles.carpoolPage3Item} />
      <img
        className={styles.image17Icon}
        alt=""
        src="/image-17@2x.png"
        onClick={onImage17IconClick}
      />
      <div className={styles.carpoolPage3Inner} />
      <img className={styles.groupIcon} alt="" src="/group-18346.svg" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.carpoolPage3Child1}
        alt=""
        src="/group-18346.svg"
      />
      <img className={styles.image24Icon1} alt="" src="/image-241@2x.png" />
      <div className={styles.carpoolPage3Child2} />
      <div className={styles.usmCafeteriaInd}>{`USM Cafeteria Ind... `}</div>
      <div className={styles.min}>min</div>
      <div className={styles.div}>{`7 - 9 `}</div>
      <div className={styles.lineDiv} />
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <div className={styles.carpoolPage3Child3} />
      <div className={styles.queensbayMall}>Queensbay Mall</div>
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <img className={styles.image27Icon} alt="" src="/image-18@2x.png" />
      <div className={styles.carpoolPage3Child4} />
      <div className={styles.carpoolPage3Child5} />
      <div className={styles.bookCarpoolService}>Book Carpool Service</div>
      <div className={styles.onePassenger}>One Passenger</div>
      <div className={styles.rm200}>RM 2.00</div>
      <div className={styles.priceVariesBasedContainer}>
        <p className={styles.priceVariesBased}>Price varies based on</p>
        <p className={styles.priceVariesBased}> no. of passengers</p>
      </div>
      <div className={styles.multiplePassengers}>Multiple Passengers</div>
      <img
        className={styles.carpoolPage3Child6}
        alt=""
        src="/group-18370.svg"
      />
      <div className={styles.carpoolPage3Child7} />
      <div className={styles.balance}>Balance</div>
      <div className={styles.rm10000}>RM 100.00</div>
      <div className={styles.offers}>Offers</div>
      <div className={styles.carpoolPage3Child8} />
      <div className={styles.carpoolPage3Child9} />
      <div className={styles.ellipseDiv} />
      <div className={styles.carpoolPage3Child10} />
      <div className={styles.carpoolPage3Child11} />
      <div className={styles.carpoolPage3Child12} />
      <div className={styles.specifyTheNo}>Specify the no. of passengers</div>
    </div>
  );
};

export default CarpoolPage3;
