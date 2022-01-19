import _vars from '../_vars'
import Swiper from 'swiper'

new Swiper(_vars.orderSlider, {
  slidesPerView: 1,
  // watchOverflow: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 85
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});
