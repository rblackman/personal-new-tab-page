import clsx from 'clsx';
import styles from './icon.module.css';

export type IconType =
	| 'ap'
	| 'ars'
	| 'aruba'
	| 'att'
	| 'auvik'
	| 'azure'
	| 'cohesity'
	| 'devops'
	| 'fb'
	| 'jira'
	| 'mtdorg'
	| 'mtdweb'
	| 'ng'
	| 'ninja'
	| 'office'
	| 'paycom'
	| 'pocket'
	| 'polygon'
	| 'reddit'
	| 'sc'
	| 'verge'
	| 'verizon'
	| 'wirecutter'
	| 'ynab';

export interface IconProps {
	icon: IconType;
}

export default function Icon({ icon }: IconProps) {
	const classes = clsx({
		[styles.icon]: true,
		[styles[icon]]: true
	});

	return <span className={classes} style={{ backgroundImage: `url(public/icon/${icon}.png)` }} />;
}
