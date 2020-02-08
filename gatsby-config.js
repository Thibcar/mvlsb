module.exports = {
  siteMetadata: {
    title: `Ma Vie Sur Le Bassin`,
    description: `Un blog à propos de ma vie sur le Bassin d'Arcachon`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: 'ma-vie-sur-le-bassin.dans-mon-quartier.com/',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://ma-vie-sur-le-bassin.dans-mon-quartier.com/',
          replacementUrl: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Crimson+Text',
            variants: ['200', '400', '500', '600', '700'],
          },
          {
            family: 'Montserrat',
            variants: ['200', '400', '500', '600', '700'],
          },
          {
            family: 'Quattrocento',
            variants: ['200', '400', '500', '600', '700'],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
