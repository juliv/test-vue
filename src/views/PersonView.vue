<template>
  <div>
    <h1 class="mb-3">{{ person && person.name }}</h1>
    <div>
      <div class="text-center">
        <router-link :to="{ name: 'people' }" class="btn btn-link">« К списку персонажей</router-link>
      </div>
      <template v-if="typeof person !== 'undefined'">
        <PersonBox :person="person" />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import store from "@/store";
import PersonBox from "@/components/PersonBox.vue";

export default defineComponent({
  components: {
    PersonBox,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      personId: parseInt(this.id, 10),
    };
  },
  computed: {
    person() {
      return this.getPerson();
    },
  },
  created() {
    if (typeof this.getPerson() === 'undefined') {
      store.dispatch('addPerson', this.personId);
    }
  },
  methods: {
    getPerson() {
      return store.state.people.find(item => item && item.id === this.personId);
    },
  },
});
</script>
