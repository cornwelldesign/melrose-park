module.exports = {
  siteMetadata: {
    title: `Melrose Park | The new heart of Sydney`,
    siteUrl: `http://melrosepark.com.au`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`, {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
