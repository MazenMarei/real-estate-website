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
});
