import React, { useState } from "react";
import { isMobile } from "../../constants/system.js";
import Filter from "../Filter/Filter.js";
import styles from "./AdaptiveFilter.module.scss";

const AdaptiveFilter = ({ confirmFilters }) => {
  const [isShow, setIsShow] = useState(!isMobile);

  const confFilters = (filterData) => {
    setIsShow(false);
    confirmFilters(filterData);
  };

  const reverseShow = () => setIsShow((prevState) => !prevState);

  const isModal = () => isShow && isMobile //
  const isShowBtnF = () => !isShow && isMobile

  return (
    <div className={isMobile && isShow ? styles.shadow : ''}>
      {isShow && <Filter confirmFilters={confFilters} style={styles.filter} />}
      {isModal() && (
        <button className={styles.tBtn} onClick={reverseShow}>
          T
        </button>
      )}
      {isShowBtnF()&& (
        <button className={styles.fBtn} onClick={reverseShow}>
          F
        </button>
      )}
    </div>
  );
};

export default AdaptiveFilter;
