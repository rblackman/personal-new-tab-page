import dayjs from 'dayjs';
import { useMemo } from 'react';

interface Props {
	date: string;
}

export default function MatchDate({ date: dateString }: Props) {
	const { date, time } = useMemo(() => {
		const day = dayjs(dateString);
		const date = day.format('dddd, MMMM D');
		const time = day.format('h:mm A');
		return {
			date,
			time
		};
	}, [dateString]);

	return (
		<div>
			<p>{date}</p>
			<p>{time}</p>
		</div>
	);
}
