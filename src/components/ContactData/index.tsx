import React from 'react';
import { RichText } from 'prismic-dom';
import { PrismicData } from '../../interfaces';
import styles from './ContactData.module.scss';

interface ContactProps {
	data: PrismicData['contact_data'];
}

export function ContactData(props: ContactProps): JSX.Element {
	return (
		<section className={styles.contactData}>
			<div>
				{props.data.map((entry, i) => (
					<div key={i} className={styles.dataBlock}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={entry.icon.url ?? ''} alt={entry.icon.alt ?? ''} />
						<span dangerouslySetInnerHTML={{ __html: RichText.asHtml(entry.text) }} />
					</div>
				))}
			</div>
		</section>
	);
}
