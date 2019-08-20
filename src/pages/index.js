import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/error.module.css";
import layout from '../components/layout';
import banner from '../components/banner';

export default () => {
  return (
    <layout>
      <header className={styles.error}>
        <banner
          title="continue exploring"
          info=" Lorema ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
        >
          <AniLink fade to="/404" className="btn-white">
            explore new eco world
          </AniLink>
        </banner>
      </header>
    </layout>
  )
}
