import { fetchQueryMovies } from './fetchQueryMovies';
import { createMovieCard } from './createMovieCard';
import { refs } from './refs';
import Spinner from './spinner';
import { resetPage } from './infinityScroll';
import { onLoadMoreQuery } from './infinityScrollQuery';

const spinner = new Spinner({
  loader: '.loader',
  hidden: true,
});
export let searchMovieTrim = '';

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  let searchMovie = event.target.elements.navigation__input.value;
  searchMovieTrim = searchMovie.trim();

  fetchQueryMovies(searchMovieTrim).then(movies => {
    if (searchMovieTrim === '' || movies.results.length === 0) {
      refs.notificate.classList.remove('navigation__notificate-hidden');
      document.getElementById('myForm').reset();
      setTimeout(() => {
        refs.notificate.classList.add('navigation__notificate-hidden');
      }, 5000);
    } else {
      refs.gallery.innerHTML = createMovieCard(movies.results);
    }
    spinner.show();
  });

  const observerOptions = {
    rootMargin: '-100px',
    threshold: 1.0,
  };
  const observerQuery = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onLoadMoreQuery();
      }
    });
  }, observerOptions);

  observerQuery.observe(document.querySelector('.scroll-check'));
});
