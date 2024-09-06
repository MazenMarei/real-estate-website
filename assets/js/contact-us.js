const contactUsForm = document.getElementById("contactUsForm");
const myToast = document.getElementById("my-toast");

contactUsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("test");

  // ! if there is a missing requerid data
  if (!contactUsForm.checkValidity()) {
    contactUsForm.classList.add("was-validated");
    setTimeout(() => {
      contactUsForm.classList.remove("was-validated");
    }, 5000);
    return;
  }

  // ! if there no missing requierd data
  console.log("no missing");
  console.log(myToast);

  myToast.classList.add("toast-animation");

  setTimeout(() => {
    myToast.classList.remove("toast-animation");
  }, 4800);
});
