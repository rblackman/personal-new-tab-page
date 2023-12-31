const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function datesAreSameYear(first: Date, second: Date): boolean {
	return first.getFullYear() === second.getFullYear();
}

function datesAreOnSameDay(first: Date, second: Date): boolean {
	return datesAreSameYear(first, second) && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
}

function getClockTime(date: Date): string {
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, '0');
	let ap: 'AM' | 'PM' = 'AM';

	if (hours === 0) {
		hours = 12;
	} else if (hours > 12) {
		hours -= 12;
		ap = 'PM';
	}
	return `${hours}:${minutes} ${ap}`;
}

function getFriendlyDate(date: Date, now: Date): string {
	const monthName = monthNames[date.getMonth()];
	const day = date.getDate();

	if (datesAreSameYear(date, now)) {
		return `${monthName} ${day}`;
	}

	const year = date.getFullYear();
	return `${monthName} ${day}, ${year}`;
}

export default function formatTime(date?: Date | string | number): string {
	if (!date) {
		return '';
	}

	const now = new Date();
	const parsedDate = new Date(date);

	if (datesAreOnSameDay(parsedDate, now)) {
		return `${getClockTime(parsedDate)}`;
	}

	return `${getFriendlyDate(parsedDate, now)} - ${getClockTime(parsedDate)}`;
}
