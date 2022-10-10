let up = document.querySelector(".scroll-up");
let sections = document.querySelectorAll("section");
let Links = document.querySelectorAll(".menu-wrap ul li");

window.onscroll = function () {
  let current = "";
  sections.forEach((section) => {
    if (pageYOffset >= section.offsetTop - 1) {
      current = section.getAttribute("id");
    }
  });
  Links.forEach((link) => {
    if (link.classList.contains(current)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (window.scrollY >= 800) {
    up.classList.add("show");
  } else up.classList.remove("show");

  up.onclick = function () {
    window.scrollTo({
      top: 0,
    });
  };
};

const navToggle = document.querySelector(".nav-toggle");

openMenu = function () {
  if (window.innerWidth <= 991.98) {
    navToggle.onclick = function () {
      document.body.classList.toggle("open-menu");
    };
    Links.forEach((link) => {
      link.onclick = function () {
        document.body.classList.toggle("open-menu");
      };
    });
  }
};
openMenu();

window.onresize = function () {
  openMenu();
};

let darkMood = localStorage.getItem("darkMood");
const darkModeToggle = document.querySelector("#darMood");

const enableDark = () => {
  document.body.classList.add("t-d-w");
  localStorage.setItem("darkMood", "t-d-w");
};

const disableDark = () => {
  document.body.classList.remove("t-d-w");
  localStorage.setItem("darkMood", null);
};

if (darkMood === "t-d-w") {
  enableDark();
}

darkModeToggle.addEventListener("click", () => {
  darkMood = localStorage.getItem("darkMood");

  if (darkMood !== "t-d-w") {
    enableDark();
  } else {
    disableDark();
  }
});
