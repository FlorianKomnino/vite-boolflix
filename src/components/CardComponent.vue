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
        },

        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }
}

</script>

<template>
    <div class="singleCardWrapper">
        <h1>
            {{ title }}
        </h1>
        <figure>
            <img class="posterWallpaper" :src="store.basePathForPosters + endOfPosterPath"
                alt="Poster for this movie not found">
            <div class="onHoverInfos">
                <figure class="flagImg">
                    <img class="languageFlag" v-if="store.flagsArray.includes(originalLanguage)"
                        :src="getImagePath(`../assets/imgs/flags/${originalLanguage}.svg`)"
                        alt="flag for this language not found">
                    <p v-else class="alterantiveTextToFlag">
                        Flag not found. Language: {{ originalLanguage }}
                    </p>
                </figure>
                <i v-for="star in getFullStars(voteAverage)" class="fa-solid fa-star"></i>
                <i v-for="missingStar in getEmptyStars(voteAverage)" class="fa-regular fa-star"></i>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap" as *;

h1 {
    font-size: 1.25rem;
    color: white;
    text-align: center;
    height: 60px;
}

img {
    margin: 0 auto;
}

figure {
    text-align: center;
    position: relative;


}

figure:hover {
    img.posterWallpaper {
        opacity: 0.3;
    }

    .onHoverInfos {
        display: block;
    }
}

i.fa-regular.fa-star,
i.fa-solid.fa-star {
    color: white;
}

.alterantiveTextToFlag {
    color: white;
}

.onHoverInfos {
    display: none;
    position: absolute;
    top: 20px;
    left: 20px;
}

.singleCardWrapper {
    width: calc((100% / 4) - 2rem);
    display: flex;
    flex-direction: column;
}

.posterWallpaper {
    width: 250px;
}

.languageFlag {
    width: 30px;
    border: 1px solid white;
}
</style>
