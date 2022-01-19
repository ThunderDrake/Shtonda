import _vars from '../_vars'
import Swiper, { Pagination, Navigation } from 'swiper'

Swiper.use([Pagination, Navigation]);

new Swiper(_vars.heroSlider, {
  slidesPerView: 1,
  direction: 'vertical',
  pagination: {
    el: '.hero__slider-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return  ('0' + current).slice(-2) + '<span class="hero__slider-pagination-decor"></span>' + ('0' + total).slice(-2);
  }
  },
  navigation: {
    prevEl: '.hero__slider-nav--next',
    nextEl: '.hero__slider-nav--prev',
  },
});
