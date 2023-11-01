import Result from '../../../types/api/result';

interface Props {
	fixture: Result;
	homeTeamGoodGuys: boolean;
}

function Score({ score, bold }: { score: number; bold: boolean }) {
	if (bold) {
		return <strong>{score}</strong>;
	}
	return <span>{score}</span>;
}

export default function MatchScore({
	fixture: {
		score: { home, away }
	},
	homeTeamGoodGuys
}: Props) {
	return (
		<div>
			<Score score={home} bold={homeTeamGoodGuys} />
			&ndash;
			<Score score={away} bold={!homeTeamGoodGuys} />
		</div>
	);
}
