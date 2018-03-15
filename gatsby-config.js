module.exports = {
  siteMetadata: {
    title: `Flinders Bank | Naturally Melbourne`,
    siteUrl: `https://flindersbank.com.au`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`, {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
