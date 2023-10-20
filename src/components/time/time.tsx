import formatTime from '../../helpers/formatTime';
import styles from './time.module.css';

export interface TimeProps {
	time: Date;
}

export default function Time({ time }: TimeProps) {
	const timeDisplay = formatTime(time);
	return <p className={styles.time}>{timeDisplay}</p>;
}
