// API Key: ff98b74c6ada2972698b8eff6707845a
// Get trending

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
