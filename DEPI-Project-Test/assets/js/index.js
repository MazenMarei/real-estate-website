/* ----------------------- wehen the document is ready ---------------------- */
$(document).ready(() => {
  /* ------------------- navbar toggler and navbar variables ------------------ */
  const navbarToggler = $("#navbarToggler");
  const navbar = $("#navbar");
  let clickedOutside = false;

  /* ----------------------- click event for the navbar ----------------------- */
  navbar.click((e) => {
    // * check if the navbar-toggler is clicked and the navbar is expanded
    if (navbarToggler.attr("aria-expanded") === "true") {
      clickedOutside = false;
    }
  });

  /* ----------------- click event for the document (outside) ----------------- */

  $(document).click((e) => {
    // * check if the navbar-toggler is clicked and the navbar is expanded
    if (navbarToggler.attr("aria-expanded") === "true" && clickedOutside) {
      return navbarToggler.click();
    } else {
      // * if the navbar is not expanded
      clickedOutside = true;
    }
  });

  /* ----------- prevent form submission and make cutome vaildation ----------- */
  $(".needs-validation").submit(function (event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      event.target.classList.add("was-validated");
      setTimeout(() => {
        event.target.classList.remove("was-validated");
      }, 3000);
    } else {
      $("#my-toast").toast("show");
      $("#my-toast").addClass("toast-animation");
      setTimeout(() => {
        $("#my-toast").removeClass("toast-animation");
      }, 5000);
      event.target.reset();
    }
  });

  /* ------------------------- smooth scrolling effect ------------------------ */
  const scrollBtn = $("#scrollUpBtn");
  $(document).on("scroll", () => {
    // console.log(window.scrollY + document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollHeight);

    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight / 4
    ) {
      scrollBtn.removeClass("d-none");
      scrollBtn.addClass("slide-and-fade-in");
    } else {
      if (scrollBtn.hasClass("d-none")) return;
      scrollBtn.addClass("slide-and-fade-out");
      setTimeout(() => {
        scrollBtn.addClass("d-none");
        scrollBtn.removeClass("slide-and-fade-out");
        scrollBtn.removeClass("slide-and-fade-in");
      }, 300);
    }
  });

  /* ------------------------- smooth scrolling effect ------------------------ */
  $("#scrollUpBtn").click(() => {
    $("html, body").animate(
      { scrollTop: 0 },
      {
        duration:
          (window.scrollY / 100).toFixed(0) -
          (window.scrollY / 100).toFixed(0) * 0.1,
        specialEasing: {
          scrollTop: "linear",
        },
      }
    );
  });

  /* -------------------------- auto play modal video ------------------------- */

  document
    .getElementById("videoModal")
    .addEventListener("shown.bs.modal", () => {
      $("#aboutUsVideo").attr(
        "src",
        $("#aboutUsVideo").attr("src") + "&autoplay=1"
      );
    });

  /* -------------------- close video after modal is closed ------------------- */
  document
    .getElementById("videoModal")
    .addEventListener("hidden.bs.modal", () => {
      $("#aboutUsVideo").attr(
        "src",
        $("#aboutUsVideo").attr("src").replace("&autoplay=1", "")
      );
    });
});
