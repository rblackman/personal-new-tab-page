import clsx from 'clsx';
import { useMemo } from 'react';
import Result from '../../../types/api/result';
import styles from './matchScore.module.css';

interface ScoreProps {
	score: number;
	bold: boolean;
	status: 'good' | 'bad' | 'neutral';
}

function Score({ score, bold, status }: ScoreProps) {
	const classes = clsx({
		[styles.score]: true,
		[styles.bold]: bold,
		[styles.good]: status === 'good',
		[styles.bad]: status === 'bad',
		[styles.neutral]: status === 'neutral'
	});

	if (bold) {
		return <strong className={classes}>{score}</strong>;
	}
	return <span className={classes}>{score}</span>;
}

interface Props {
	fixture: Result;
	homeTeamGoodGuys: boolean;
}

export default function MatchScore({
	fixture: {
		score: { home, away }
	},
	homeTeamGoodGuys
}: Props) {
	const goodGuyScore = useMemo(() => (homeTeamGoodGuys ? home : away), [home, away, homeTeamGoodGuys]);
	const badGuyScore = useMemo(() => (homeTeamGoodGuys ? away : home), [home, away, homeTeamGoodGuys]);
	const goodGuyStatus = useMemo(() => (goodGuyScore > badGuyScore ? 'good' : 'neutral'), [goodGuyScore, badGuyScore]);
	const badGuyStatus = useMemo(() => (badGuyScore > goodGuyScore ? 'bad' : 'neutral'), [goodGuyScore, badGuyScore]);
	const homeStatus = useMemo(() => (homeTeamGoodGuys ? goodGuyStatus : badGuyStatus), [homeTeamGoodGuys, goodGuyStatus, badGuyStatus]);
	const awayStatus = useMemo(() => (homeTeamGoodGuys ? badGuyStatus : goodGuyStatus), [homeTeamGoodGuys, goodGuyStatus, badGuyStatus]);

	return (
		<p className={styles.scoreLine}>
			<Score score={home} bold={homeTeamGoodGuys} status={homeStatus} />
			<span className={styles.dash}>&nbsp;&ndash;&nbsp;</span>
			<Score score={away} bold={!homeTeamGoodGuys} status={awayStatus} />
		</p>
	);
}
