import Status from './status';

export type Team = {
	id: number;
	name: string;
	shortName: string;
	abbreviation: string;
	logo: string;
};

export type Competition = {
	name: string;
	logo: string;
};

type Fixture = {
	date: string;
	home: Team;
	away: Team;
	venue: string;
	competition: Competition;
	status: Status;
};

export default Fixture;
