// Selecting elements
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navMenu = document.querySelector(".menu");
const scrollButton = document.querySelector(".scroll-button");

// Function to toggle the navigation menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    }
    navMenu.classList.remove("active"); // Close menu on mobile after clicking a link
  });
});

// Show or hide the scroll-to-top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// Scroll back to top smoothly
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Fade-in effect for sections when scrolling
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

// Apply observer to all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
