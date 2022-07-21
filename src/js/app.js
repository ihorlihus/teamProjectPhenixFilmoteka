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

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    let searchMovie = event.target.elements.navigation__input.value;
    const searchMovieTrim = searchMovie.trim();

    resetPage();
    spinner.show();

    fetchQueryMovies(searchMovieTrim)
        .then(movies => {
            if (searchMovieTrim === '' || movies.results.length === 0) {
                refs.notificate.classList.remove('navigation__notificate-hidden');
                document.getElementById("myForm").reset();
                setTimeout(() => {
                    refs.notificate.classList.add('navigation__notificate-hidden')
                },2500)
                
            } else {
                refs.gallery.innerHTML = createMovieCard(movies.results);
            }
                spinner.hide();
            }
        )    
})




