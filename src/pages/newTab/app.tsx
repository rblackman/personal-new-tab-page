/* eslint-disable react/jsx-props-no-spreading */
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { BgOptionsType } from '../../components/bg/bg';
import Grid from '../../components/grid/grid';
import Layout from '../../components/layout/layout';
import LinkList from '../../components/linkList/linkList';
import '../../global.css';
import { OptionsState } from '../../state';
import CurrentTime from './currentTime';
import DataSubscriber from './dataSubscriber';
import Spurs from './spurs';

interface Props {
	bg: BgOptionsType;
}

export default function App({ bg }: Props) {
	const options = useRecoilValue(OptionsState);
	const left = useMemo(() => (options ? options[0] : null), [options]);
	const right = useMemo(() => (options ? options[1] : null), [options]);

	return (
		<>
			<DataSubscriber />
			<CurrentTime />
			<Layout bg={bg}>
				<Grid>
					{left && <LinkList {...left} placement="left" />}
					{right && <LinkList {...right} placement="right" />}
					<Spurs />
				</Grid>
			</Layout>
		</>
	);
}
