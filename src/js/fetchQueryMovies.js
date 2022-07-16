// https://api.themoviedb.org/3/movie/550?api_key=ff98b74c6ada2972698b8eff6707845a
// API Key: ff98b74c6ada2972698b8eff6707845a
// Get trending
// https://api.themoviedb.org/3/trending/all/day?api_key=
// https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=dog
// підставляємо у index.js
// const refs = {
//     gallery: document.querySelector('.gallery')
// }

// fetchTrendingMovies().then(movies => {
//     refs.gallery.innerHTML = createMovieCard(movies.results);
//     console.log(movies.results);
// });

// fetchQueryMovies().then(movies => console.log(movies.results));
export const fetchQueryMovies = async (name) => {
    try {
        const response = await fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=${name}
            `);
        return await response.json();
    } catch (error) {
        throw Error(response.statusText);
    }
}
// fetchQueryMovies().then(movies => console.log(movies.results));