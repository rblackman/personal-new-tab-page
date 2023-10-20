import classes from './subMenuItem.module.css';

export interface SubMenuItemProps {
	href: string;
	name: string;
}

export default function SubMenuItem({ name, href }: SubMenuItemProps) {
	return (
		<li className={classes.subMenuItem}>
			<a className={classes.a} href={href}>
				{name}
			</a>
		</li>
	);
}
