/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useMemo, useState } from 'react';
import LinkListType from '../types/linkListType';
import { BgOptionsType } from './components/bg/bg';
import Layout from './components/layout/layout';
import LinkList from './components/linkList/linkList';
import CurrentTime from './currentTime';
import './global.css';
import { loadOptionsObject } from './helpers/storage';

interface Props {
	bg: BgOptionsType;
}

export default function App({ bg }: Props) {
	const [options, setOptions] = useState<LinkListType[] | null>(null);

	useEffect(() => {
		async function firstLoad() {
			const settingsData = await loadOptionsObject();
			setOptions(settingsData);
		}
		firstLoad();
	}, []);

	const left = useMemo(() => (options ? options[0] : null), [options]);
	const right = useMemo(() => (options ? options[1] : null), [options]);

	return (
		<Layout bg={bg}>
			<CurrentTime />
			{left && <LinkList {...left} placement="left" />}
			{right && <LinkList {...right} placement="right" />}
		</Layout>
	);
}
