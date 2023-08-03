<template>
  <div class="list-group my-3">
    <div class="list-group-item">
      <div class="fw-bold">Имя:</div>
      {{ person.name }}
    </div>
    <div class="list-group-item">
      <div class="fw-bold">Рост:</div>
      {{ person.height }}
    </div>
    <div class="list-group-item">
      <div class="fw-bold">Вес:</div>
      {{ person.mass }}
    </div>
    <div class="list-group-item">
      <div class="fw-bold">Цвет волос:</div>
      {{ person.hair_color }}
    </div>
  </div>
  <div class="text-center">
    <button
      v-if="!inFavorite"
      class="btn btn-sm btn-primary"
      @click="addToFavorite"
    >
      Добавить в избранное
    </button>
    <button
      v-else
      class="btn btn-sm btn-danger"
      @click="removeFromFavorite"
    >
      Удалить из избранного
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";
import store from "@/store";
import {TPerson} from "@/types/types";

export default defineComponent({
  name: 'PersonBox',
  props: {
    person: {
      type: Object as PropType<TPerson>,
      required: true,
    },
  },
  computed: {
    inFavorite() {
      return store.state.favorite.indexOf(this.person.id) !== -1;
    },
  },
  methods: {
    addToFavorite() {
      store.commit('addFavoritePerson', this.person.id);
    },
    removeFromFavorite() {
      store.commit('removeFavoritePerson', this.person.id);
    },
  },
});
</script>
