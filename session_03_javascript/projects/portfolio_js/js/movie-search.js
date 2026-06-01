async function searchMovies(query, page = 1) {
    showLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&page=${page}&apikey=YOUR_KEY`);
    const data = await response.json();
    renderMovies(data.Search);
    showLoading(false);
}