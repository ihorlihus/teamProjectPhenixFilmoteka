import { fetchOptions } from './infinityScroll'

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a`
      // `https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=${fetchOptions.currentPage}`
    );
    return response.json();
  } catch (error) {
    throw Error(response.statusText);
  }
};


// fetchTrendingMovies().then(movies => console.log(movies.results));
