import { fetchTrendingMovies } from "./fetchTrendingMovies";

export default class Spinner {
    constructor({hidden = false}) {
        this.refs = this.getRefs();
        hidden && this.hide();
    }

    getRefs() {
        const refs = {};
        refs.loader = document.querySelector('.loader');
        return refs;
    }

    show() {
        this.refs.loader.classList.remove('is-hidden');
    }

    hide() {
        this.refs.loader.classList.add('is-hidden')
    }
};

const spinner = new Spinner({
    loader: '.loader',
    hidden: true,
})

fetchTrendingMovies().then(movies => {console.log(movies.results); spinner.hide();});
