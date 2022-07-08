function myFunction() {
    const menuBox = document.querySelector(".menuBox");
    console.log(menuBox);

    if (menuBox.style.display === "none") {
        menuBox.style.display = "block";
    } else {
        menuBox.style.display = "none";
    }
}
