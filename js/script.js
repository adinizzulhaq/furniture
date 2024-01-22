// Sidebar on hamburger menu
const hamburger = document.querySelector(".hamburger-menu");
const navbarEkstra = document.querySelector(".navbar-ekstra");

document.querySelector(".hamburger-menu").onclick = () => {
  hamburger.classList.toggle("close");
  navbarEkstra.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarEkstra.contains(e.target)) {
    navbarEkstra.classList.remove("active");
    hamburger.classList.remove("close");
  }
});

// Jump section on click
document.querySelectorAll(".page-scroll").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    var tujuan = this.getAttribute("href");
    var elemenTujuan = document.querySelector(tujuan);

    if (elemenTujuan) {
      var offsetTop = elemenTujuan.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Active links on scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 70;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
