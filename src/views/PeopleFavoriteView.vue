<template>
  <div>
    <h1 class="mb-3">Избранное</h1>
    <PeopleList :people="people" empty-message="Нет избранных персонажей"/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";
import PeopleList from "@/components/PeopleList.vue";

export default defineComponent({
  components: {
    PeopleList,
  },
  computed: {
    people() {
      return store.getters.getFavorite;
    },
  },
});
</script>
