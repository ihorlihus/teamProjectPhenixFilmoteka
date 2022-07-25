export const fetchGenres = async () => {
  try {
    const response = await fetch(`
            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US
        `);
    return await response.json();
  } catch (error) {
    throw Error(response.statusText);
  }
};

// function onGetGenres() {
//     if (localStorage.getItem('genres')) {
//         console.log("GENRES");
//         return;
//     } else {
//         fetchGenres().then(genres => {
//             console.log("NO GNR");
//             localStorage.setItem("genres", JSON.stringify(genres.genres));
//         })
//     }
// }
// onGetGenres();

// fetchGenres().then(genres => {
//     if ("genres") {
//         return;
//     } else {
//         localStorage.setItem("genres", JSON.stringify(genres.genres));
//     }
// })

function checkfetchGenres() {
  if (localStorage.getItem('genres')) {
    return;
  } else {
    fetchGenres().then(genres => {
      localStorage.setItem('genres', JSON.stringify(genres.genres));
      const saveGenres = localStorage.getItem('genres');
      localGenres = JSON.parse(saveGenres);
    });
  }
}
checkfetchGenres();
