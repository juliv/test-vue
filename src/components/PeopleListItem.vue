<template>
  <tr>
    <td>
      <router-link :to="{ name: 'person', params: { id: person.id } }">
        {{ person.name }}
      </router-link>
    </td>
    <td>{{ person.height }}</td>
    <td>{{ person.mass }}</td>
    <td>{{ person.hair_color }}</td>
    <td>
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
    </td>
  </tr>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";
import store from "@/store";
import {TPerson} from "@/types/types";

export default defineComponent({
  name: 'PeopleListItem',
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
