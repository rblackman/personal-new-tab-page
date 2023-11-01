/* eslint-disable react/jsx-props-no-spreading */
import LinkListType from '../../../types/linkListType';
import Card from '../card/card';
import GridItem from '../grid/gridItem';
import Link from '../link/link';
import styles from './linkList.module.css';

interface LinkListProps extends LinkListType {
	placement: 'left' | 'right';
}
export default function LinkList({ title, links, placement }: LinkListProps) {
	return (
		<GridItem location={placement}>
			<Card>
				<h2 className={styles.heading}>{title}</h2>
				<ul className={styles.linkList}>
					{links.map(({ text, ...props }) => (
						<Link key={text} text={text} {...props} />
					))}
				</ul>
			</Card>
		</GridItem>
	);
}
