/* eslint-disable @typescript-eslint/no-unused-vars */
/* global chrome */
import TabMessage from '../../types/tabMessage';
import Api from '../api/api';
import { saveSpursData } from '../helpers/storage';

const alarmName = 'updateAlarm';

function messageTabs(message: TabMessage): void {
	// todo
}

async function updateData(): Promise<void> {
	const data = await Api.fetchData();
	console.log('fetched data', { data });
	if (Api.isErrorResponse(data)) {
		console.error(data);
		messageTabs('Error');
		return;
	}

	saveSpursData(data);

	messageTabs('Success');
}

async function startAlarm() {
	await chrome.alarms.create(alarmName, { delayInMinutes: 0.25 });
}

chrome.alarms.onAlarm.addListener(({ name }) => {
	if (name === alarmName) {
		console.log('alarm fired');
		updateData();
	} else {
		console.error('Unknown alarm name', { name });
	}
});

chrome.tabs.onCreated.addListener(function ({ url }) {
	if (!url || url.length === 0) {
		updateData();
		console.log('new tab');
	} else {
		console.log('new tab with url', { url });
	}
});

startAlarm();
