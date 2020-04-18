import modals from './modules/modals';
import forms from './modules/forms';
import sliders from './modules/sliders';
import filter from './modules/filter';
import switcher from './modules/switcher-mobile';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    forms();
    sliders('.sliderSelector .gallery_slider__wrapper__img', '', '.gallery_slider__wrapper__prev', '.gallery_slider__wrapper__next', '.gallery_slider__points .gallery_slider__points__item', '.gallery_slider__description__wrapper .gallery_slider__description', 'gallery_slider__points__item__active');
    filter();
    try {
        switcher('.production__nav__stone__descr', '.button__nav__small');
        switcher('.production__nav__interior__descr', '.button__nav__big');
    } catch (e) {}

});