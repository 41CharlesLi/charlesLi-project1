function showMenu() {
    const menuBox = document.querySelector("ul");

    menuBox.classList.toggle("menuBox");
    console.log(menuBox.classList);
}

var imgList = document.getElementById("imgList");
var scrollRight = document.getElementById("leftScroll");
var scrollLeft = document.getElementById("rightScroll");

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener("click", (event) => {
    if (window.innerWidth < 700) {
        imgList.scrollBy(-165, 0);
    } else {
        imgList.scrollBy(-600, 0);
    }
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener("click", (event) => {
    if (window.innerWidth < 700) {
        imgList.scrollBy(165, 0);
    } else {
        imgList.scrollBy(600, 0);
    }
});
