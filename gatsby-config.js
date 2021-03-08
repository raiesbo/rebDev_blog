module.exports = {
  siteMetadata: {
    title: "REBDev Blog",
    author: "raiesbo"
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`
  ]
};
