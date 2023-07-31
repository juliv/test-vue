<template>
  <div class="start-box">
    <h1>{{ title }}</h1>
    <div>
      <img alt="Vue logo" src="@/assets/logo.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: String,
  },
})

export default class StartBox extends Vue {
  title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
