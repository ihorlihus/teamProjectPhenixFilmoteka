
const fetchTrendingMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ff98b74c6ada2972698b8eff6707845a');
        return  response.json();
    } catch (error) {
        throw Error(response.statusText);
    }
}

// fetchTrendingMovies().then(movies => console.log(movies.results));