module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Cookie Store",
  },
  plugins: ["gatsby-plugin-styled-components",
            "gatsby-plugin-react-helmet",
          {
            resolve: "gatsby-source-graphql",
            options: {
              typeName: "alldata",
              fieldName: "alldata",
              url: "https://api-us-east-1.graphcms.com/v2/ckvvnq41f2ve201zafgdh22vm/master",
            },
          },
        ],
};
