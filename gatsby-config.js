module.exports = {
  siteMetadata: {
    title: `Валерий Сироткин дизайнер`,
    name: `Валерий Сироткин`,
    siteUrl: `https://sirotkin.netlify.app`,
    description: `Персональная страница Валерия Сироткина о работе, дизайне, технологиях и проектировании`,
    hero: {
      heading: `Хай, я продуктовый дизайнер. В настоящее время работаю над дизайн-системой Mail.ru`,
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
        url: `https://www.linkedin.com/in/vsirotkin/`,
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
