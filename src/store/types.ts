import {InjectionKey} from "vue";
import {Store} from "vuex";
import {TPerson} from "@/types/types";

export interface State {
  people: TPerson[],
  favorite: number[],
}

export const key: InjectionKey<Store<State>> = Symbol();

export type TActionAddPeoplePayload = {
  loadAll: boolean,
  page?: number
};
