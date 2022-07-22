import { fetchTrendingMovies } from './fetchTrendingMovies';
import { fetchQueryMovies } from './fetchQueryMovies';
import { createMovieCard } from './createMovieCard';
import { refs } from './refs';
import Spinner from './spinner';
import { resetPage } from './infinityScroll';

const spinner = new Spinner({

    loader: '.loader',
    hidden: true,
})

// fetchTrendingMovies().then(movies => {
//     refs.gallery.innerHTML = createMovieCard(movies.results);
// });





