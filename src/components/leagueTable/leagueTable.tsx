import { Standing } from '../../../types/api/table';
import styles from './leagueTable.module.css';
import LeagueTableRow from './leagueTableRow';

interface Props {
	standings: Standing[];
}

export default function LeagueTable({ standings }: Props) {
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr>
					<th className={styles.r}>#</th>
					<th>
						<span className={styles.sr}>Team</span>
					</th>
					<th className={styles.r}>PL</th>
					<th className={styles.r}>W</th>
					<th className={styles.r}>D</th>
					<th className={styles.r}>L</th>
					<th className={styles.r}>+/-</th>
					<th className={styles.r}>GD</th>
					<th className={styles.r}>Points</th>
				</tr>
			</thead>
			<tbody>
				{standings.map(({ team: { id, ...team }, ...rest }) => (
					<LeagueTableRow key={id} team={{ ...team, id }} {...rest} />
				))}
			</tbody>
		</table>
	);
}
