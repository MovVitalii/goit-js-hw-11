import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoadingIndicator,
  hideLoadingIndicator,
  showNoImagesFoundMessage,
} from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) return;

  clearGallery();
  showLoadingIndicator();

  try {
    const images = await fetchImages(query);

    hideLoadingIndicator();

    if (images.length === 0) {
      showNoImagesFoundMessage();
      return;
    }

    renderImages(images);
  } catch (error) {
    hideLoadingIndicator();
    console.error('Error occurred:', error);
    iziToast.error({
      title: 'Error!',
      message: 'Something went wrong. Please try again later.',
    });
  }
});
