
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

// const hid = document.getElementById("hid")
// const rotate = document.getElementById("rot")
// const open = document.querySelectorAll("#open").addEventListener("click" , function(){
//    if(hid.classList.contains("hidden")){
//     hid.classList.remove("hidden")
//     rotate.style.transform = "rotate(180deg)"
//    }
//    else{
//     hid.classList.add("hidden")
//     rotate.style.transform = "rotate(0deg)"
//    }
// })