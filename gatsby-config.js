module.exports = {
  siteMetadata: {
    title: `Melrose Park | The New Heart of Sydney`,
    siteUrl: `https://melrosepark.com.au`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`, {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: '13.211.165.10',
				protocol: 'http',
				hostingWPCOM: false,
				useACF: false,
				auth: {
					htaccess_user: "root",
					htaccess_pass: "root",
					htaccess_sendImmediately: false,
				},
				verboseOutput: false
    }
  }
  ]
};
