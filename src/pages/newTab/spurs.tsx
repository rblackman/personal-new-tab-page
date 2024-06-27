import { useRecoilValue } from 'recoil';
import Card from '../../components/card/card';
import ErrorBoundary from '../../components/errorBoundry';
import GridItem from '../../components/grid/gridItem';
import LeagueTable from '../../components/leagueTable/leagueTable';
import { ApiDataState, HasErrorSelector, LastNFixtureSelectorFamily, NextNFixtureSelector } from '../../state';
import Fixture from './fixture';
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
				<Card>
					<LeagueTable standings={abbreviatedTable} />
				</Card>
				{lastFixture && lastFixture.length > 0 && (
					<ErrorBoundary>
						<Fixture fixture={lastFixture[0]} />
					</ErrorBoundary>
				)}
				{next2Fixtures && next2Fixtures.length > 0 && (
					<ErrorBoundary>
						<Fixture fixture={next2Fixtures[0]} />
					</ErrorBoundary>
				)}
				{next2Fixtures && next2Fixtures.length > 1 && (
					<ErrorBoundary>
						<Fixture fixture={next2Fixtures[1]} />
					</ErrorBoundary>
				)}
			</div>
		</GridItem>
	);
}
