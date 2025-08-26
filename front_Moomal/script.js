// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Parallax effect for background elements
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".neural-node, .ai-icon");
  const speed = 0.5;

  parallax.forEach((element) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Dynamic particle generation
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 2 + "s";
  document.querySelector(".ai-background").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 12000);
}

// Generate particles periodically
setInterval(createParticle, 3000);

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// Tool Section

// Add loading animation for tool buttons
document.querySelectorAll(".tool-button:not([disabled])").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
    this.style.pointerEvents = "none";

    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.pointerEvents = "auto";
      // Here you would normally redirect to the actual tool page
      alert("Tool will be available soon!");
    }, 2000);
  });
});
// Add hover effects for tool cards
document.querySelectorAll(".tool-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add dynamic background to hero
function createFloatingElements() {
  const hero = document.querySelector(".hero-section");
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("div");
    element.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 100 + 50}px;
                    height: ${Math.random() * 100 + 50}px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation: float ${
                      Math.random() * 10 + 10
                    }s linear infinite;
                    pointer-events: none;
                `;
    hero.appendChild(element);
  }
}

// Add CSS for floating animation
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 0.1; }
            }
        `;
document.head.appendChild(style);

createFloatingElements();
