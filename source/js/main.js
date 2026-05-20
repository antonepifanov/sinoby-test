import {Form} from './modules/form-validate/form';
import {initBurger} from './modules/init-burger';
import {initColorsSlider} from './modules/init-colors-slider';
import {iosVhFix} from './utils/ios-vh-fix';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();
  initBurger();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initColorsSlider();
  });
});
