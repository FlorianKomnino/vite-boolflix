<script>
import { store } from './store.js';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    Header,
    Main,
  }
}
</script>

<template>
  <div class="wrapper">

    <Header />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables.scss" as *;

div.wrapper {
  background-color: black;
  min-height: 100vw;
}
</style>
