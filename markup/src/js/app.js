import ready, { HTML } from './utils';
import initOpenClose from './components/openClose';
import initAccordion from './components/accordion';

ready(() => {
  HTML.classList.add('is-loaded');
  initOpenClose();
  initAccordion();
});
