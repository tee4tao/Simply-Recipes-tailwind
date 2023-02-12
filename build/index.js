let toggleBtn = document.querySelector(".toggle-btn");
let navLinks = document.querySelector(`.nav-links_col`);
toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navLinks.classList.toggle("show-links");
});
let year = document.querySelector(`.year`);
let date = new Date();
let yearValue = date.getFullYear();
year.textContent = yearValue;
