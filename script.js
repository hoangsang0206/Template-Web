//Show overlay when click category button -------------------------------------------
const categoryBtn = document.querySelector(".category-btn");
const overlay = document.querySelector(".overlay");

categoryBtn.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
    document.body.classList.toggle("web-scroll-block");
});

overlay.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
    document.body.classList.toggle("web-scroll-block");
});

//Show scroll to top button ----------------------------------------------------------
const scrollTopBtn = document.querySelector(".to-top-btn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("showToTopBtn");
      } else {
        scrollTopBtn.classList.remove("showToTopBtn");
      }
}

scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  //