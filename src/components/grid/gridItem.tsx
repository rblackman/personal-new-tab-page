import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './grid.module.css';

export interface GridItemProps {
	location: 'left' | 'right' | 'bottom';
	children: ReactNode;
}

export default function Layout({ location, children }: GridItemProps) {
	const classes = clsx({
		[styles.left]: location === 'left',
		[styles.right]: location === 'right',
		[styles.bottom]: location === 'bottom'
	});

	return <div className={classes}>{children}</div>;
}
