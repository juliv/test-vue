<template>
  <div class="container container-page">
    <TopNav/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import TopNav from "@/components/TopNav.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  color: #2c3e50;
}
.container-page {
  max-width: 46rem !important;
}
</style>
