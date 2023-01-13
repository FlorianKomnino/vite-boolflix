<script>
import axios from 'axios';
import { store } from './store.js';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<template>
  <h1>
    hello Vue
  </h1>

  <Header />
  <Main />
  <Footer />
</template>

<style scoped>

</style>
