<template>
  <div class="position-relative mb-3">
    <div class="input-group mb-2">
      <input
        type="search"
        :readonly="isLoading"
        v-model="search"
        @input="onChange"
        @focus="onFocus"
        class="form-control"
        placeholder="Поиск по имени персонажа (минимум 2 символа)"
      />
    </div>
    <ul v-show="isOpen" class="list-group text-start position-absolute w-100 shadow">
      <li v-if="isLoading" class="list-group-item disabled">Загрузка&hellip;</li>
      <li v-for="person in results" :key="person.id" class="list-group-item">
        <router-link :to="{ name: 'person', params: { id: person.id } }">
          {{ person.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {TPerson} from "@/types/types";
import {swAPI} from "@/api/swapi";
import {transformPerson} from "@/api/apiTransformers";

interface IPeopleSearchData {
  search: string;
  results: TPerson[];
  isLoading: boolean;
  isOpen: boolean;
}

let timerId: number | undefined;
const inputDelay = 500;

export default defineComponent({
  name: 'PeopleSearch',
  data(): IPeopleSearchData {
    return {
      search: '',
      results: [],
      isLoading: false,
      isOpen: false,
    };
  },
  methods: {
    onChange() {
      timerId && clearTimeout(timerId);
      timerId = setTimeout(this.searchText, inputDelay);
    },
    onBlur() {
      // this.isOpen = false;
    },
    onFocus() {
      this.isOpen = this.isLoading || !!this.results.length;
    },
    searchText() {
      this.isOpen = false;
      this.results = [];
      if (this.search.length > 1) {
        this.isOpen = true;
        this.isLoading = true;
        swAPI.searchPeople(this.search)
          .then(res => res.results.map(item => transformPerson(item)))
          .then(res => {
            this.isLoading = false;
            this.isOpen = !!res.length;
            this.results = res;
          });
      }
    },
  },
  unmounted() {
    clearTimeout(timerId);
  },
});
</script>

<style scoped lang="scss">
</style>
