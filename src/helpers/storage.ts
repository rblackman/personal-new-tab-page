/* global chrome */

import dayjs from 'dayjs';
import ApiResponse from '../../types/api/apiResponse';
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

type SpursDataType = (ApiResponse & { updated: string }) | null;
export async function loadSpursData(): Promise<SpursDataType> {
	const data = await chrome.storage.local.get(['spursData']);
	return data.spursData as SpursDataType;
}

export async function saveSpursData(data: ApiResponse): Promise<void> {
	const dataToSave: SpursDataType = { ...data, updated: dayjs().format() };
	await chrome.storage.local.set({ spursData: dataToSave });
}
