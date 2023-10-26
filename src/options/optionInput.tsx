/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */

import { ChangeEvent, useCallback } from 'react';
import classes from './optionsInput.module.css';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export default function OptionInput({ value, onChange }: Props) {
	const change = useCallback(
		({ target: { value: newVal } }: ChangeEvent<HTMLTextAreaElement>) => {
			onChange(newVal);
		},
		[onChange]
	);

	return (
		<div className={classes.wrap}>
			<label htmlFor="option-input" className={classes.label}>
				Columns (JSON)
			</label>
			<textarea className={classes.ta} id="option-input" onChange={change} value={value} />
		</div>
	);
}
