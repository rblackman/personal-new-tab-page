import { ReactNode } from 'react';
import Bg, { BgOptionsType } from '../bg/bg';
import styles from './layout.module.css';

export interface LayoutProps {
	children: ReactNode;
	bg: BgOptionsType | 'none';
}

export default function Layout({ children, bg }: LayoutProps) {
	return (
		<Bg bg={bg}>
			<div className={styles.container}>{children}</div>
		</Bg>
	);
}
