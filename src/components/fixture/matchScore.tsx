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
		score: { score, opponent }
	},
	homeTeamGoodGuys
}: Props) {
	const gg = <Score score={score} bold={true} />;
	const bg = <Score score={opponent} bold={false} />;

	if (homeTeamGoodGuys) {
		return (
			<div>
				{gg} &ndash; {bg}
			</div>
		);
	}
	return (
		<div>
			{bg} &ndash; {gg}
		</div>
	);
}
