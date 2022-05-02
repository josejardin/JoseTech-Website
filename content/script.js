// ------------------------- Navigation
let Hambg = document.querySelector(".Hambg-btn");
let cnclBtn = document.querySelector(".cncl-btn");
let navBtn = document.querySelector(".navbar");

Hambg.onclick = function() {
    Hambg.style.opacity = "0";
    Hambg.style.pointerEvents = "none";
    navBtn.classList.add("active");
}
cnclBtn.onclick = function() {
    Hambg.style.opacity = "1";
    Hambg.style.pointerEvents = "auto";
    navBtn.classList.remove("active");
}// ------------------------- End Navigation

// ------------------------- Sticky Navigation
let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}// ------------------------- End Sticky Navigation

// ------------------------- Scroll Reveal
window.addEventListener('scroll', reveal);

function reveal(){
    var scrollveal = document.querySelectorAll('.reveal');
    for (var i = 0; i < scrollveal.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = scrollveal[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealtop < windowheight - revealpoint){ 
            scrollveal[i].classList.add('active');
        }
        else {
            scrollveal[i].classList.remove('active');
        }
    }
}// ------------------------- End Scroll Reveal

// ------------------------- Collapsible Button
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}// ------------------------- End Collapsible Button