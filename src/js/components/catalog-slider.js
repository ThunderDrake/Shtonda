import _vars from '../_vars'
import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation]);

new Swiper(_vars.catalogSlider, {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    prevEl: '.catalog__slider-button--prev',
    nextEl: '.catalog__slider-button--next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true
    },
    1025: {
      slidesPerView: 2
    }
  }
})
