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
    if (link.includes("nav")) {
      $("#nav").addClass("open");
      return;
    }
    if (link.includes("#!")) {
      $("#nav").removeClass("open");
      return;
    }
    if (link.includes("#")) {
      if (!link.split("#")[1]) {
        // 到最上層
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // 到當頁目標
        const offsetTop = e.offsetTop;
        $("#nav").removeClass("open");
        const target = document.getElementById(`${link.split("#")[1]}`);
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      }
    }
  });
});
$(window).on("resize", function () {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (!mediaQuery.matches) {
    $("#nav").removeClass("open");
  }
});
