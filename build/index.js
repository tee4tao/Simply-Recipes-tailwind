let toggleBtn = document.querySelector(".toggle-btn");
let navLinks = document.querySelector(`.nav-links_col`);
toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navLinks.classList.toggle("hidden");
});
