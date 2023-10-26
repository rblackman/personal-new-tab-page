/* eslint-disable object-curly-newline */

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { loadOptionsAsString, saveOptionsString } from '../helpers/storage';

export default function OptionInput() {
	const [value, setValue] = useState('');

	const handleChange = useCallback(({ target: { value: newValue } }: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(newValue);
	}, []);

	const save = useCallback(async () => {
		await saveOptionsString(value);
	}, [value]);

	const cancel = useCallback(async () => {
		const data = await loadOptionsAsString();
		setValue(data);
	}, []);

	useEffect(() => {
		async function firstLoad() {
			const data = await loadOptionsAsString();
			setValue(data);
		}
		firstLoad();
	}, []);

	return (
		<>
			<label htmlFor="option-input">
				Columns (JSON)
				<textarea id="option-input" onChange={handleChange} value={value} />
			</label>
			<button type="button" onClick={cancel}>
				Cancel
			</button>
			<button type="button" onClick={save}>
				Save
			</button>
		</>
	);
}
