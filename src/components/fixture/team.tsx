import classes from './team.module.css';

interface Props {
	name: string;
	logo: string;
}

export default function Team({ name, logo }: Props) {
	return (
		<div>
			<img src={logo} alt={`${name} logo`} className={classes.img} />
			<h2 className={classes.teamName}>{name}</h2>
		</div>
	);
}
