import clsx from 'clsx';
import styles from './form.module.css';

interface Props {
	leagueForm: string;
}

function FormItem({ form }: { form: string }) {
	const classes = clsx({
		[styles.win]: form === 'W',
		[styles.draw]: form === 'D',
		[styles.loss]: form === 'L',
		[styles.form]: true
	});

	return <span className={classes}>{form}</span>;
}

export default function Form({ leagueForm }: Props) {
	const form = leagueForm
		.split('')
		.map((form, i) => ({ form, key: `${form}-${i}` }))
		.reverse();

	return (
		<div className={styles.formWrap}>
			{form.map(({ form, key }) => (
				<FormItem form={form} key={key} />
			))}
		</div>
	);
}
