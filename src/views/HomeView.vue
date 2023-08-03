<template>
  <StartBox title="Flame Тестовое фронт"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import StartBox from "@/components/StartBox.vue";
import store from "@/store";

export default defineComponent({
  name: 'HomeView',
  components: {
    StartBox,
  },
  computed: {
    people() {
      return store.getters.getFavorite;
    },
  },
});
</script>
