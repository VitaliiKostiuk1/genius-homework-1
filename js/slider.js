const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },

  // If we need pagination
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__swiper-pagination',
    bulletActiveClass: 'pagination__swiper-pagination--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arr-button.next',
    prevEl: '.arr-button.prev',
  },
});
