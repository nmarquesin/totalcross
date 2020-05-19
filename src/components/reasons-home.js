import React from "react";
import { Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./reasons-home.module.scss";

function Reasons() {
  const data = useStaticQuery(graphql`
    query {
      low: file(relativePath: { eq: "src/imgs/lowfootprint.png" }) {
        childImageSharp {
          fixed(width: 100, height: 85) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      test: file(relativePath: { eq: "src/imgs/test.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devices: file(relativePath: { eq: "src/imgs/devices.png" }) {
        childImageSharp {
          fixed(width: 110, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      code: file(relativePath: { eq: "src/imgs/tccode.png" }) {
        childImageSharp {
          fixed(width: 534, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className={styles.containerIcons}>
        <div
          style={{
            padding: "10px",
            flex: "1 1",
          }}
        >
          <Img
            fixed={data.low.childImageSharp.fixed}
            alt="low footprint icon"
          />
          <h6 className={styles.iconTitle}>Low Footprint</h6>
          <p className={styles.iconText}>
            Less than 10MB of footprint, ensuring high performance even when
            running in low-end devices
          </p>
        </div>
        <div
          style={{
            padding: "10px",
            flex: "1 1",
          }}
        >
          <Img
            fixed={data.devices.childImageSharp.fixed}
            alt="desktop tablet and mobile phone icon"
          />
          <h6 className={styles.iconTitle}>Cross-Platform</h6>
          <p className={styles.iconText}>
            Code once and run on every platform. Responsive User Interfaces
            providing same behaviour and usability.
          </p>
        </div>
        <div
          style={{
            padding: "10px",
            flex: "1 1",
          }}
        >
          <Img
            fixed={data.test.childImageSharp.fixed}
            alt="test footprint icon"
          />
          <h6 className={styles.iconTitle}>Easy to use GUI Creator</h6>
          <p className={styles.iconText}>
            Basic knowledge of Java or Kotlin lets you build performing Apps for
            Android, Linux Arm, Windows and iOS.
          </p>
        </div>
      </div>
      <div className={styles.containerCodeImage}>
        <Img
          className={styles.image}
          fixed={data.code.childImageSharp.fixed}
          alt="TotalCross code sample"
        />

        <div className={styles.codeText}>
          <p>
            TotalCross is an <strong>open source</strong> crossplatform SDK
            developed to make your life easier when creating mobile grade user
            experience to your embedded systems.
          </p>
          <p>All while delivering native performance with a low footprint.</p>
          <Button
            href="https://learn.totalcross.com/documentation/get-started/install/"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className={styles.button}
          >
            Try in 8 minutes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
