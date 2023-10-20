import styles from './subMenu.module.css';
import SubMenuItem, { SubMenuItemProps } from './subMenuItem';

export interface SubMenuProps {
	items: SubMenuItemProps[] | undefined;
}

export default function SubMenu({ items }: SubMenuProps) {
	if (!items) {
		return null;
	}

	return (
		<ul className={styles.subMenu}>
			{items.map(({ name, href }) => (
				<SubMenuItem key={name} name={name} href={href} />
			))}
		</ul>
	);
}
