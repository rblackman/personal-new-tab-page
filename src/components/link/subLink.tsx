import { SubLinkItem } from '../../../types/linkListType';
import styles from './subLink.module.css';

export default function SubLink({ text, href }: SubLinkItem) {
	return (
		<li className={styles.subMenuItem}>
			<a className={styles.a} href={href}>
				{text}
			</a>
		</li>
	);
}
