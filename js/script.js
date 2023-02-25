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

// Adding Images to portfolio divs

const itemsImages = document.querySelectorAll(".item-image");

itemsImages.forEach((item) => {
  item.style.backgroundImage = `url(${item.getAttribute("data-image")})`;
});

// /////////////////////
// Handling form submitting

$("#contact_form").submit((e) => {
  e.preventDefault();

  let formData = {
    name: $("input[name=name]").val(),
    email: $("input[name=email]").val(),
    message: $("textarea[name=message]").val(),
  };

  $.ajax({
    type: "POST",
    url: "https://mongi2.000webhostapp.com/send_message.php",
    data: formData,
    dataType: "json",
    success: (response) => {
      if (response.success) {
        document
          .querySelector(".success-modal__container")
          .classList.add("active");

        document.querySelector(".success-modal").classList.add("active");

        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
      } else {
        alert("Something went wrong. Please Try again later");
      }
    },
    error: (error) => {
      console.log(error);
      document.querySelector(".error-message__text").textContent =
        error.responseText;
      console.log(error.responseText);
      const messageContainer = document.querySelector(
        ".error-message__container"
      );
      messageContainer.classList.add("active");
      messageContainer.addEventListener("animationend", () => {
        messageContainer.classList.remove("active");
      });
    },
  });
});

document.querySelector("#close-modal").addEventListener("click", () => {
  document
    .querySelector(".success-modal__container")
    .classList.remove("active");
});

window.addEventListener("load", function () {
  // Set a timeout function to remove the preloader after 10 seconds
  setTimeout(function () {
    document.querySelector(".pre-loader").classList.add("fade-out");
  }, 5000);
  setTimeout(function () {
    document.querySelector(".pre-loader").remove();
  }, 5500);
});
