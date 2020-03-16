module.exports = {
  siteMetadata: {
    name: 'Helpful-Engineer Resources',
    basepath: 'https://helpful-engineer.github.io/resources',
    description: 'A list of project proposals for the HelpfulEngineer project.',
    keywords: ['gatsby', 'gatsbyjs', 'helpfulengineer', 'covid'],
    type: 'website',
    image: 'https://helpful-engineer.github.io/ok.png',
  },
  pathPrefix: '/resources', // this is for gh-pages
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hardware',
        path: `${__dirname}/hardware/proposals/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'software',
        path: `${__dirname}/software/proposals/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-git`,
    //   options: {
    //     name: `rpages`,
    //     remote: `https://github.com/Helpful-Engineers/resources.git`,
    //     // Optionally supply a branch. If none supplied, you'll get the default branch.
    //     branch: `master`,
    //     // Tailor which files get imported eg. import the docs folder from a codebase.
    //     patterns: [`*`, `!*.md`]
    //   }
    // },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    // if we grab this from anywhere other than source-filesystem then use gatsby-plugin-page-creator
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          pages: require.resolve('./src/templates/Page/index.js'),
          default: require.resolve('./src/templates/Project/index.js'),
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/ok.png', // This path is relative to the root of the site
      },
    },

    // The following are all optional plugins that you may find useful.
    // If you choose not to use them, consider removing them from your package.json!

    // This plugin enables Progressive Web App + Offline functionality
    // https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
    //     head: false,
    //     anonymize: false,
    //     respectDNT: false,
    //   },
    // },

    // (optional) Enable the following for Google tag manager
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-tagmanager/
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'YOUR_GOOGLE_TAGMANAGER_ID',
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    // (optional) Enable the following for generation of an XML sitemap
    // https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/
    // 'gatsby-plugin-advanced-sitemap',
  ],
};
