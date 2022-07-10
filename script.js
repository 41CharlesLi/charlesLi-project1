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

const imgList = document.getElementById("imgList");
const scrollRight = document.getElementById("rightScroll");
const scrollLeft = document.getElementById("leftScroll");
const indImg = document.querySelector(".circleGalleryImg");
// console.log(indImg.offsetParent.nextElementSibling);
// console.log(imgList);
// console.log(indImg);
// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener("click", (event) => {
    imgList.scrollBy(indImg.width, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener("click", (event) => {
    imgList.scrollBy(-indImg.width, 0);
});
