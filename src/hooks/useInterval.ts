/* eslint-disable space-before-function-paren */

import { MutableRefObject, useEffect, useRef } from 'react';

export default function useInterval<T extends () => void>(callback: T, updateInterval: number, deps?: ReadonlyArray<unknown>): void {
	const savedCallback: MutableRefObject<T | undefined> = useRef<T>();
	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick(): void {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}

		const id = window.setInterval(tick, updateInterval);
		tick();

		return () => clearInterval(id);
	}, [updateInterval, ...(deps || [])]);
}
