import { fetchOptions } from './infinityScroll';

export const fetchTrendingMovies = async spinner => {
  try {
<<<<<<< HEAD
    spinner.show();
=======
    console.log(fetchOptions.currentPage);
    spinner.show()
>>>>>>> c59cb9028f1430a1767328a457f4fa93b7215dd9
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=${fetchOptions.currentPage}`
    );
    spinner.hide();
    return response.json();
  } catch (error) {
    throw Error(response.statusText);
  }
};

<<<<<<< HEAD
=======

// fetchTrendingMovies().then(movies => {
//   refs.gallery.innerHTML = createMovieCard(movies.results);
// });
>>>>>>> c59cb9028f1430a1767328a457f4fa93b7215dd9
// fetchTrendingMovies().then(data => console.log(data));
// ${fetchOptions.currentPage}
