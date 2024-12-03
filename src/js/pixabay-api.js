import axios from 'axios';

const API_KEY = '47399675-043703f8487c7f7d0445216cc';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
};
