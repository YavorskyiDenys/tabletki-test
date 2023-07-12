import 'Plugins/accordionPlugin';

export default function initAccordion() {
  jQuery('ul.sitebar-accordion').slideAccordion({
    opener: '>a.opener',
    slider: '>div.slide',
    collapsible: true,
    animSpeed: 300,
  });
}
