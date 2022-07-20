import { fetchTrendingMovies } from './fetchTrendingMovies';
import { fetchQueryMovies } from './fetchQueryMovies';
import { createMovieCard } from './createMovieCard';
import { refs } from './refs';
import Spinner from './spinner';

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
            if (searchMovieTrim === '' || movies.results.length === 0) {
                refs.notificate.classList.remove('visually-hidden');
                
            } else {
                refs.gallery.innerHTML = createMovieCard(movies.results);
            }
                spinner.show();
            }
        )    
})




