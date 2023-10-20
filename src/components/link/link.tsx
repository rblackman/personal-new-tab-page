/* eslint-disable object-curly-newline */
import { LinkListLink } from '../../../types/linkListType';
import Icon from './icon';
import styles from './link.module.css';
import SubLinks from './subLinks';

export default function Link({ href, text, icon, subLinks }: LinkListLink) {
	return (
		<li className={styles.link}>
			<a className={styles.a} href={href}>
				<Icon icon={icon} />
				<span className={styles.text}>{text}</span>
			</a>
			<SubLinks subLinks={subLinks} />
		</li>
	);
}

Link.defaultProps = {
	subMenu: undefined
};
