import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {TPerson} from "@/types/types";
import {swAPI} from "@/api/swapi";
import {isNoData} from "@/api/axios/utilits";
import {transformPerson} from "@/api/apiTransformers";

export default createStore({
  state: {
    people: [] as TPerson[],
    favorite: [] as number[], // связан с записями people
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
    addPerson(state, payload: { person: TPerson, order: number }) {
      if (state.people[payload.order] === undefined) {
        state.people[payload.order] = { ...payload.person };
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
    addPeople({ commit }) {
      swAPI.people()
        .then(res => {
          if (!isNoData(res) && typeof res.results !== 'undefined') {
            res.results.forEach(item => {
              const person = transformPerson(item);
              commit('addPerson', {
                person,
                order: person.id,
              });
            });
          }
        });
    },
    addPerson({ commit }, id: number) {
      swAPI.person(id)
        .then(res => {
          if (!isNoData(res)) {
            const person = transformPerson(res);
            commit('addPerson', {
              person,
              order: person.id,
            });
          }
        });
    },
  },
  plugins: [
    createPersistedState(),
  ],
});
