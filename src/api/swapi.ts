import {swapi} from './axios';
import {TPeopleResponse, TPersonResponse} from '@/api/typing';

export const swAPI = {
	people: (page = 1) => (
		swapi.get<TPeopleResponse, TPeopleResponse>('/people', {
			params: {
				page,
			},
		})
	),
	person: (id: number) => (
		swapi.get<TPersonResponse, TPersonResponse>(`/people/${id}`)
	),
	searchPeople: (search: string) => (
		swapi.get<TPeopleResponse, TPeopleResponse>('/people', {
			params: {
				search,
			},
		})
	),
};
