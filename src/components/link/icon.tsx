import clsx from 'clsx';
import { IconType } from '../../../types/linkListType';
import styles from './icon.module.css';

export interface IconProps {
	icon: IconType;
}

export default function Icon({ icon }: IconProps) {
	const classes = clsx({
		[styles.icon]: true,
		[styles[icon]]: true
	});

	return <span className={classes} style={{ backgroundImage: `url(public/icon/${icon}.png)` }} />;
}
