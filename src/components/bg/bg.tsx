import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './bg.module.css';

export type BgOptionsType = 'clock' | 'dots' | 'og' | 'prism' | 'scales' | 'cheese';

export const BgOptions: BgOptionsType[] = ['clock', 'dots', 'og', 'prism', 'scales', 'cheese'];

export interface BgProps {
	bg: BgOptionsType;
	children: ReactNode;
}

export default function Bg({ bg, children }: BgProps) {
	const classes = clsx({
		[styles.bg]: true,
		[styles.clock]: bg === 'clock',
		[styles.dots]: bg === 'dots',
		[styles.og]: bg === 'og',
		[styles.prism]: bg === 'prism',
		[styles.scales]: bg === 'scales',
		[styles.cheese]: bg === 'cheese'
	});

	return <div className={classes}>{children}</div>;
}
