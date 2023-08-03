<template>
  <div>
    <table class="table table-hover table-people" v-if="people.length">
      <thead>
      <tr>
        <th>Имя</th>
        <th>Рост</th>
        <th>Вес</th>
        <th>Цвет волос</th>
        <th>&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      <PeopleListItem v-for="person in people" :key="person.id" :person="person"/>
      </tbody>
    </table>
    <div v-else>
      <em>{{ emptyMessage }}</em>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {PropType} from "vue";
import PeopleListItem from "@/components/PeopleListItem.vue";
import {TPerson} from "@/types/types";

export default defineComponent({
  name: 'PeopleList',
  components: {
    PeopleListItem,
  },
  props: {
    people: {
      type: Object as PropType<TPerson[]>,
      required: true,
    },
    emptyMessage: {
      type: String,
      default: 'Нет персонажей',
    },
  },
});
</script>
