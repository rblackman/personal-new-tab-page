import { ChangeEvent, useCallback } from 'react';
import classes from './optionsInput.module.css';

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
		<div className={classes.wrap}>
			<label htmlFor={id} className={classes.label}>
				Columns (JSON)
			</label>
			<textarea className={classes.ta} id={id} onChange={change} value={value} />
		</div>
	);
}
