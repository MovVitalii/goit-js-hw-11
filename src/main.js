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

  if (!query) {
    iziToast.warning({
      title: 'Warning!',
      message: 'Please enter a search query.',
    });
    return;
  }

  clearGallery();
  showLoadingIndicator();

  const startTime = Date.now(); 

  try {
    const images = await fetchImages(query);

    const elapsedTime = Date.now() - startTime; 
    const MIN_LOADING_TIME = 500; 

   
    if (elapsedTime < MIN_LOADING_TIME) {
      await new Promise(resolve =>
        setTimeout(resolve, MIN_LOADING_TIME - elapsedTime)
      );
    }

    if (images.length === 0) {
      showNoImagesFoundMessage();
      return;
    }
    renderImages(images);
  } catch (error) {
    console.error('Error occurred:', error);
    iziToast.error({
      title: 'Error!',
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoadingIndicator(); 
  }
});
