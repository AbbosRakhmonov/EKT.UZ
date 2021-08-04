$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".navbar").addClass("fixed-navbar");
  } else if (scroll <= 40) {
    $(".navbar").removeClass("fixed-navbar");
  }
});
$(document).ready(function () {
  $(".navbar-toggler").click(function (e) {
    if (!$(this).hasClass("opened")) {
      $(this).addClass("opened");
    } else {
      $(this).removeClass("opened");
    }
  });
  $(".send-btn").click(function (e) {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let text = document.getElementById("fulltext");
    e.preventDefault();
    if (
      username.value != "" &&
      username.value != " " &&
      isNaN(username.value)
    ) {
      if (text.value !== "" && text.value !== " " && isNaN(text.value)) {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "Elektrotexnikkompleks@gmail.com",
          Password: "sandjar81",
          To: "Elektrotexnikkompleks@gmail.com",
          From: "Elektrotexnikkompleks@gmail.com",
          Subject: `${email.value} : ${username.value} dan xabar`,
          Body: `${text.value}`,
        }).then(function (e) {
          let timer = setTimeout(() => {
            $(".alert").addClass("alert-open");
          }, 1);

          setTimeout(() => {
            $(".alert").removeClass("alert-open");
            clearTimeout(timer);
          }, 2000);
        });
      }
    }
  });
});
