import Form from './form';
import Result from './result';
import Table from './table';
import Upcoming from './upcoming';

type ApiResponse = {
	timestamp: string;
	form: Form[];
	previousMatches: Result[];
	upcomingMatches: Upcoming[];
	table: Table;
};
export default ApiResponse;
