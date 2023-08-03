import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {TPerson} from "@/types/types";
import {swAPI} from "@/api/swapi";
import {isNoData} from "@/api/axios/utilits";
import {transformPerson} from "@/api/apiTransformers";
import {getPageNumber} from "@/api/utilits";
import {State, TActionAddPeoplePayload} from "@/store/types";

export default createStore<State>({
  state: {
    people: [],
    favorite: [], // связан с записями people
  },
  getters: {
    getPeople(state) {
      return state.people.filter(item => item && item.id);
    },
    getFavorite(state) {
      return state.favorite.map(id => state.people.find(item => item && item.id === id));
    },
  },
  mutations: {
    addPerson(state, person: TPerson) {
      if (state.people[person.id] === undefined) {
        state.people[person.id] = { ...person };
      }
    },
    addFavoritePerson(state, id: number) {
      if (state.favorite.indexOf(id) === -1) {
        state.favorite.push(id);
      }
    },
    removeFavoritePerson(state, id: number) {
      const idx = state.favorite.indexOf(id);
      if (idx !== -1) {
        state.favorite.splice(idx, 1);
      }
    },
    clearPeople(state) {
      state.favorite = [];
      state.people = [];
    },
    clearFavorite(state) {
      state.favorite = [];
    },
  },
  actions: {
    addPeople({ commit, dispatch }, payload: TActionAddPeoplePayload = { loadAll: true, page: 1 }) {
      swAPI.people(payload.page)
        .then(res => {
          if (!isNoData(res) && typeof res.results !== 'undefined') {
            res.results.forEach(item => {
              commit('addPerson', transformPerson(item));
            });
            if (payload.loadAll) {
              const nextPage = getPageNumber(res.next);
              if (nextPage) {
                dispatch('addPeople', {
                  loadAll: payload.loadAll,
                  page: nextPage,
                });
              }
            }
          }
        });
    },
    addPerson({ commit }, id: number) {
      swAPI.person(id)
        .then(res => {
          if (!isNoData(res)) {
            commit('addPerson', transformPerson(res));
          }
        });
    },
  },
  plugins: [
    createPersistedState(),
  ],
});
