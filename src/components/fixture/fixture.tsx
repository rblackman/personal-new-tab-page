import Result, { isResult } from '../../../types/api/result';
import Upcoming from '../../../types/api/upcoming';
import MatchDate from './date';
import MatchScore from './matchScore';
import Team from './team';

interface Props {
	fixture: Result | Upcoming;
}

export default function Fixture({ fixture }: Props) {
	const hasScore = isResult(fixture);

	const {
		homeTeam,
		logo: { team: logo, opponent: opponentLogo },
		opponent: opponentName,
		date
	} = fixture;

	return (
		<div>
			<Team name={homeTeam ? 'Spurs' : opponentName} logo={homeTeam ? logo : opponentLogo} />
			{!hasScore && <MatchDate date={date} />}
			{hasScore && <MatchScore fixture={fixture as Result} homeTeamGoodGuys={homeTeam} />}
			<Team name={homeTeam ? opponentName : 'Spurs'} logo={homeTeam ? opponentLogo : logo} />
		</div>
	);
}
