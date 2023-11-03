import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WalletPage.module.css";

const WalletPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupIcon3Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/notification-page");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/public-transport-page1");
  }, [navigate]);

  const onPngtreeAvatarIconProfileIcImageClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className={styles.walletPage}>
      <img className={styles.walletPageChild} alt="" src="/rectangle-133.svg" />
      <div className={styles.walletPageItem} />
      <img className={styles.walletPageInner} alt="" src="/group-18312.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.polygonParent}>
        <img className={styles.frameChild} alt="" src="/polygon-1.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-3.svg" />
      <img className={styles.walletPageChild1} alt="" src="/group-3.svg" />
      <div className={styles.ellipseDiv} />
      <div className={styles.walletPageItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.walletPageChild4} />
      <div className={styles.waddleWallet}>Waddle Wallet</div>
      <img
        className={styles.walletPageChild5}
        alt=""
        src="/group-18312.svg"
        onClick={onGroupIcon3Click}
      />
      <img className={styles.groupIcon} alt="" src="/group-18401.svg" />
      <div className={styles.rectangleParent} onClick={onFrameContainer1Click}>
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
        <div className={styles.frameChild5} />
      </div>
      <div className={styles.balance}>{`Balance : `}</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.rm10000}>RM 100.00</div>
      <div className={styles.walletPageChild7} />
      <div className={styles.walletPageChild8} />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.vertification}>Vertification</div>
      <div className={styles.addACard}>Add a Card</div>
      <div className={styles.walletPageChild9} />
      <div className={styles.topUp}>Top Up</div>
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <div className={styles.walletPageChild10} />
      <div className={styles.scan}>Scan</div>
      <div className={styles.walletPageChild11} />
      <div className={styles.receive}>Receive</div>
      <div className={styles.walletPageChild12} />
      <div className={styles.pay}>Pay</div>
      <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
      <div className={styles.quickAction}>Quick Action</div>
      <div className={styles.lineDiv} />
      <div className={styles.recentTransaction}>Recent Transaction</div>
      <div className={styles.walletPageChild13} />
      <div className={styles.booking}>Booking</div>
      <div className={styles.rm3020}>RM 30.20</div>
      <div className={styles.walletPageChild14} />
      <div className={styles.bookingId}>Booking ID : A160089</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.pay1}>Pay</div>
      <div className={styles.rm5000}>RM 50.00</div>
      <div className={styles.walletPageChild15} />
      <div className={styles.toUsmSdn}>To USM Sdn Bhd</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.topUp1}>Top up</div>
      <div className={styles.rm100001}>RM 100.00</div>
      <div className={styles.usingRhbBank}>Using RHB bank</div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.div}>......</div>
      <img
        className={styles.iconHome}
        alt=""
        src="/-icon-home1.svg"
        onClick={onIconHomeClick}
      />
      <img
        className={styles.pngtreeAvatarIconProfileIc}
        alt=""
        src="/pngtreeavatariconprofileiconmemberloginvectorisolatedpngimage-5247852removebgpreview-1@2x.png"
        onClick={onPngtreeAvatarIconProfileIcImageClick}
      />
    </div>
  );
};

export default WalletPage;
