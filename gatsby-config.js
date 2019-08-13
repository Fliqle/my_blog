module.exports = {
  siteMetadata: {
    title: `Sirotkin blog`,
    name: `Valeriy Sirotkin`,
    siteUrl: `https://sirotkin.netlify.com`,
    description: `Product designer personal page and blog`,
    hero: {
      heading: `Design, technology and productivity`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/fliqle`,
      },
      {
        name: `github`,
        url: `https://github.com/fliqle`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/fliqle`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/fliqle`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
