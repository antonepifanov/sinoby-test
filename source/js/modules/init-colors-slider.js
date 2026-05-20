import Swiper from 'swiper';
import SwiperCore, {Pagination, Lazy} from 'swiper';

SwiperCore.use([Pagination, Lazy]);
export const initColorsSlider = () => {
  const sliderContainers = document.querySelectorAll('[data-colors-slider-container]');
  if (sliderContainers.length === 0) {
    return;
  }
  sliderContainers.forEach((sliderContainer) => {
    const slider = sliderContainer.querySelector('[data-colors-slider]');
    const bulletClasses = sliderContainer.dataset.bulletClasses
      ? sliderContainer.dataset.bulletClasses.split(',')
      : [];

    // eslint-disable-next-line no-new
    new Swiper(slider, {
      allowTouchMove: false,
      lazy: true,
      slidesPerView: 1,
      pagination: {
        el: sliderContainer.querySelector('.swiper-pagination'),
        clickable: true,
        renderBullet(index, className) {
          // Рендерим каждый буллет с индивидуальным классом
          const customClass = bulletClasses[index] || '';
          return `<span class="${className} ${customClass}"></span>`;
        },
      },
    });
  });
};
