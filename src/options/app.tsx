/* eslint-disable object-curly-newline */

import { useCallback, useEffect, useState } from 'react';
import Button from '../components/button/button';
import Layout from '../components/layout/layout';
import '../global.css';
import { loadOptionsAsString, saveOptionsString } from '../helpers/storage';
import classes from './app.module.css';
import OptionInput from './optionInput';

export default function App() {
	const [value, setValue] = useState('');

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
		<Layout bg="none">
			<div className={classes.optionsWrap}>
				<h1 className={classes.title}>Options</h1>
				<OptionInput value={value} onChange={setValue} />
				<div className={classes.actions}>
					<Button buttonType="button" variant="teal" outline callback={cancel}>
						Cancel
					</Button>
					<Button buttonType="button" variant="teal" callback={save}>
						Save
					</Button>
				</div>
			</div>
		</Layout>
	);
}
