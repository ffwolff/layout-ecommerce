

//SWIPER

var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    spaceBetween: 30,
    centeredSlides: true,
    mousewheel: true,
    keyboard: true,
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
