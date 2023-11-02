import clsx from 'clsx';
import { Standing } from '../../../types/api/table';
import styles from './leagueTable.module.css';
import LeagueTableRow from './leagueTableRow';

interface Props {
	standings: Standing[];
	small?: true | undefined;
	form?: true | undefined;
	noHeader?: true | undefined;
	noHighlight?: true | undefined;
}

export default function LeagueTable({ standings, small, form, noHeader, noHighlight }: Props) {
	const theadClass = clsx({
		[styles.thead]: true,
		[styles.sr]: !!noHeader
	});

	return (
		<table className={styles.table}>
			<thead className={theadClass}>
				<tr>
					<th className={styles.r}>#</th>
					<th>
						<span className={styles.sr}>Team</span>
					</th>
					{!small && <th className={styles.r}>PL</th>}
					{!small && <th className={styles.r}>W</th>}
					{!small && <th className={styles.r}>D</th>}
					{!small && <th className={styles.r}>L</th>}
					{!small && <th className={styles.r}>+/-</th>}
					{!small && <th className={styles.r}>GD</th>}
					{!!form && <th className={styles.r}>Form</th>}
					<th className={styles.r}>Points</th>
				</tr>
			</thead>
			<tbody>
				{standings.map(({ team: { id, ...team }, ...rest }) => (
					<LeagueTableRow key={id} small={!!small} form={!!form} noHighlight={!!noHighlight} team={{ ...team, id }} {...rest} />
				))}
			</tbody>
		</table>
	);
}

LeagueTable.defaultProps = {
	small: undefined,
	form: undefined,
	noHeader: undefined,
	noHighlight: undefined
};
