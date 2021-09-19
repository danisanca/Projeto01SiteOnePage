
$('.slide-principal-img').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 10000
  });


document.querySelector(".Menu-Mobile").addEventListener("click",()=>
  
    document.querySelector(".menu").classList.toggle("show-menu")
    
);

function iconeinicio(){
const windowTop = window.pageYOffset;
const icone = document.querySelector(".button-home");
let showbutton = false;
if(windowTop > 420){
  document.querySelector(".button-home").classList.add("show")
}
else{
  
    document.querySelector(".button-home").classList.remove("show")
  
}
console.log(windowTop);

}

window.addEventListener('scroll', () => {
  iconeinicio();
})