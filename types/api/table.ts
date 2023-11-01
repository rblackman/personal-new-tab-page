import StandingModifier from './standingModifier';

export type TeamInfo = {
	id: number;
	logo: string;
	name: string;
	shortName: string;
	abbreviation: string;
};

export type TableStats = {
	currentPosition: number;
	goalDifference: number;
	goalsFor: number;
	goalsAgainst: number;
	points: number;
	form: string;
	win: number;
	draw: number;
	loss: number;
	gamesPlayed: number;
	standingModifier: StandingModifier;
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
