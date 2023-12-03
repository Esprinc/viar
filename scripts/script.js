const swiper = new Swiper(".swiper-first", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper1 = new Swiper(".swiper-second", {
  slidesPerView: 1,
  direction: "horizontal",

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
