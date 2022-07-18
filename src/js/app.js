
import {fetchTrendingMovies} from './fetchTrendingMovies';
import {fetchQueryMovies} from './fetchQueryMovies';
import {createMovieCard} from './createMovieCard';
import {refs} from './refs';
import Spinner from './spinner';

fetchTrendingMovies().then(movies => {
    refs.gallery.innerHTML = createMovieCard(movies.results);
});

const spinner = new Spinner({
    loader: '.loader',
    hidden: true,
})

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchMovie = event.target.elements.navigation__input.value;
    const searchMovieTrim = searchMovie.trim();

    fetchQueryMovies(searchMovieTrim)
        .then(movies => {
            refs.gallery.innerHTML = createMovieCard(movies.results);
            spinner.show();
        })
})

fetchTrendingMovies().then(movies => {
    console.log(movies.results);
    spinner.hide();
});



