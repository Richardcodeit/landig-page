
const icon = document.querySelector(".icon-menu")
icon.addEventListener("click", ()=>{
    document.querySelector(".nav").classList.add("active")
    icon.classList.add("active")
})
document.querySelector(".span").addEventListener("click",()=>{
    document.querySelector(".nav").classList.remove("active")
    document.querySelector(".nav").style.transition = ".5s"
    icon.classList.remove("active")
})
const show = document.querySelectorAll(".open")
show.forEach(box =>{
   box.addEventListener("click" , ()=>{
       const hiddenElement = box.nextElementSibling;
       hiddenElement.classList.add("hidden")
       if(!hiddenElement.classList.contains("active")){
       hiddenElement.classList.add("active")
    }
    else{
        hiddenElement.classList.remove("active")
        rotateElement.classList.remove("rota")
    }
   })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  AOS.init( {
    duration: 1000,
});
