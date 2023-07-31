<template>
  <div class="home">
    <StartBox title="Flame Тестовое фронт"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StartBox from '@/components/StartBox.vue';

@Options({
  components: {
    StartBox,
  },
})
export default class HomeView extends Vue {}
</script>
