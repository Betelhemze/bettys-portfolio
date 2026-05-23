const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const header = document.querySelector(".site-header");

// Theme management
const currentTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme =
    root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards for animation with staggered delay
document
  .querySelectorAll(".project-card, .skill-card, .about-stats div, .timeline-item")
  .forEach((card, index) => {
    card.style.opacity = "0";
    card.style.animationDelay = `${index * 0.08}s`;
    observer.observe(card);
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
