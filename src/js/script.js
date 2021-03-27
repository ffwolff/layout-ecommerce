

//SWIPER

var swiper = new Swiper('.swiper-banner', {
    cssMode: true,
    spaceBetween: 30,
    centeredSlides: true,
    keyboard: false,
    mousewheel: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  });

//

//SWIPER MINI

var swipermini = new Swiper('.mini-swiper', {
  cssMode: true,
  spaceBetween: 30,
  centeredSlides: true,
  mousewheel: false,
  keyboard: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swipermini-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swipermini-pagination',
    clickable: true,
  },
  
});
