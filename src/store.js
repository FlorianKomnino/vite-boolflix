import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList: [],
    stringToSearch: "",
    movieToSearch: "",
    serieToSearch: "",

    flagsArray: [
        "en",
        "es",
        "ja",
        "it",
        "fr",
    ],

    basePathForPosters: "https://image.tmdb.org/t/p/w342/",

})