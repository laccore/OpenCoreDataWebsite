module.exports = {
  siteMetadata: {
    title: `Open Core Data`,
    author: `OCD`,
    logo: `/ocd-logo-gradient.png`,
    funder: `Open Core Data was funded by the National Science Foundation`
  },
  plugins: [
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-NNNNNNNN-N`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        
        icon: `src/images/ocd-logo-gradient.png`,
      },
    },
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data/pages`,
      },
      __key: `content`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          objects: require.resolve(`${__dirname}/src/layouts/objects.js`),
          default: require.resolve(`${__dirname}/src/layouts/index.js`),
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/src/data/config/`,
      },
      __key: `config`,
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `config`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `objects`,
        path: `${__dirname}/src/objects/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/objects`,
      },
    }
  ]
};
