import { ReactNode } from 'react';
import styles from './grid.module.css';

export interface GridProps {
	children: ReactNode;
}

export default function Layout({ children }: GridProps) {
	return <div className={styles.grid}>{children}</div>;
}
