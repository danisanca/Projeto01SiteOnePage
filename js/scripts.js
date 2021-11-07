
$('.slide-principal-img').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed: 10000
  });


  //Atribur class para manipular menu hamburger e propiedads
document.querySelector(".Menu-Mobile").addEventListener("click",()=>
  {
    document.querySelector(".Main-body").classList.toggle("show-menu");
    desativarScroll();
  });


//Desativar menu hamburger e ativar Scroll
document.querySelector(".menu-link").addEventListener("click",()=>{
  if(document.querySelector(".show-menu") != null){
    document.querySelector(".Main-body").classList.toggle("show-menu")
    desativarScroll();
  }
  

});

//Desativa o scroll quando abrir o menu hamburger
function desativarScroll(){
  if(document.querySelector(".show-menu") != null){
    console.log("menu aberto")
    document.querySelector("body").classList.toggle("disable-scroll")
  }
  else{
    console.log("menu fexado")
    document.querySelector("body").classList.toggle("disable-scroll")
  }
}
