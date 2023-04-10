import axios from 'axios';
const API_KEY = 'c095a52b18be81f1ee1fe016a8531acc';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async ({
  fetchParams,
  query = null,
  controller,
}) => {
  const response = await axios(fetchParams, {
    signal: controller.signal,
    params: { api_key: API_KEY, query },
  });
  return response.data;
};
