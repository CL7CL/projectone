let search = document.querySelector('.search');
document.querySelector('#search').onclick = () =>{
  search.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.toggle('active');
}



var swiper = new Swiper(".cafe-row", {
  spaceBetween: 50,
  loop:true,
  centeredslides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },

  navigation:{
    nextEl :".swiper-button-next",
    prevEl :".swiper-button-prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
   
    },
    768: {
      slidesPerView: 1,
   
    },
    1024: {
      slidesPerView: 1,
   
    },
  },  
});

var swiper = new Swiper(".review-row", {
  spaceBetween:35,
  loop:true,
  centeredslides:true,
  autoplay:{
    delay:7000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
   
    },
    768: {
      slidesPerView: 2,
   
    },

    1024: {
      slidesPerView: 3,
   
    }, 

  },  
});
