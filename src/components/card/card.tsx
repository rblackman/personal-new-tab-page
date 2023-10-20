import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './card.module.css';

export interface CardProps {
	placement: 'left' | 'right' | 'footer';
	children: ReactNode;
}

export default function Card({ placement, children }: CardProps) {
	const classes = clsx({
		[styles.card]: true,
		[styles.left]: placement === 'left',
		[styles.right]: placement === 'right',
		[styles.footer]: placement === 'footer'
	});

	return <div className={classes}>{children}</div>;
}
