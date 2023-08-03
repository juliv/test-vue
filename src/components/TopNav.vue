<template>
  <nav>
    <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Главная</router-link></li>
      <li><router-link :to="{ name: 'people' }">Персонажи</router-link></li>
      <li><router-link :to="{ name: 'favorite' }">Избранное</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TopNav',
});
</script>

<style scoped lang="scss">
nav {
  padding: 2rem;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      cursor: inherit;
      text-decoration: none;
    }
  }
}
</style>
