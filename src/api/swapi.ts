import {swapi} from './axios';
import {TPeopleResponse, TPersonResponse} from '@/api/typing';

export const swAPI = {
	people: () => (
		swapi.get<TPeopleResponse, TPeopleResponse>('/people')
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
