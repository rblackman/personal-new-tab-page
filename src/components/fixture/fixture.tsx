import { useMemo } from 'react';
import Result, { isResult } from '../../../types/api/result';
import Upcoming from '../../../types/api/upcoming';
import highlightTeam from '../../consts/highlightTeam';
import MatchDate from './date';
import styles from './fixture.module.css';
import MatchScore from './matchScore';
import Team from './team';

interface Props {
	fixture: Result | Upcoming;
}

export default function Fixture({ fixture }: Props) {
	const hasScore = isResult(fixture);

	const {
		home: { shortName: homeName, logo: homeLogo, id: homeId },
		away: { shortName: awayName, logo: awayLogo },
		date
	} = fixture;

	const isHome = useMemo(() => homeId === highlightTeam, [homeId]);

	return (
		<div className={styles.matchup}>
			<Team name={homeName} logo={homeLogo} />
			{!hasScore && <MatchDate date={date} />}
			{hasScore && <MatchScore fixture={fixture as Result} homeTeamGoodGuys={isHome} />}
			<Team name={awayName} logo={awayLogo} />
		</div>
	);
}
