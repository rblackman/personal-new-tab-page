export type TeamInfo = {
	id: number;
	logo: string;
	name: string;
};

export type TableStats = {
	currentPosition: number;
	goalDifference: number;
	goalsFor: number;
	goalsAgainst: number;
	points: number;
	description: string | null;
	form: string;
};

export type Standing = {
	team: TeamInfo;
	stats: TableStats;
};

type Table = {
	stats: TableStats;
	fullTable: Standing[];
	abbreviatedTable: Standing[];
};

export default Table;
