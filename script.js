document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu + animate hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");   // slide down menu
    hamburger.classList.toggle("active");  // animate into X
  });
});