import { useState } from 'react';
import Time from '../../components/time/time';
import useInterval from '../../hooks/useInterval';

export default function CurrentTime() {
	const [time, setTime] = useState(new Date());
	useInterval(
		() => {
			setTime(new Date());
		},
		15000,
		[setTime]
	);

	return <Time time={time} />;
}
