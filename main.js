$(".site-header-navbtn").on("click", () => {
    $("body").toggleClass("is-nav-open");
});

$(".site-header-nav").on("click", "a", () => {
    $("body").removeClass("is-nav-open")
})