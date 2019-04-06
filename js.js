//Nav Retrátil

var navbar = document.getElementById("NavRetratil");
var navlogo = document.getElementById("NavLogo");
var startPoint = 0;
var sizePoint = 500;
var sizeScale = 100/sizePoint;

var heightSize = function(){
   var sizeValue = 0;
   if(window.scrollY <= startPoint){
      return 100;
   }
   else if(window.scrollY > startPoint && window.scrollY < sizePoint){
      sizeValue = sizeValue + window.scrollY*sizeScale;
      return 100 - (50 * (sizeValue/100));
   }
   return 50;
};

var opacity = function(){
   var opValue = 0;
   if(window.scrollY <= startPoint){
      return 0;
   }
   if(window.scrollY > startPoint && window.scrollY < sizePoint){
      opValue = opValue + window.scrollY*sizeScale;
      return opValue/100;
   }
   return 1;
};

document.onscroll = function(){
   navbar.style.height = heightSize() + "px";
   navbar.style.backgroundColor = "rgba(255,255,255," + opacity() + ")";
   navbar.style.boxShadow = "0px 2px 8px rgba(0, 0, 0," + (opacity()/10) +")";
   if(window.scrollY < sizePoint/4){
      navbar.style.color = "#fff";
   }
   else{
      navbar.style.color = "#33aaaa";
   }
};

//Slideshow
var ul = document.getElementById("slideshow");
var itens = ul.getElementsByTagName("li");
var itensSize = itens.length;
var initSlide = itens.length-1;
var segSlides = 7;
var timer = 0;

var nextSlide = function(slideN){
   return ((slideN+1) === itens.length) ? 0 : slideN+1;
}
var prevSlide = function(slideN){
   return ((slideN-1) < 0) ? (itens.length-1) : slideN-1;
}
var slideIt = function(){
   itens[initSlide].style.opacity = 0;
   itens[initSlide].style.display = "hidden";
   itens[initSlide].style.zIndex = -1;
   initSlide = nextSlide(initSlide);
   itens[initSlide].style.opacity = 1;
   itens[initSlide].style.display = "block";
   itens[initSlide].style.zIndex = 0;
   console.log(initSlide);
   timer = setTimeout(slideIt, (segSlides*1000));
}
var btnBack = function(){
   clearTimeout(timer);
   itens[initSlide].style.opacity = 0;
   itens[initSlide].style.display = "hidden";
   itens[initSlide].style.zIndex = -1;
   initSlide = prevSlide(initSlide);
   itens[initSlide].style.opacity = 1;
   itens[initSlide].style.display = "block";
   itens[initSlide].style.zIndex = 0;
   timer = setTimeout(slideIt, (segSlides*1000));
}
var btnNext = function(){
   clearTimeout(timer);
   itens[initSlide].style.opacity = 0;
   itens[initSlide].style.display = "hidden";
   itens[initSlide].style.zIndex = -1;
   initSlide = nextSlide(initSlide);
   itens[initSlide].style.opacity = 1;
   itens[initSlide].style.display = "block";
   itens[initSlide].style.zIndex = 0;
   timer = setTimeout(slideIt, (segSlides*1000));
}

window.onload = slideIt();