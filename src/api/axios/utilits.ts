import {TNoDataDTO} from '@/api/typingAPI';

export const isNoData = (data: unknown): data is TNoDataDTO => {
	return typeof data === 'object' && (data as TNoDataDTO).detail !== undefined;
};
