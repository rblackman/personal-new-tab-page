import { ChangeEvent, useCallback } from 'react';
import styles from './optionsInput.module.css';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

const id = 'option-input';

export default function OptionInput({ value, onChange }: Props) {
	const change = useCallback(
		({ target: { value: newVal } }: ChangeEvent<HTMLTextAreaElement>) => {
			onChange(newVal);
		},
		[onChange]
	);

	return (
		<div className={styles.wrap}>
			<label htmlFor={id} className={styles.label}>
				Columns (JSON)
			</label>
			<textarea className={styles.ta} id={id} onChange={change} value={value} />
		</div>
	);
}
