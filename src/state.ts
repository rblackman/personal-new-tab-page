import { atom } from 'recoil';
import ApiResponse from '../types/api/apiResponse';
import { BgOptionsType } from './components/bg/bg';

export const ApiDataState = atom<ApiResponse | null>({
	key: 'ApiDataState',
	default: null
});

export const LastUpdatedState = atom<string | null>({
	key: 'LastUpdatedState',
	default: null
});

export const ApiErrorState = atom<string | null>({
	key: 'ApiErrorState',
	default: null
});

export const BackgroundState = atom<BgOptionsType>({
	key: 'BackgroundState',
	default: 'clock'
});
