import { atom, selector } from 'recoil';
import ApiResponse from '../types/api/apiResponse';
import LinkListType from '../types/linkListType';
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

export const OptionsState = atom<LinkListType[] | null>({
	key: 'OptionsState',
	default: null
});

export const HasErrorSelector = selector<boolean>({
	key: 'HasError',
	get: ({ get }) => {
		const data = get(ApiDataState);
		const error = get(ApiErrorState);
		return !data && !!error;
	}
});
