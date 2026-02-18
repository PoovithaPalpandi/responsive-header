// Announcement Slider
const slider = document.querySelector(".announcement-slider");
let index = 0;

setInterval(() => {
  index++;
  if (index >= slider.children.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-bar ul");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
