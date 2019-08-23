/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`) 
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Neecoworld",
    description: `Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.`,
    author: "@johndoe",
    siteUrl: "https://gatsby-backroads-project-recording.netlify.com", // No trailing slash allowed!
    image: "/defaultBcg.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@john_smilga",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ],
}
