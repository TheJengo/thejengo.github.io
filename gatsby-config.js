module.exports = {
  siteMetadata:{
    title : 'Cengiz Cebeci',
    description : 'This is the test blog.',
    author: '@TheJengo',
    socialMedia : [
      {name:'linkedin', username:"cengiz-cebeci", link:"https://www.linkedin.com/in/cengiz-cebeci/"},
      {name:'github', username:"thejengo", link:"https://github.com/thejengo"},
      {name:'medium', username:"thejengo", link:"https://medium.com/@thejengo"},
      {name:'instagram', username:"thejengo", link:"https://instagram.com/thejengo"},
      {name:'twitter', username:"thejengo", link:"https://twitter.com/thejengo"}
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
          {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
          },
          {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
              },
          },
          {
            resolve:`gatsby-remark-prismjs`,
            options:{
              classPrefix: `language-`,
              inlineCodeMarker: `<`,
              aliases:{},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          ],
      },
    },
    {
      resolve : 'gatsby-source-filesystem',
      options : {
          path : `${__dirname}/src/pages`,
          name : 'pages'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
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
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['components/', '/main.css', 'bootstrap/', 'node_modules/font-awesome/'], // Purge only these files/folders
      }
    }
  ],
}
