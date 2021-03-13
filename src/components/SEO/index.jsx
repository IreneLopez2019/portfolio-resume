import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const SEO = ({ lang, title, description }) => {
    const siteMetadata = useSiteMetadata();
    const metaDescription = description || siteMetadata.description;
    const metalang = lang || siteMetadata.lang;

    return (
        <Helmet
            htmlAttributes={{ metalang }}
            title={title}
            titleTemplate={`${siteMetadata.title} - %s`}
        >
            <meta name="description" content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
