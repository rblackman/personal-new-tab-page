import Logo from './logo';
import Status from './status';

type Fixture = {
	date: string;
	homeTeam: boolean;
	venue: string;
	opponent: string;
	competition: string;
	status: Status;
	logo: Logo;
};

export default Fixture;
