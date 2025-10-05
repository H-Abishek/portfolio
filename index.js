const ham = document.getElementsByClassName("dropdown")[0];
const hi = document.getElementsByClassName("hamburg")[0];
const x = document.getElementsByClassName("cancle")[0];
hi.addEventListener("click", ()=> {
    ham.classList.add("open");
});
x.addEventListener("click", ()=> {
    ham.classList.remove("open");
});

// ---------------------------------------------------------------------------- 

let lastScrollTop = 0;
const navbar = document.getElementsByTagName("header")[0];

window.addEventListener("scroll", ()=> {
let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      navbar.style.top = `-80px`; // hide
    } else {
      navbar.style.top = "0"; // show
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ---------------------------------------------------------------------------- 
