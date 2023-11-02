import { atom, selector, selectorFamily } from 'recoil';
import ApiResponse from '../types/api/apiResponse';
import Fixture from '../types/api/fixture';
import Result from '../types/api/result';
import { Standing } from '../types/api/table';
import Upcoming from '../types/api/upcoming';
import LinkListType from '../types/linkListType';
import { BgOptionsType } from './components/bg/bg';
import highlightTeam from './consts/highlightTeam';

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

export const LastNFixtureSelectorFamily = selectorFamily<Result[], number>({
	key: 'LastNFixtureSelectorFamily',
	get:
		(n) =>
		({ get }) => {
			const data = get(ApiDataState);
			if (!data) {
				return [];
			}
			return data.previousMatches.slice(0, n);
		}
});

export const NextNFixtureSelector = selectorFamily<Upcoming[], number>({
	key: 'LastNFixtureSelectorFamily',
	get:
		(n) =>
		({ get }) => {
			const data = get(ApiDataState);
			if (!data) {
				return [];
			}
			return data.upcomingMatches.slice(0, n);
		}
});

export const RelevantStandingsForTeamSelectorFamily = selectorFamily<Standing[], number>({
	key: 'RelevantStandingsForTeamSelectorFamily',
	get:
		(opponentId) =>
		({ get }) => {
			const standings = get(ApiDataState)?.table?.fullTable;
			if (!standings) {
				return [];
			}
			const standing = standings.filter(({ team: { id } }) => id === highlightTeam)[0];
			const opponentStanding = standings.filter(({ team: { id } }) => id === opponentId)[0];
			const above = standing.stats.currentPosition < opponentStanding.stats.currentPosition;
			return above ? [standing, opponentStanding] : [opponentStanding, standing];
		}
});

export const OpponentFromFixtureSelector = selectorFamily<number, Fixture>({
	key: 'RelevantStandingsForTeamSelectorFamily',
	get:
		({ home: { id: homeId }, away: { id: awayId } }) =>
		() => {
			return homeId === highlightTeam ? awayId : homeId;
		}
});
