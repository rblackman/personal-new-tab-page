import dayjs from 'dayjs';
import { useMemo } from 'react';
import styles from './matchInfo.module.css';

interface Props {
	date: string;
	venue: string;
	inPast: boolean;
}

export default function MatchDate({ date: dateString, venue, inPast }: Props) {
	const { date, time, weekDay } = useMemo(() => {
		const day = dayjs(dateString);
		const weekDay = day.format('dddd');
		const date = day.format('MMMM D');
		const time = day.format('h:mm A');
		return {
			date,
			time,
			weekDay
		};
	}, [dateString]);

	return (
		<div className={styles.info}>
			<p className={styles.line1}>
				{inPast && date}
				{!inPast && (
					<>
						{weekDay}&nbsp;-&nbsp;{time}
					</>
				)}
			</p>
			{!inPast && <p className={styles.line2}>{date}</p>}
			<p className={styles.venue}>{venue}</p>
		</div>
	);
}
