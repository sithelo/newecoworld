import React from "react";
import Title from "../title";
import styles from "../../css/about.module.css";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const { aboutImage } = useStaticQuery(
    graphql`
      query {
        aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about new eco world"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            New Eco World is a real estate management company based in the inner
            city of Johannesburg, servicing most provinces in South Africa.<br/> Our
            goal is to ensure that we structure service models tailor-made to
            suit your requirements.
          </p>
          <p>
            With more than 200 properties we manage in South Africa our
            experienced personnel deliver superior returns - something that we
            have consistently achieved even in tough market conditions.
          </p>

          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
