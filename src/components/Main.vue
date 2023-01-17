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
                <div class="moviesWrapper">
                    <CardComponent v-for="movie in store.moviesList" :endOfPosterPath="movie.poster_path"
                        :title="movie.title" :originalTitle="movie.original_title"
                        :originalLanguage="movie.original_language" :voteAverage="movie.vote_average"
                        :componentOverview="movie.overview" />
                </div>

                <h1 v-if="store.isResearchActive">
                    TV Shows
                </h1>

                <div class="seriesWrapper">
                    <CardComponent v-for="serie in store.seriesList" :endOfPosterPath="serie.poster_path"
                        :title="serie.name" :originalTitle="serie.name" :originalLanguage="serie.original_language"
                        :voteAverage="serie.vote_average" :componentOverview="serie.overview" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "bootstrap" as *;

h1 {
    color: $boolflix_red;
    margin: 5rem 0;
}

.seriesWrapper,
.moviesWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
