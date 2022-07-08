function myFunction() {
    const menuBox = document.querySelector("ul");
    const listItems = document.querySelectorAll(".menuItem");

    menuBox.classList.toggle("menuBox");
    listItems.classList.toggle("mobile-hidden");
    console.log(menuBox.classList);
}
