import {createMovieCard} from './createMovieCard';
import { fetchQueryMovies } from './fetchQueryMovies';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import {refs} from './refs';
import Spinner from './spinner';

let fetchOptions = {
    currentPage: 1,
};

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
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
            spinner.hide();
        } catch (error) {
            console.log(error);
        }
    });

    fetchQueryMovies().then(movies => {
        try {
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
            spinner.hide();     
        } catch (error) {
            console.log(error);
        }
    });
}
    
    
// function drawMovies(data) {
//     const movies = data.hits;
//     totalMovies = data.totalHits;
    
//     if (!totalMovies) {
//         Notify.failure('Sorry, there are NO MOVIES matching your search query. Please try again.');
            
//         refs.form.reset();
//         return;
//     };
    
//     if (fetchOptions.currentPage === 1) {
//         Notify.success(`Wow! We found for you${totalMovies} movies.`);
//     };
    
//     createMovieCard(movies.results);
    
//     setObserverOn();
// };