import clsx from 'clsx';
import { Standing } from '../../../types/api/table';
import highlightTeam from '../../consts/highlightTeam';
import Form from './form';
import styles from './leagueTableRow.module.css';

interface Props extends Standing {
	small: boolean;
	form: boolean;
	noHighlight: boolean;
}

export default function LeagueTableRow({ team, stats, small, form, noHighlight }: Props) {
	const { id, shortName, logo } = team;
	const { currentPosition, goalDifference, goalsFor, goalsAgainst, points, gamesPlayed, win, draw, loss, form: leagueForm, standingModifier } = stats;

	const modifierClasses = clsx({
		[styles.smr]: true,
		[styles.modifier]: true,
		[styles.cl]: standingModifier === "Champion's League",
		[styles.el]: standingModifier === 'Europa League',
		[styles.ecl]: standingModifier === 'Europa Conference League',
		[styles.rel]: standingModifier === 'Relegation'
	});

	return (
		<tr className={clsx({ [styles.highlight]: highlightTeam === id && !noHighlight })}>
			<td className={modifierClasses}>{currentPosition}</td>
			<td className={styles.lg}>
				<span className={styles.team}>
					<img className={styles.img} src={logo} alt={`${name} logo`} />
					<span>{shortName}</span>
				</span>
			</td>
			{!small && <td className={styles.smr}>{gamesPlayed}</td>}
			{!small && <td className={styles.smr}>{win}</td>}
			{!small && <td className={styles.smr}>{draw}</td>}
			{!small && <td className={styles.smr}>{loss}</td>}
			{!small && (
				<td className={styles.smr}>
					{goalsFor}/{goalsAgainst}
				</td>
			)}
			{!small && <td className={styles.smr}>{goalDifference}</td>}
			{form && (
				<td>
					<Form leagueForm={leagueForm} />
				</td>
			)}
			<td className={styles.smr}>{points}</td>
		</tr>
	);
}
