var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
};

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-Bar");
    navBar.classList.toggle("active");
};

const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", () => {
    overlay = document.querySelector(".overlay")
    overlay.classList.toggle("online");
})

const arrow3 = document.querySelector(".arrow3");
arrow3.addEventListener("click", () => {
    overlay = document.querySelector(".overlay-1")
    overlay.classList.toggle("online");
})

const arrowcolor = document.querySelector(".arrow");
arrowcolor.addEventListener("click", () => {
    color = document.querySelector(".arrow")
    color.classList.toggle("color");
})

const arrow3color = document.querySelector(".arrow3");
arrow3color.addEventListener("click", () => {
    color = document.querySelector(".arrow3")
    color.classList.toggle("color");
})