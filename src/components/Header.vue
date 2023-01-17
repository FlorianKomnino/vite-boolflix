<script>
import axios from 'axios';
import { store } from "../store.js";

import Main from './Main.vue';

export default {
    components: {
        Main,
    },
    data() {
        return {
            store,
        }
    }
}


</script>

<template>
    <Main />
</template>

<style scoped>

</style>
