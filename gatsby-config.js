module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: `Dan P </Dev>`,
    description: ` Kick of your next project the right way. Book a chat with Dan to discuss all of your needs.`,
    author: `@gatsbyjs`,
=======
    title: `Developer Adelaide | Tech Lover`,
    description: `Kick off your next awesome project with me!.`,
    author: `@danpdev`,
>>>>>>> c870af9af10e07fcd1d7057870ff20225fd66271
  },
  plugins: [
    `gatsby-plugin-react-helmet`,`gatsby-plugin-sass`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
