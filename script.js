
// SOCIAL MEDIA
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "assets/icons/github.svg"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "assets/icons/linkedin.svg"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "assets/icons/instagram.svg"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    icon: "assets/icons/dribbble.svg"
  }
];


// SKILLS
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "PHP",
  "Python",
  "Figma",
  "Responsive Design"
];


// PROJECTS
const projects = [
  {
    title: "Website Project",
    category: "WEB DEVELOPMENT",
    description: "Proyek pengembangan website dengan tampilan sederhana dan fungsional.",
    image: "assets/images/project-1.png"
  },
  {
    title: "Creative Design",
    category: "UI / WEB DESIGN",
    description: "Eksplorasi desain dan penyusunan tampilan antarmuka website.",
    image: "assets/images/project-4.png"
  },
  {
    title: "Personal Project",
    category: "WEB EXPERIMENT",
    description: "Eksperimen pribadi untuk mengembangkan kemampuan dalam pemrograman.",
    image: "assets/images/project-3.png"
  }
];


// RENDER SOCIAL MEDIA
function renderSocials() {
  const container = document.getElementById("social-links");

  if (!container) return;

  container.innerHTML = socials.map(social => `
    <a
      href="${social.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${social.name}"
      title="${social.name}"
      class="transition duration-300 hover:-translate-y-1"
    >
      <img
        src="${social.icon}"
        alt="${social.name}"
        class="h-5 w-5 opacity-60 transition duration-300 hover:opacity-100"
      >
    </a>
  `).join("");
}


// RENDER SKILLS
function renderSkills() {
  const container = document.getElementById("skills-container");

  if (!container) return;

  container.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <span>${skill}</span>
    </div>
  `).join("");
}


// RENDER PROJECTS
function renderProjects() {
  const container = document.getElementById("projects-container");

  if (!container) return;

  container.innerHTML = projects.map((project, index) => `
    <article class="project-card">

      <img
        src="${project.image}"
        alt="${project.title}"
        class="project-image"
        loading="lazy"
      >

      <div class="project-content">

        <p class="project-category">
          ${project.category}
        </p>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

      </div>

    </article>
  `).join("");
}


// MOBILE NAVIGATION
function setupMobileMenu() {
  const menuButton = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!menuButton || !mobileNav) return;

  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");

    menuButton.classList.toggle("is-open", isOpen);

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  const mobileLinks = mobileNav.querySelectorAll("a");

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuButton.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// ACTIVE NAVIGATION
function setupActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    let currentSection = "home";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 180;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
}


// INITIALIZE WEBSITE
document.addEventListener("DOMContentLoaded", () => {
  renderSocials();
  renderSkills();
  renderProjects();
  setupMobileMenu();
  setupActiveNav();
});
