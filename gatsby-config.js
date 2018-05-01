module.exports = {
  siteMetadata: {
    title: `Melrose Park | The New Heart of Sydney`,
    siteUrl: `https://melrosepark.com.au`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`, {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
