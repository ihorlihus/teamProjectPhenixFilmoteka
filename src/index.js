import './js/example';
import {fetchTrendingMovies} from './js/fetchTrendingMovies';
import { fetchQueryMovies } from './js/fetchQueryMovies';
import { createMovieCard } from './js/createMovieCard';
import {refs} from './js/refs';


fetchTrendingMovies().then(movies => {
    refs.gallery.innerHTML = createMovieCard(movies.results);
});

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchMovie = event.target.elements.navigation__input.value;
    const srchMovie = searchMovie.trim();

    fetchQueryMovies(srchMovie)
        .then(movies => {
            refs.gallery.innerHTML = createMovieCard(movies.results);
        })
})


