const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const header = document.querySelector(".site-header");

// Theme management
const currentTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "Light" : "Dark";

themeToggle.addEventListener("click", () => {
  const nextTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  themeToggle.textContent = nextTheme === "dark" ? "Light" : "Dark";
  localStorage.setItem("theme", nextTheme);
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
  lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards for animation
document
  .querySelectorAll(".project-card, .skill-card, .about-stats div")
  .forEach((card, index) => {
    card.style.opacity = "0";
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

// Project card interaction
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.zIndex = "10";
  });
  card.addEventListener("mouseleave", function () {
    this.style.zIndex = "auto";
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
