import {TPersonDTO} from './typingAPI';
import {TPerson} from '@/types/types';

const getIdFromPeopleUrl = (url: string): number => {
	const re = /people\/(\d+)/g;
	const res = re.exec(url);
	return res ? parseInt(res[res.length-1], 10) : 0;
};

export const transformPerson = (data: TPersonDTO): TPerson => ({
	id: getIdFromPeopleUrl(data.url),
	name: data.name,
	height: data.height,
	mass: data.mass,
	hair_color: data.hair_color,
});
