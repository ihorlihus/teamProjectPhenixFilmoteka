import {createMovieCard} from './createMovieCard';
import { fetchQueryMovies } from './fetchQueryMovies';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import {refs} from './refs';
import Spinner from './spinner';

export let fetchOptions = {
    currentPage: 1,
};

export const resetPage = () => {
    fetchOptions.currentPage = 1;
}

const observerOptions = {
    rootMargin: '0px',
    threshold: 1.0
};
    
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            onLoadMore();
        };
    });
}, observerOptions);

setObserverOn();

function setObserverOn() {
    observer.observe(document.querySelector('.scroll-check'));
};
    
function setObserverOff() {
    observer.unobserve(document.querySelector('.scroll-check'));
};

const spinner = new Spinner({
    loader: '.loader',
    hidden: true,
})

function onLoadMore() {
    
    fetchTrendingMovies().then(movies => {
        try {
            if(fetchOptions.currentPage === movies.total_pages) {
                refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
                window.alert('Sorry this is the last page, we do not have any movies for you :(');
                setObserverOff();
                return ;
            }
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
            spinner.hide();
        } catch (error) {
            console.log(error);
        }
    });

    fetchQueryMovies().then(movies => {
        try {
            if(fetchOptions.currentPage === movies.total_pages) {
                refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
                window.alert('Sorry this is the last page, we do not have any movies for you :(');
                setObserverOff();
                return;
            }
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
            spinner.hide();     
        } catch (error) {
            console.log(error);
        }
    });
}