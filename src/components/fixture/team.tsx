import clsx from 'clsx';
import styles from './team.module.css';

interface Props {
	name: string;
	logo: string;
	team: 'home' | 'away';
}

export default function Team({ name, logo, team }: Props) {
	const classes = clsx({
		[styles.home]: team === 'home',
		[styles.away]: team === 'away'
	});

	return (
		<div className={classes}>
			<img src={logo} alt={`${name} logo`} className={styles.img} />
			<h2 className={styles.teamName}>{name}</h2>
		</div>
	);
}
