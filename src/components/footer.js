import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SocialNetworks from "../utils/social-networks";

import styles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "src/imgs/logo-totalcross.png" }) {
        childImageSharp {
          fixed(width: 180, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerNav}>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>Resources</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <Link className={styles.footerNavItem} to="/docs">
                  Get Started
                </Link>
              </li>
              <li>
                <Link className={styles.footerNavItem} to="/docs">
                  Docs
                </Link>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href="https://github.com/TotalCross/totalcross"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>Community</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <a
                  className={styles.footerNavItem}
                  href="https://github.com/TotalCross/totalcross"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href="https://medium.com/totalcross-community"
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>About Us</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <Link className={styles.footerNavItem} to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            padding: "40px",
            textAlign: "right",
          }}
        >
          <Img fixed={data.logo.childImageSharp.fixed} alt="TotalCross logo" />
          <div>
            <SocialNetworks />
          </div>
        </div>
      </div>
      <div style={{ fontSize: "small" }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
