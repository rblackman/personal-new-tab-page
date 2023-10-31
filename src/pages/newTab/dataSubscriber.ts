/* global chrome */
/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import TabMessage from '../../../types/tabMessage';
import '../../global.css';
import { loadOptionsObject, loadSpursData } from '../../helpers/storage';
import { ApiDataState, ApiErrorState, LastUpdatedState, OptionsState } from '../../state';

export default function DataSubscriber() {
	const setOptions = useSetRecoilState(OptionsState);
	const setApiDataState = useSetRecoilState(ApiDataState);
	const setLastUpdatedState = useSetRecoilState(LastUpdatedState);
	const setApiErrorState = useSetRecoilState(ApiErrorState);

	// update spurs data
	const updateData = useCallback(async () => {
		const data = await loadSpursData();
		if (data) {
			const { updated, ...rest } = data;
			setApiDataState(rest);
			setLastUpdatedState(updated);
		} else {
			setApiErrorState('Error');
		}
	}, [setApiDataState, setApiErrorState, setLastUpdatedState]);

	// initial data load
	useEffect(() => {
		async function firstLoad() {
			const settingsData = await loadOptionsObject();
			setOptions(settingsData);
			updateData();
		}
		firstLoad();
	}, [setOptions, updateData]);

	// chrome message listener
	useEffect(() => {
		function handleChromeMessage(message: unknown, sender: chrome.runtime.MessageSender) {
			console.debug('Message handled.', { message, sender });

			const { message: text } = message as TabMessage;
			switch (text) {
				case 'Success':
					updateData();
					break;
				case 'Error':
					setApiErrorState('Error updating data');
					break;
				default:
					console.warn('Unknown message', { message, sender });
			}
		}

		chrome.runtime.onMessage.addListener(handleChromeMessage);
		return () => chrome.runtime.onMessage.removeListener(handleChromeMessage);
	}, [setApiErrorState, updateData]);

	return null;
}
