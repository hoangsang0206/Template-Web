//Show overlay when click category button
const categoryBtn = document.querySelector(".category-btn");
const overlay = document.querySelector(".overlay");

categoryBtn.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
});

overlay.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
});
