import { fetchOptions } from './infinityScroll'

export const fetchTrendingMovies = async (spinner) => {
  try {
    spinner.show()
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=${fetchOptions.currentPage}`

    );
  spinner.hide()
  return response.json();

  } catch (error) {
    throw Error(response.statusText);
  }
};


// fetchTrendingMovies().then(movies => {
//   refs.gallery.innerHTML = createMovieCard(movies.results);
// });
// fetchTrendingMovies().then(data => console.log(data));
// ${fetchOptions.currentPage}
