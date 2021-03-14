require("dotenv").config({ path: `.env` });

module.exports = {
    siteMetadata: {
        title: `CV Irene López`,
        description: ``,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: process.env.REPO_NAME,
                accessToken: process.env.REPO_TOKEN,
                schemas: {
                    curriculum: require("./src/schemas/curriculum.json"),
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `src/assets`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "CV Irene López",
                short_name: "CV Irene López",
                start_url: "/",
                background_color: "#FFF",
                theme_color: "#000",
                display: "standalone",
                icon: `src/assets/images/logo.png`,
                icons: [
                    {
                        src: `src/assets/icons/favicon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`,
                    },
                    {
                        src: `src/assets/icons/favicon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`,
                    },
                    {
                        src: `src/assets/icons/favicon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/logo.png`,
            },
        },
    ],
};
