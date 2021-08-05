'use strict';

// index.html
// vueカルーセル
new Vue({
    el: '#carousel',
    components: {
      carousel: VueCarousel.Carousel,
      slide: VueCarousel.Slide,
    },
  });