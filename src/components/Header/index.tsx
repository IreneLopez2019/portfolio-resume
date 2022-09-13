/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from 'react';
import { Header } from '../../interfaces';
import styles from './Header.module.scss';

interface HeaderProps {
	data: Header;
	languages: string[];
	currentLanguage: string;
	setCurrentLanguage: Dispatch<SetStateAction<string>>;
}

export function Header(props: HeaderProps): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.languageToggler}>
				{props.languages.map(language => (
					<button key={language} className={language === props.currentLanguage ? styles.active : undefined} onClick={() => props.setCurrentLanguage(language)}>
						{language}
					</button>
				))}
			</div>

			<img src={props.data.header_picture.url ?? ''} alt={props.data.header_picture.alt ?? ''} />

			<h1>
				{props.data.header_name[0].text}
				<img src={props.data.header_name_deco.url ?? ''} alt={props.data.header_name_deco.alt ?? ''} />
			</h1>
		</header>
	);
}
