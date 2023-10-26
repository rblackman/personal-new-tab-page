/* global chrome */

import LinkListType from '../../types/linkListType';

export async function loadOptionsAsString(): Promise<string> {
	const data = await chrome.storage.sync.get(['jsonData']);
	return data.jsonData as string;
}

export async function loadOptionsObject(): Promise<LinkListType[]> {
	const data = await loadOptionsAsString();
	const obj = JSON.parse(data) as LinkListType[];
	return obj;
}

export async function saveOptionsString(data: string): Promise<void> {
	await chrome.storage.sync.set({ jsonData: data });
}

export async function saveOptionsObject(data: LinkListType[]): Promise<void> {
	const jsonData = JSON.stringify(data, null, '\t');
	await chrome.storage.sync.set({ jsonData });
}
