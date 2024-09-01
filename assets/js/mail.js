$(document).ready(function () {
  $("#mail-icon").on("click", function (event) {
    event.preventDefault();
    const ssuyuMail = "ssuyuke@gmail.com";
    const subject = "與思宇聯繫";
    const mailtoLink = `mailto:${encodeURIComponent(
      ssuyuMail
    )}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, "_blank");
  });
});
