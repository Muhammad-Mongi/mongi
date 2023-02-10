// MAIN NAV UNDERLINE ANIMATION
const liElements = document.querySelectorAll("nav ul li");

liElements.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.querySelector("span").classList.remove("hide-underline");
    el.querySelector("span").classList.add("show-underline");
  });
  el.addEventListener("mouseleave", () => {
    el.querySelector("span").classList.remove("show-underline");
    el.querySelector("span").classList.add("hide-underline");
  });
});

//  NAV SHOW HIDE

const nav = document.querySelector(".mobile-nav");

const navBtn = document.querySelector(".toggle-icon");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const homeSection = document.querySelector(".home");

window.onscroll = function () {
  const header = document.querySelector("header");
  if (window.pageYOffset >= 100) {
    header.classList.add("show");
    homeSection.style.marginTop = "10rem";
  } else {
    header.classList.remove("show");
    homeSection.style.marginTop = "0";
  }

  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + header.offsetHeight;
  const navlinks = document.querySelectorAll("nav .navlink");

  const mobileNavLinks = document.querySelectorAll(".mobile-navlink");

  sections.forEach((section, index) => {
    let top = section.offsetTop;
    let bottom = top + section.offsetHeight;
    if (scrollPosition >= top && scrollPosition <= bottom) {
      navlinks.forEach((link) => link.classList.remove("active-page"));
      navlinks[index].classList.add("active-page");
      mobileNavLinks.forEach((link) => link.classList.remove("active-page"));
      mobileNavLinks[index].classList.add("active-page");
    }
  });
};

// SWIPPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    reverseDirection: true,
  },
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

// EXPAND PORTFOLIO ITEM

const portfolioItems = document.querySelectorAll(".portfolio .item");

portfolioItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    portfolioItems.forEach((item) => item.classList.remove("expand"));
    item.classList.add("expand");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("expand");
  });
});
