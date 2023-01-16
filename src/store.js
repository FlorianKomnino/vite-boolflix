import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    seriesList: [],
    stringToSearch: "",
    movieToSearch: "",
    serieToSearch: "",
})