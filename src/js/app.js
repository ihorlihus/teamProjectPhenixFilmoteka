
import {fetchTrendingMovies} from './fetchTrendingMovies';
import {fetchQueryMovies} from './fetchQueryMovies';
import {createMovieCard} from './createMovieCard';
import {refs} from './refs';

fetchTrendingMovies().then(movies => {
    refs.gallery.innerHTML = createMovieCard(movies.results);
});

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchMovie = event.target.elements.navigation__input.value;
    const searchMovieTrim = searchMovie.trim();
    if (searchMovieTrim === '') {
        return;
    } else {
        fetchQueryMovies(searchMovieTrim)
            .then(movies => {
                refs.gallery.innerHTML = createMovieCard(movies.results);
            })
    }
    
})
