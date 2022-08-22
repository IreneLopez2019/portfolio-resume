import React, { useState, useMemo } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Header from "../components/Header";
import ContactData from "../components/ContactData";
import InfoBlock from "../components/InfoBlock";
import styles from "./IndexPage.module.scss";
import "../styles/main.scss";

const IndexPage = ({ data }) => {
    const prismicData = useMemo(() => data.allPrismicCurriculum.edges, [data]);
    const availableLanguages = prismicData.map(x => x.node.alternate_languages[0].lang);
    const [currentLanguage, setCurrentLanguage] = useState(availableLanguages[0]);
    const { data: pageData } = useMemo(() => prismicData.find(x => x.node.alternate_languages[0].lang === currentLanguage)?.node, [prismicData, currentLanguage]);

    return (
        <>
            <SEO title="Inicio" />

            <main>
                <Header
                    languages={availableLanguages}
                    currentLanguage={currentLanguage}
                    setCurrentLanguage={setCurrentLanguage}
                    data={{
                        picture: pageData.header_picture,
                        name: pageData.header_name.text,
                        deco: pageData.header_name_deco,
                    }}
                />

                <ContactData data={pageData.contact_data} />

                <div className={styles.infoBlocks}>
                    <div className={styles.controlGroup}>
                        <InfoBlock
                            title={pageData.work_experience_title.text}
                            data={pageData.work_experience_data}
                            customClass={styles.experienceBlock}
                            keys={["years", "data"]}
                        />

                        <InfoBlock
                            title={pageData.skills_title.text}
                            data={pageData.skills_data.html}
                            customClass={styles.skillsBlock}
                            isHtml={true}
                        />

                        <InfoBlock
                            title={pageData.tools_title.text}
                            data={pageData.tools_data}
                            customClass={styles.toolsBlock}
                            keys={["name", "data"]}
                        />
                    </div>

                    <div className={styles.controlGroup}>
                        <InfoBlock
                            title={pageData.education_title.text}
                            data={pageData.education_data}
                            customClass={styles.educationBlock}
                            keys={["year", "data"]}
                        />

                        <InfoBlock
                            title={pageData.complementary_education_title.text}
                            data={pageData.complementary_education_data}
                            customClass={styles.complementaryEducationBlock}
                            keys={["years", "data"]}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export const query = graphql`
    {
        allPrismicCurriculum {
            edges {
                node {
                    alternate_languages {
                        lang
                    }
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
                        complementary_education_title {
                            text
                        }
                        complementary_education_data {
                            years {
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
