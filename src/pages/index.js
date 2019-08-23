import React, { memo } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from '../components/layout';
import Banner from '../components/banner';
import About from "../components/home/about";
import Services from "../components/home/services";
import StyledHeader from "../components/layout/styledheader";
export default memo(({ data }) => {
  console.log('Data ', data['bg']);
return (
  <Layout>
    <StyledHeader home="true" img={data.bg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Website still under construction...."
      >
        <AniLink fade to="/404" className="btn-white">
          explore newecoworld
        </AniLink>
      </Banner>
    </StyledHeader>
    <About />
    <Services />
  </Layout>
)
})
export const query = graphql`
{
  bg: file(relativePath: { eq: "bg.png" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
