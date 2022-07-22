import { createMovieCard } from './createMovieCard';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import { refs } from './refs';
import Spinner from './spinner';

export let fetchOptions = {
  currentPage: 1,
  currentQueryPage: 1,
};

export const resetPage = () => {
  fetchOptions.currentPage = 1;
};

const observerOptions = {
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      onLoadMore();
      console.log('is intersecting');
    }
  });
}, observerOptions);

setObserverOn();

export function setObserverOn() {
  observer.observe(document.querySelector('.scroll-check'));
}

export function setObserverOff() {
  observer.unobserve(document.querySelector('.scroll-check'));
}

const spinner = new Spinner({
  loader: '.loader',
  hidden: true,
});

function onLoadMore() {
  fetchTrendingMovies(spinner).then(movies => {
    try {
      if (fetchOptions.currentPage === movies.total_pages) {
        refs.gallery.insertAdjacentHTML(
          'beforeend',
          createMovieCard(movies.results)
        );
        window.alert(
          'Sorry this is the last page, we do not have any movies for you :('
        );
        setObserverOff();
        return;
      }
      fetchOptions.currentPage += 1;
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createMovieCard(movies.results)
      );
    } catch (error) {
      console.log(error);
    }
  });
}
