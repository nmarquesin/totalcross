import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./our-events.module.scss";
const horn = <FontAwesomeIcon className={styles.icon} icon={faBullhorn} />;
const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;

const OurEvents = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>{horn}</div>
          <div className={styles.cardTitle}>Our Events</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
