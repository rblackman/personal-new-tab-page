import { useMemo } from 'react';
import Result, { isResult } from '../../../types/api/result';
import Upcoming from '../../../types/api/upcoming';
import highlightTeam from '../../consts/highlightTeam';
import MatchScore from './matchScore';
import styles from './matchup.module.css';
import Team from './team';

interface Props {
	fixture: Result | Upcoming;
}

export default function Matchup({ fixture }: Props) {
	const hasScore = isResult(fixture);
	const {
		home: { shortName: homeName, logo: homeLogo, id: homeId },
		away: { shortName: awayName, logo: awayLogo }
	} = fixture;

	const isHome = useMemo(() => homeId === highlightTeam, [homeId]);

	return (
		<div className={styles.matchup}>
			<Team name={homeName} logo={homeLogo} team="home" />
			<span className={styles.middle}>
				{hasScore && (
					<span className={styles.score}>
						<MatchScore fixture={fixture as Result} homeTeamGoodGuys={isHome} />
					</span>
				)}
				<span className={styles.vs}>vs</span>
			</span>
			<Team name={awayName} logo={awayLogo} team="away" />
		</div>
	);
}
