import { graphql } from "gatsby";
import React from "react";

const IndexPage = ({ data }) => {
    const { data: pageData } = data.allPrismicCurriculum.edges[0].node;

    return <></>;
};

export const query = graphql`
    {
        allPrismicCurriculum {
            edges {
                node {
                    data {
                        header_picture {
                            url
                            alt
                        }
                        header_name {
                            text
                        }
                        header_name_deco {
                            url
                            alt
                        }
                        contact_data {
                            text {
                                html
                            }
                            icon {
                                url
                                alt
                            }
                        }
                        work_experience_title {
                            text
                        }
                        work_experience_data {
                            years {
                                text
                            }
                            data {
                                html
                            }
                        }
                        skills_title {
                            text
                        }
                        skills_data {
                            html
                        }
                        tools_title {
                            text
                        }
                        tools_data {
                            name {
                                text
                            }
                            data {
                                html
                            }
                        }
                        education_title {
                            text
                        }
                        education_data {
                            year {
                                text
                            }
                            data {
                                html
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
