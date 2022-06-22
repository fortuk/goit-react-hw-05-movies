const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d752e046a9268238157ca8971cc96b61";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok  
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchSearchQuery(searchQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieById(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieCast(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
