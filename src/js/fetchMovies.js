// https://api.themoviedb.org/3/movie/550?api_key=ff98b74c6ada2972698b8eff6707845a
// API Key: ff98b74c6ada2972698b8eff6707845a
// https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=dog
export const fetchMovies = () => {
    const searchParams = new URLSearchParams({
        url: 'https://api.themoviedb.org/3/search/movie?',
        key: 'ff98b74c6ada2972698b8eff6707845a'
    })
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=dog`)
        .then(
            response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();

            });
}