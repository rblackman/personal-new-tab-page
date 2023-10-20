import { SubLinkItem } from '../../../types/linkListType';
import classes from './subLink.module.css';

export default function SubLink({ text, href }: SubLinkItem) {
	return (
		<li className={classes.subMenuItem}>
			<a className={classes.a} href={href}>
				{text}
			</a>
		</li>
	);
}
