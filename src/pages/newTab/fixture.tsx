import clsx from 'clsx';
import { useRecoilValue } from 'recoil';
import Result, { isResult } from '../../../types/api/result';
import Upcoming from '../../../types/api/upcoming';
import Card from '../../components/card/card';
import MatchDate from '../../components/fixture/matchInfo';
import Matchup from '../../components/fixture/matchup';
import Table from '../../components/fixture/table';
import { OpponentFromFixtureSelector, RelevantStandingsForTeamSelectorFamily } from '../../state';
import styles from './fixture.module.css';

interface Props {
	fixture: Result | Upcoming;
}

export default function Fixture({ fixture }: Props) {
	const { date, venue } = fixture;

	const opponentId = useRecoilValue(OpponentFromFixtureSelector(fixture));
	const hasScore = isResult(fixture);
	const relevantStandings = useRecoilValue(RelevantStandingsForTeamSelectorFamily(opponentId));

	const wrapClasses = clsx({
		[styles.fixtureWrap]: true,
		[styles.past]: hasScore
	});

	return (
		<Card>
			<div className={wrapClasses}>
				<Matchup fixture={fixture} />
				<div className={styles.info}>
					<MatchDate date={date} venue={venue} inPast={hasScore} />
				</div>
				{!hasScore && (
					<div className={styles.table}>
						<Table standings={relevantStandings} />
					</div>
				)}
			</div>
		</Card>
	);
}
