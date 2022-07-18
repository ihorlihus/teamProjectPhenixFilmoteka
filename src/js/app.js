import { fetchTrendingMovies } from './fetchTrendingMovies';
import { fetchQueryMovies } from './fetchQueryMovies';
import { createMovieCard } from './createMovieCard';
import { refs } from './refs';

fetchTrendingMovies().then(movies => {
  refs.gallery.innerHTML = createMovieCard(movies.results);
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const searchMovie = event.target.elements.navigation__input.value;
  const searchMovieTrim = searchMovie.trim();

  fetchQueryMovies(searchMovieTrim).then(movies => {
    refs.gallery.innerHTML = createMovieCard(movies.results);
    spinner.show();
  });
});

fetchTrendingMovies().then(movies => {
  console.log(movies.results);
  spinner.hide();
});
