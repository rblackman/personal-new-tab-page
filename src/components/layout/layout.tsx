import clsx from 'clsx';
import { ReactNode } from 'react';
import Bg, { BgOptionsType } from '../bg/bg';
import styles from './layout.module.css';

export interface LayoutProps {
	children: ReactNode;
	bg: BgOptionsType | 'none';
	bottom?: true;
}

export default function Layout({ children, bg, bottom }: LayoutProps) {
	const hasBottom = bottom ?? false;

	const classes = clsx({
		[styles.layout]: true,
		[styles.none]: bg === 'none',
		[styles.bottom]: hasBottom
	});

	return (
		<Bg bg={bg}>
			<div className={styles.container}>
				<div className={classes}>{children}</div>
			</div>
		</Bg>
	);
}

Layout.defaultProps = {
	bottom: undefined
};
