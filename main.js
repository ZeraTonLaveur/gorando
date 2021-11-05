let r = document.querySelector(':root');
            
function myFunction_set() {
                
    r.style.setProperty('--color-orange', 'rgb(255, 238, 0)');

}

const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const link = document.querySelectorAll(".header-flex-mobile-menu a");
const menu = document.querySelector(".header-flex-mobile-menu");


bars.addEventListener('click', barsStart);
cross.addEventListener('click', crossStart);

const headerFlexMobile = document.querySelector(".header-flex-mobile");
const button = document.querySelector(".button");
const headerFlexMobileMenu = document.querySelector(".header-flex-mobile-menu");


function barsStart() {

    menu.classList.add("slideTop");

    headerFlexMobile.style.display = "none";
    headerFlexMobileMenu.style.display = "flex";

    link.forEach((element) => {

        element.addEventListener('click', crossStart);
    })
}

function crossStart() {

    headerFlexMobile.style.display = "block";
    headerFlexMobileMenu.style.display = "none";

}

const imageRight = document.querySelector("header");
const imageSize = imageRight.offsetHeight - 600;

const image = document.querySelector(".section1-img1 img");
const text = document.querySelector(".section1-text1");

const imageBottom = document.getElementById("bottom-image");
const image2size = imageBottom.offsetHeight + 850;

const image2 = document.querySelector(".section2-box2 img");

function headerScroll() {

    let imageY = window.scrollY;

    if (imageY > imageSize) {

        image.classList.add("slideRight");
        text.classList.add("slideLeft");

    }

    if (imageY > image2size) {

        image2.classList.add("slideBottom");
    }

}

window.addEventListener("scroll", headerScroll)