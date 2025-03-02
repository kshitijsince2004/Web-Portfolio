// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
    if (scrollBtn) scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    if (scrollBtn) scrollBtn.style.display = "none";
  }
});

// Side Navigation Menu
let body = document.querySelector("body");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

// Function to open side navigation
const showNavMenu = () => {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  if (scrollBtn) scrollBtn.style.pointerEvents = "none";
};

// Function to close side navigation
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  if (scrollBtn) scrollBtn.style.pointerEvents = "auto";
};

// Event Listeners
if (menuBtn) menuBtn.addEventListener("click", showNavMenu);
if (cancelBtn) cancelBtn.addEventListener("click", hideNavMenu);

// Close side navigation when a menu link is clicked
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
