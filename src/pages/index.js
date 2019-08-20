import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/error.module.css";
import Layout from '../components/layout';
import Banner from '../components/banner';

export default () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner
          title="continue exploring"
          info="Newecoworld is under construction...."
        >
          <AniLink fade to="/404" className="btn-white">
            explore new eco world
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
