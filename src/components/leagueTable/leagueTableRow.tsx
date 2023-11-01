import clsx from 'clsx';
import { Standing } from '../../../types/api/table';
import highlightTeam from '../../consts/highlightTeam';
import styles from './leagueTableRow.module.css';

export default function LeagueTableRow({ team, stats }: Standing) {
	const { id, name, logo } = team;
	const { currentPosition, goalDifference, goalsFor, goalsAgainst, points, gamesPlayed, win, draw, loss } = stats;

	return (
		<tr className={clsx({ [styles.highlight]: highlightTeam === id })}>
			<td className={styles.smr}>{currentPosition}</td>
			<td className={styles.lg}>
				<span className={styles.team}>
					<img className={styles.img} src={logo} alt={`${name} logo`} />
					<span>{name}</span>
				</span>
			</td>
			<td className={styles.smr}>{gamesPlayed}</td>
			<td className={styles.smr}>{win}</td>
			<td className={styles.smr}>{draw}</td>
			<td className={styles.smr}>{loss}</td>
			<td className={styles.smr}>
				{goalsFor}/{goalsAgainst}
			</td>
			<td className={styles.smr}>{goalDifference}</td>
			<td className={styles.smr}>{points}</td>
		</tr>
	);
}
