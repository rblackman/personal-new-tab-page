import { ReactNode } from 'react';
import styles from './card.module.css';

export interface CardProps {
	children: ReactNode;
}

export default function Card({ children }: CardProps) {
	return <div className={styles.card}>{children}</div>;
}
