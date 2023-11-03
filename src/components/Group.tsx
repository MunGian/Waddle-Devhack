import { FunctionComponent } from "react";
import ViewMoreEventPage1 from "../pages/ViewMoreEventPage1";
import styles from "./Group.module.css";

const Group: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.letsPlantTogether}>
        Let’s Plant Together in George Town
      </div>
      <div className={styles.sun19Nov}>{`Sun, 19 Nov `}</div>
      <img className={styles.image38Icon} alt="" src="/image-382@2x.png" />
      <ViewMoreEventPage1 />
    </div>
  );
};

export default Group;
