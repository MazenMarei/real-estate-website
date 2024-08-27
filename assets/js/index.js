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
    } else { // * if the navbar is not expanded
      clickedOutside = true;
    }
  });


});


