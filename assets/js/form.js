$(document).ready(function () {
  function reset() {
    $('input[name="name"]').val("");
    $('input[name="email"]').val("");
    $('textarea[name="message"]').val("");
  }
  $("#contact").on("submit", function (event) {
    event.preventDefault();

    const name = $('input[name="name"]').val();
    const email = $('input[name="email"]').val();
    const message = $('textarea[name="message"]').val();

    const subject = "與思宇聯繫";
    const body = `姓名: ${name}\nE-mail: ${email}\n內容: ${message}`;
    const ssuyuMail = "ssuyuke@gmail.com";

    const mailtoLink = `mailto:${encodeURIComponent(
      ssuyuMail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    reset();
  });
});
