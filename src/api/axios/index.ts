import axios from 'axios';
import {interceptors} from './interceptors';
import {SWAPI_URL} from '@/config/api';

/**
 * Экземпляр AXIOS для взаимодействия c SWAPI
 * @see: https://swapi.dev/documentation
 */

const swapi = axios.create({
	baseURL: SWAPI_URL,
});

interceptors(swapi);

export {swapi};
