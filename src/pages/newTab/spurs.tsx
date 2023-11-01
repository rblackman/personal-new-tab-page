import { useRecoilValue } from 'recoil';
import Fixture from '../../components/fixture/fixture';
import GridItem from '../../components/grid/gridItem';
import LeagueTable from '../../components/leagueTable/leagueTable';
import { ApiDataState, HasErrorSelector, LastNFixtureSelectorFamily, NextNFixtureSelector } from '../../state';
import styles from './spurs.module.css';

export default function Spurs() {
	const data = useRecoilValue(ApiDataState);
	const hasError = useRecoilValue(HasErrorSelector);
	const lastFixture = useRecoilValue(LastNFixtureSelectorFamily(1));
	const next2Fixtures = useRecoilValue(NextNFixtureSelector(2));
	if (hasError || !data) {
		return null;
	}

	const {
		table: { abbreviatedTable }
	} = data;

	return (
		<GridItem location="bottom">
			<div className={styles.infoGrid}>
				<LeagueTable standings={abbreviatedTable} />
				{lastFixture && lastFixture.length > 0 && <Fixture fixture={lastFixture[0]} />}
				{next2Fixtures && next2Fixtures.length > 0 && <Fixture fixture={next2Fixtures[0]} />}
				{next2Fixtures && next2Fixtures.length > 1 && <Fixture fixture={next2Fixtures[1]} />}
			</div>
		</GridItem>
	);
}
