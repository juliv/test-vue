import {TNoDataDTO, TPersonDTO} from '@/api/typingAPI';

export type TNullObject = Record<string, never>;

export type TPeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPersonDTO[];
};

export type TPersonResponse = TPersonDTO | TNoDataDTO;
