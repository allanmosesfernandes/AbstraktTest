/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Abstrakt Test`,
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "me73j1yt",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
