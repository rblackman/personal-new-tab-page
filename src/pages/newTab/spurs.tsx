import { useRecoilValue } from 'recoil';
import Card from '../../components/card/card';
import LeagueTable from '../../components/leagueTable/leagueTable';
import { ApiDataState, HasErrorSelector } from '../../state';

export default function Spurs() {
	const data = useRecoilValue(ApiDataState);
	const hasError = useRecoilValue(HasErrorSelector);

	if (hasError || !data) {
		return null;
	}

	const {
		table: { abbreviatedTable }
	} = data;

	return (
		<Card placement="footer">
			<LeagueTable standings={abbreviatedTable} />
		</Card>
	);
}
