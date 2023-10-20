import { SubLinkItem } from '../../../types/linkListType';
import SubMenuItem from './subLink';
import styles from './subLinks.module.css';

export interface SubLinksProps {
	subLinks?: SubLinkItem[];
}

export default function SubLinks({ subLinks }: SubLinksProps) {
	if (!subLinks) {
		return null;
	}

	return (
		<ul className={styles.subMenu}>
			{subLinks.map(({ text, href }) => (
				<SubMenuItem key={text} text={text} href={href} />
			))}
		</ul>
	);
}

SubLinks.defaultProps = {
	subLinks: undefined
};
