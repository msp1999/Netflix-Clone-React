const API_KEY = "36c2382aabf5292df4db352f7c4059d3";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&eith_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&eith_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&eith_genres=99`,
}

export default requests;