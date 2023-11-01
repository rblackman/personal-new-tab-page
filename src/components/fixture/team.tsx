import styles from './team.module.css';

interface Props {
	name: string;
	logo: string;
}

export default function Team({ name, logo }: Props) {
	return (
		<div>
			<img src={logo} alt={`${name} logo`} className={styles.img} />
			<h2 className={styles.teamName}>{name}</h2>
		</div>
	);
}
