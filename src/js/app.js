import { fetchQueryMovies } from './fetchQueryMovies';
import { createMovieCard } from './createMovieCard';
import { refs } from './refs';
import Spinner from './spinner';
import { resetPage } from './infinityScroll';
import {onLoadMoreQuery} from './infinityScrollQuery';
import { fetchOptions } from './infinityScroll';



export let fetchOptions = {
    currentPage: 1,
    currentQueryPage: 1,
};

const spinner = new Spinner({

    loader: '.loader',
    hidden: true,
})
export let searchMovieTrim = '';

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    let searchMovie = event.target.elements.navigation__input.value;
    searchMovieTrim = searchMovie.trim();

    resetPage();
    spinner.show();

    fetchQueryMovies(searchMovieTrim)
        .then(movies => {
            if (searchMovieTrim === '' || movies.results.length === 0) {
                refs.notificate.classList.remove('visually-hidden');
                document.getElementById("myForm").reset();
                setTimeout(() => {
                    refs.notificate.classList.add('visually-hidden')
                },2500)
                
            } else {
                refs.gallery.innerHTML = createMovieCard(movies.results);
            }
                spinner.hide();
            }
        )

        const observerOptions = {
            rootMargin: '-100px',
            threshold: 1.0
        };
        const observerQuery = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onLoadMoreQuery();
                };
            });
        }, observerOptions);
        
        observerQuery.observe(document.querySelector('.scroll-check'));    
})




