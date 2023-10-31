export type StatusCode =
	| 'TBD'
	| 'NS'
	| '1H'
	| 'HT'
	| '2H'
	| 'ET'
	| 'BT'
	| 'P'
	| 'SUSP'
	| 'INT'
	| 'FT'
	| 'AET'
	| 'PEN'
	| 'PST'
	| 'CANC'
	| 'ABD'
	| 'AWD'
	| 'WO'
	| 'LIVE';

export type StatusText =
	| 'Time To Be Defined'
	| 'Not Started'
	| 'First Half, Kick Off'
	| 'Halftime'
	| 'Second Half, 2nd Half Started'
	| 'Extra Time'
	| 'Break Time'
	| 'Penalty In Progress'
	| 'Match Suspended'
	| 'Match Interrupted'
	| 'Match Finished'
	| 'Match Postponed'
	| 'Match Cancelled'
	| 'Match Abandoned'
	| 'Technical Loss'
	| 'WalkOver'
	| 'In Progress';

export type StatusType = 'Scheduled' | 'In Play' | 'Finished' | 'Postponed' | 'Cancelled' | 'Abandoned' | 'Not Played';

interface StatusTypeMapType {
	[key: string]: StatusType;
}

export const StatusTypeMap: StatusTypeMapType = {
	'TBD': 'Scheduled',
	'NS': 'Scheduled',
	'1H': 'In Play',
	'HT': 'In Play',
	'2H': 'In Play',
	'ET': 'In Play',
	'BT': 'In Play',
	'P': 'In Play',
	'SUSP': 'In Play',
	'INT': 'In Play',
	'FT': 'Finished',
	'AET': 'Finished',
	'PEN': 'Finished',
	'PST': 'Postponed',
	'CANC': 'Cancelled',
	'ABD': 'Abandoned',
	'AWD': 'Not Played',
	'WO': 'Not Played',
	'LIVE': 'In Play'
};

type Status = {
	code: StatusCode;
	text: StatusText;
	type: StatusType;
};

export default Status;
