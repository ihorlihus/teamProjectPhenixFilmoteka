import {createMovieCard} from './createMovieCard';
import { fetchQueryMovies } from './fetchQueryMovies';
import { fetchTrendingMovies } from './fetchTrendingMovies';
import {refs} from './refs';
import Spinner from './spinner';

export let fetchOptions = {
    currentPage: 1,
    currentPageQuery: 1,
};

export const resetPage = () => {
    fetchOptions.currentPage = 1;
}

const observerOptions = {
    rootMargin: '-100px',
    threshold: 1.0
};
    
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
            onLoadMore();
        };
    });
}, observerOptions);

console.log(observer);

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

// fetchTrendingMovies().then(movies => {
//     refs.gallery.innerHTML = createMovieCard(movies.results);
// });

function onLoadMore() {
    console.log(observer);
    spinner.show();

    fetchTrendingMovies().then(movies => {
        try {
            if(fetchOptions.currentPage === movies.total_pages) {
                refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
                window.alert('Sorry this is the last page, we do not have any movies for you :(');
                spinner.hide();
                setObserverOff();
                return ;
            }
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
            // spinner.hide();
        } catch (error) {
            return;
        }
    }); 

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
        
        // fetchQueryMovies(searchMovieTrim).then(movies => {
        //     try {
        //         if(fetchOptions.currentPageQuery === movies.total_pages) {
        //             refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
        //             window.alert('Sorry this is the last page, we do not have any movies for you :(');
        //             spinner.hide();
        //             setObserverOff();
        //             return;
        //         }
        //         fetchOptions.currentPageQuery += 1;
        //         refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
        //         // spinner.hide();     
        //     } catch (error) {
        //         return;
        //     }
        // });
    })


    // fetchQueryMovies().then(movies => {
    //     try {
    //         if(fetchOptions.currentPage === movies.total_pages) {
    //             refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
    //             window.alert('Sorry this is the last page, we do not have any movies for you :(');
    //             spinner.hide();
    //             setObserverOff();
    //             return;
    //         }
    //         fetchOptions.currentPage += 1;
    //         refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
    //         // spinner.hide();     
    //     } catch (error) {
    //         return;
    //     }
    // });
}