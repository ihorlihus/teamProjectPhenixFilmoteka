export const fetchGenres = async () => {
    try {
        const response = await fetch(`
            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US
        `);
        return await response.json();
    } catch (error) {
        throw Error(response.statusText);
    }
}

export let localGenres;



// fetchGenres().then(genres => {
//     localStorage.setItem("genres", JSON.stringify(genres.genres));
//     const saveGenres = localStorage.getItem("genres");
//     localGenres = JSON.parse(saveGenres);
// });

if (localStorage.getItem("genres")) {
    return;
} else {
    fetchGenres().then(genres => {
        localStorage.setItem("genres", JSON.stringify(genres.genres));
        const saveGenres = localStorage.getItem("genres");
        localGenres = JSON.parse(saveGenres);
    });
    
}