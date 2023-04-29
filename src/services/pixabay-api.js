import axios from 'axios';

const API_KEY = '34471861-e8084534cfe7ae4300b245128';
const BASE_URL = 'https://pixabay.com/api/';

export const ITEMS_PER_PAGE = 12;

// axios.defaults.baseURL = 'https://pixabay.com';

export const readPixabayImages = async (q, page) => {
  const options = {
    params: {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: ITEMS_PER_PAGE,
    },
  };
  const { data } = await axios.get(BASE_URL, options);
  return data;
};
