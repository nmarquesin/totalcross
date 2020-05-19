import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./partners.module.scss";

function Partners() {
  const data = useStaticQuery(graphql`
    query {
      unifor: file(
        relativePath: { eq: "src/imgs/unifor-logo-horizontal-negative.png" }
      ) {
        childImageSharp {
          fixed(width: 253, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      toradex: file(relativePath: { eq: "src/imgs/toradexwhite.png" }) {
        childImageSharp {
          fixed(width: 256, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uniaveiro: file(relativePath: { eq: "src/imgs/uawhite.png" }) {
        childImageSharp {
          fixed(width: 211, height: 79) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Partner1</div>
      <div className={styles.logo}>
        <Img fixed={data.toradex.childImageSharp.fixed} alt="Toradex logo" />
      </div>
      <div className={styles.logo}>
        <Img
          fixed={data.uniaveiro.childImageSharp.fixed}
          alt="Aveiro University logo"
        />
      </div>
      <div className={styles.logo}>Partner4</div>
      <div className={styles.logo}>
        <Img fixed={data.unifor.childImageSharp.fixed} alt="Unifor logo" />
      </div>
    </div>
  );
}

export default Partners;
