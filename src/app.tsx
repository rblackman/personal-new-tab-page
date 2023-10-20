/* eslint-disable react/jsx-props-no-spreading */
import data from '../data.json';
import LinkListType from '../types/linkListType';
import { BgOptionsType } from './components/bg/bg';
import Layout from './components/layout/layout';
import LinkList from './components/linkList/linkList';
import CurrentTime from './currentTime';
import './global.css';

interface Props {
	bg: BgOptionsType;
}

export default function App({ bg }: Props) {
	const links = data as LinkListType[];

	return (
		<Layout bg={bg}>
			<CurrentTime />
			<LinkList {...links[0]} placement="left" />
		</Layout>
	);
}
