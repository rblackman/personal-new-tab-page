/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import LinkListType from '../../../types/linkListType';
import { BgOptionsType } from '../../components/bg/bg';
import Layout from '../../components/layout/layout';
import LinkList from '../../components/linkList/linkList';
import '../../global.css';
import { loadOptionsObject, loadSpursData } from '../../helpers/storage';
import { ApiDataState, ApiErrorState, LastUpdatedState } from '../../state';
import CurrentTime from './currentTime';
import Spurs from './spurs';

interface Props {
	bg: BgOptionsType;
}

export default function App({ bg }: Props) {
	const [options, setOptions] = useState<LinkListType[] | null>(null);
	const setApiDataState = useSetRecoilState(ApiDataState);
	const setLastUpdatedState = useSetRecoilState(LastUpdatedState);
	const setApiErrorState = useSetRecoilState(ApiErrorState);

	useEffect(() => {
		async function firstLoad() {
			const settingsData = await loadOptionsObject();
			setOptions(settingsData);
		}
		firstLoad();
	}, []);

	useEffect(() => {
		async function loadData() {
			const data = await loadSpursData();
			if (data) {
				const { updated, ...rest } = data;
				setApiDataState(rest);
				setLastUpdatedState(updated);
			} else {
				setApiErrorState('Error');
			}
		}
		loadData();
	}, []);

	const left = useMemo(() => (options ? options[0] : null), [options]);
	const right = useMemo(() => (options ? options[1] : null), [options]);

	return (
		<>
			<Layout bg={bg}>
				<CurrentTime />
				{left && <LinkList {...left} placement="left" />}
				{right && <LinkList {...right} placement="right" />}
				<Spurs />
			</Layout>
		</>
	);
}
