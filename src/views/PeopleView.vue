<template>
  <div>
    <h1 class="mb-3">Персонажи</h1>
    <PeopleSearch/>
    <PeopleList :people="people"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PeopleList from "@/components/PeopleList.vue";
import PeopleSearch from "@/components/PeopleSearch.vue";
import store from "@/store";

export default defineComponent({
  components: {
    PeopleSearch,
    PeopleList,
  },
  computed: {
    people() {
      return store.getters.getPeople;
    },
  },
  created() {
    if (!this.people.length) {
      store.dispatch('addPeople', {
        loadAll: true,
      });
    }
  },
});
</script>
