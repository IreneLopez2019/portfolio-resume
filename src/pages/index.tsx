import { useMemo, useState } from 'react';
import Head from 'next/head';
import { predicate } from '@prismicio/client';
import { PrismicDocument } from '@prismicio/types';
import { client } from '../config/prismic';
import { ComplementaryEducation, Education, PrismicData, Skills, Tools, WorkExperience } from '../interfaces/prismic-data';
import { Header, ContactData, InfoBlock } from '../components';
import styles from './Home.module.scss';

export interface HomePageProps {
	content: PrismicDocument[];
}

export default function Home(props: HomePageProps): JSX.Element {
	const availableLanguages = useMemo(() => props.content.map(entry => entry.lang), [props.content]);
	const [currentLanguage, setCurrentLanguage] = useState(availableLanguages[0]);
	const pageData = useMemo<PrismicData>(
		() => props.content.find(x => x.lang === currentLanguage)?.data as PrismicData,
		[props.content, currentLanguage]
	);

	return (
		<main>
			<Head>
				<title>CV Irene López</title>
				<link rel="shortcut icon" href="assets/icons/favicon-96x96.png" type="image/png" />
			</Head>

			<Header
				languages={availableLanguages}
				currentLanguage={currentLanguage}
				setCurrentLanguage={setCurrentLanguage}
				data={{
					header_picture: pageData.header_picture,
					header_name: pageData.header_name,
					header_name_deco: pageData.header_name_deco
				}}
			/>

			<ContactData data={pageData.contact_data} />

			<div className={styles.infoBlocks}>
				<div className={styles.controlGroup}>
					<InfoBlock<WorkExperience['work_experience_data'][0]>
						title={pageData.work_experience_title[0]?.text ?? ''}
						data={pageData.work_experience_data}
						className={styles.experienceBlock}
						keys={['years', 'data']}
					/>

					<InfoBlock<Skills['skills_data'][0]>
						title={pageData.skills_title[0]?.text ?? ''}
						data={pageData.skills_data}
						className={styles.skillsBlock}
						isHtml
					/>

					<InfoBlock<Tools['tools_data'][0]>
						title={pageData.tools_title[0]?.text ?? ''}
						data={pageData.tools_data}
						className={styles.toolsBlock}
						keys={['name', 'data']}
					/>
				</div>

				<div className={styles.controlGroup}>
					<InfoBlock<Education['education_data'][0]>
						title={pageData.education_title[0]?.text ?? ''}
						data={pageData.education_data}
						className={styles.educationBlock}
						keys={['year', 'data']}
					/>

					<InfoBlock<ComplementaryEducation['complementary_education_data'][0]>
						title={pageData.complementary_education_title[0]?.text ?? ''}
						data={pageData.complementary_education_data}
						className={styles.complementaryEducationBlock}
						keys={['years', 'data']}
					/>
				</div>
			</div>
		</main>
	);
}

/**
 * Get static props function
 */
export async function getStaticProps() {
	let content;

	try {
		const { results } = await client.get({ predicates: predicate.at('document.type', String(process.env.PRISMIC_DOCUMENT_TYPE)), lang: '*' });
		content = results;
	} catch (error) {
		console.error('There was an error loading the initial content');
	} finally {
		return { props: { content } };
	}
}
