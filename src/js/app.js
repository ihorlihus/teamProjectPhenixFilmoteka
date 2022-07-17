
import './fetchTrendingMovies';
import './fetchQueryMovies';
import './createMovieCard';
import './refs';

fetchTrendingMovies().then(movies => {
    refs.gallery.innerHTML = createMovieCard(movies.results);
});

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchMovie = event.target.elements.navigation__input.value;
    const searchMovieTrim = searchMovie.trim();

    fetchQueryMovies(searchMovieTrim)
        .then(movies => {
            refs.gallery.innerHTML = createMovieCard(movies.results);
        })
})
