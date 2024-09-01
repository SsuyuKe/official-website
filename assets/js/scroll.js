$(document).ready(() => {
  $("a").on("click", function (e) {
    const link = $(this).attr("href");
    e.preventDefault();
    if (link.includes("html")) {
      window.location.href = link;
      return;
    }
    if (link.includes("https")) {
      window.open(link);
      return;
    }
    if (link.includes("#")) {
      if (!link.split("#")[1]) {
        // 到最上層
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "smooth"
        );
      } else {
        // 到當頁目標
        $("html, body").animate(
          {
            scrollTop: $(link).offset().top,
          },
          "smooth"
        );
      }
    }
  });
});
// $(window).on("resize", function () {
//   const mediaQuery = window.matchMedia("(max-width: 992px)");
//   if (!mediaQuery.matches) {
//     $("#nav-list").removeClass("open");
//   }
// });
