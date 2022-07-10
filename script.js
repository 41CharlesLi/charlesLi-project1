//hamburger menu
function showMenu() {
    const menuBox = document.querySelector("ul");
    const linksArray = menuBox.children;
    const shoppingCounter = linksArray[7].lastElementChild.lastElementChild;

    menuBox.classList.toggle("menuBox");

    Array.from(linksArray).forEach((listItem) => {
        const navLink = listItem.firstElementChild;
        navLink.classList.toggle("mobile-hidden");
    });
    shoppingCounter.classList.toggle("mobile-hidden");
}

//carousel

const imgList = document.getElementById("imgList");
const scrollRight = document.getElementById("rightScroll");
const scrollLeft = document.getElementById("leftScroll");
const indImg = document.querySelector(".circleGalleryImg");

scrollRight.addEventListener("click", (event) => {
    imgList.scrollBy(indImg.width, 0);
});

scrollLeft.addEventListener("click", (event) => {
    imgList.scrollBy(-indImg.width, 0);
});
