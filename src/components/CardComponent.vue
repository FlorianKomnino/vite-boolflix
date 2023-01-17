<script>
import { store } from "../store.js";


export default {
    name: "CardComponent",

    props: {
        endOfPosterPath: String,
        title: String,
        originalTitle: String,
        originalLanguage: String,
        voteAverage: Number,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getFullStars(voteOutOfTen) {
            return (Math.ceil((voteOutOfTen) / 2))
        },

        getEmptyStars(voteOutOfTen) {
            return (5 - Math.ceil((voteOutOfTen) / 2))
        }
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>
                    {{ title }}
                </h1>
                <img :src="store.basePathForPosters + endOfPosterPath" alt="Poster for this movie not found">
                <h2>
                    {{ originalTitle }}
                </h2>
                <p>
                <figure class="flagImg">
                    <img v-if="store.flagsArray.includes(originalLanguage)"
                        :src="getImagePath(`../assets/imgs/flags/${originalLanguage}.svg`)"
                        alt="flag for this language not found">
                    <p v-else class="alterantiveTextToFlag">
                        Flag not found. Language: {{ originalLanguage }}
                    </p>
                </figure>
                <i v-for="star in getFullStars(voteAverage)" class="fa-solid fa-star"></i>
                <i v-for="missingStar in getEmptyStars(voteAverage)" class="fa-regular fa-star"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "bootstrap.scss" as *;
</style>
