import React from 'react';
import { RichText } from 'prismic-dom';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps<T> {
	title: string;
	data: T[];
	keys?: (keyof T)[];
	isHtml?: boolean;
	className?: string;
}

export function InfoBlock<T>(props: InfoBlockProps<T>): JSX.Element {
	return (
		<section className={props.className}>
			<h2>{props.title}</h2>

			<div className={styles.content}>
				{props.data &&
					(props.isHtml ? (
						<div dangerouslySetInnerHTML={{ __html: RichText.asHtml(props.data) }} />
					) : (
						(props.data as any).map(
							(entry: any, i: number) =>
								props.keys && (
									<div key={i} className={styles.toolsItem}>
										{entry[props.keys[0]] && <h3>{entry[props.keys[0]][0]?.text}</h3>}
										{entry[props.keys[1]] && <div dangerouslySetInnerHTML={{ __html: RichText.asHtml(entry[props.keys[1]]) }} />}
									</div>
								)
						)
					))}
			</div>
		</section>
	);
}
