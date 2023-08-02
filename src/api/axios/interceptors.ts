import {AxiosInstance, AxiosResponse} from 'axios';

/**
 * Обрабатываем ответ от API (чтобы всегда был объектом)
 * @param response
 */
const getResponseData = (response: AxiosResponse) => {
	try {
		const {data} = response ?? {};
		if (typeof data === 'undefined') {
			console.error('Ошибка получения данных от SWAPI', response);
			return {};
		}
		return data;
	}
	catch (e) {
		console.error(e);
	}
	return {};
};

// Обработка успешного запроса
const checkResponse = (response: AxiosResponse) => getResponseData(response);

// Обработка неуспешного запроса
const checkResponseError = ({response}: {response: AxiosResponse}) => getResponseData(response);

export const interceptors = (api: AxiosInstance) => {
	api.interceptors.response.use(checkResponse, checkResponseError);
};
