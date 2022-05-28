var backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 400) {
        backToTop.classList.add("show");

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0
            });
        });
    } else {
        backToTop.classList.remove("show");
    }
});
