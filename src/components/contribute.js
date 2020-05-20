import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./our-events.module.scss";

const cog = <FontAwesomeIcon className={styles.icon} icon={faCog} />;
const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;
const code = <FontAwesomeIcon className={styles.icon} icon={faCode} />;
const file = <FontAwesomeIcon className={styles.icon} icon={faFileAlt} />;

const Contribute = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contribute</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>{code}</div>
          <div className={styles.cardTitle}>Source Code</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{cog}</div>
          <div className={styles.cardTitle}>Report an Issue</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{file}</div>
          <div className={styles.cardTitle}>Doc</div>
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

export default Contribute;
