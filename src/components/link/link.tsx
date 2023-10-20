/* eslint-disable object-curly-newline */
import Icon, { IconType } from './icon';
import styles from './link.module.css';
import SubMenu from './subMenu';
import { SubMenuItemProps } from './subMenuItem';

export interface LinkProps {
	href: string;
	text: string;
	icon: IconType;
	subMenu?: SubMenuItemProps[];
}

export default function Link({ href, text, icon, subMenu }: LinkProps) {
	return (
		<li className={styles.link}>
			<a className={styles.a} href={href}>
				<Icon icon={icon} />
				<span className={styles.text}>{text}</span>
			</a>
			<SubMenu items={subMenu} />
		</li>
	);
}

Link.defaultProps = {
	subMenu: undefined
};
