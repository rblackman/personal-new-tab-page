/* eslint-disable @typescript-eslint/no-unused-vars */
/* global chrome */
import TabMessage from '../../types/tabMessage';
import Api from '../api/api';
import { saveSpursData } from '../helpers/storage';

const alarmName = 'updateAlarm';

function messageTabs(message: TabMessage): void {
	chrome.tabs.query({ title: '| New Tab |' }, (tabs) => {
		if (tabs) {
			for (let i = 0; i < tabs.length; i++) {
				const tab = tabs[i];
				if (tab) {
					const { id } = tab;
					if (id) {
						chrome.tabs.sendMessage(id, message);
					}
				}
			}
			tabs.forEach((tab) => {
				if (tab) {
					const { id } = tab;
					if (id) {
						chrome.tabs.sendMessage(id, message);
						return;
					}
				}
				console.warn('Failed to message tab', { tab });
			});
		}
	});
}

async function updateData(): Promise<void> {
	const data = await Api.fetchData();
	console.log('fetched data', { data });
	if (Api.isErrorResponse(data)) {
		console.error(data);
		messageTabs({ message: 'Error' });
		return;
	}

	saveSpursData(data);

	messageTabs({ message: 'Success' });
}

async function startAlarm() {
	await chrome.alarms.create(alarmName, { delayInMinutes: 5 });
}

chrome.alarms.onAlarm.addListener(({ name }) => {
	if (name === alarmName) {
		console.log('alarm fired');
		updateData();
	} else {
		console.error('Unknown alarm name', { name });
	}
	startAlarm();
});

chrome.runtime.onInstalled.addListener(() => {
	startAlarm();
	updateData();
});
