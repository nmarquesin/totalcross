import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./our-events.module.scss";

const snTwt = <FontAwesomeIcon className={styles.icon} icon={faTwitter} />;
const snTel = <FontAwesomeIcon className={styles.icon} icon={faTelegram} />;
const snYou = <FontAwesomeIcon className={styles.icon} icon={faYoutube} />;
const snLin = <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />;
const snMed = <FontAwesomeIcon className={styles.icon} icon={faMedium} />;
const comments = <FontAwesomeIcon className={styles.icon} icon={faComments} />;
const arrow = <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />;

const JoinTheConversation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Join the conversation</h2>
      <div className={styles.cardsContainerJoinTheConv}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>{comments}</div>
          <div className={styles.cardTitle}>Forum</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{snTwt}</div>
          <div className={styles.cardTitle}>Twitter</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{snTel}</div>
          <div className={styles.cardTitle}>Telegram</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{snMed}</div>
          <div className={styles.cardTitle}>Medium</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{snYou}</div>
          <div className={styles.cardTitle}>Youtube</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TotalCross/totalcross"
          >
            <div className={styles.cardArrow}>{arrow}</div>
          </a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>{snLin}</div>
          <div className={styles.cardTitle}>LinkedIn</div>
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

export default JoinTheConversation;
