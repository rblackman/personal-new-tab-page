import { Standing } from '../../../types/api/table';
import LeagueTable from '../leagueTable/leagueTable';

interface Props {
	standings: Standing[];
}

export default function Table({ standings }: Props) {
	return <LeagueTable standings={standings} small form noHeader noHighlight />;
}
