<script>
import { store } from "../store.js";

import CardComponent from './CardComponent.vue';

export default {
    name: "Main",

    components: {
        CardComponent,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },

    },

    created() {
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 v-if="store.isResearchActive">
                    Movies
                </h1>

                <CardComponent v-for="movie in store.moviesList" :endOfPosterPath="movie.poster_path"
                    :title="movie.title" :originalTitle="movie.original_title"
                    :originalLanguage="movie.original_language" :voteAverage="movie.vote_average" />

                <h1 v-if="store.isResearchActive">
                    Series
                </h1>

                <CardComponent v-for="serie in store.seriesList" :endOfPosterPath="serie.poster_path"
                    :title="serie.name" :originalTitle="serie.name" :originalLanguage="serie.original_language"
                    :voteAverage="serie.vote_average" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap" as *;
</style>
