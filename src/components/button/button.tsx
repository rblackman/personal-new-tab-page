/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
	children: ReactNode;
	outline?: boolean;
	variant?: 'default' | 'red' | 'blue' | 'green' | 'teal';
	buttonType: 'button' | 'submit' | 'reset';
	callback: () => void;
}
export default function Button(props: ButtonProps): ReactNode {
	const { children, variant, outline } = props;
	const variantClass = styles[variant ?? 'default'];
	const classes = clsx({ [styles.button]: true, [styles.outline]: outline ?? false, [variantClass]: true });

	// is <button>
	const { buttonType, callback, ...buttonProps } = props;
	return (
		<button type={buttonType} {...buttonProps} className={classes} onClick={callback}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	outline: false,
	variant: 'default'
};
