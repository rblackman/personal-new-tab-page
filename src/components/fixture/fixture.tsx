import Result from '../../../types/api/result';
import Upcoming from '../../../types/api/upcoming';
import Card from '../card/card';
import MatchDate from './date';
import styles from './fixture.module.css';
import Matchup from './matchup';

interface Props {
	fixture: Result | Upcoming;
}

export default function Fixture({ fixture }: Props) {
	const { date } = fixture;

	return (
		<Card>
			<div className={styles.fixtureWrap}>
				<Matchup fixture={fixture} />
				<div>
					<MatchDate date={date} />
				</div>
			</div>
		</Card>
	);
}
