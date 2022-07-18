import {createMovieCard} from './createMovieCard';

const fetchOptions = {
    moviesPerPage: 20,
    currentPage: 1,
    searchMovie: "",
};

const observerOptions = {
    rootMargin: '200px',
    threshold: 1.0
};
    
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            onLoadMore();
            console.log('is intersecting');
        };
    });
}, observerOptions);

function resetValues() {
    fetchOptions.currentPage = 1;
    setObserverOff();
}

function onLoadMore() {
    // try {
    //     fetchOptions.currentPage += 1;
    //     const fetchData = await fetchTrendingMovies(fetchOptions);
    //     await drawMovies(fetchData);
    // } catch (error) {
    //     Notify.failure(error);
    // };
    fetchTrendingMovies().then(movies => {
        try {
            fetchOptions.currentPage += 1;
            refs.gallery.insertAdjacentHTML('beforeend', createMovieCard(movies.results));
        } catch (error) {
            Notify.failure(error);
        }
    });
}
    
function setObserverOn() {
    observer.observe(document.querySelector('.scroll-check'));
};
    
function setObserverOff() {
    observer.unobserve(document.querySelector('.scroll-check'));
};
    
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