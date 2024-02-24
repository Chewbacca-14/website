// mobile menu
const hamburger = document.querySelector('.hamburger');
const menuItem = document.querySelector('.menu_item');

// toggle mobile menu  on hamburger click
hamburger.addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.toggle("active");
  const src =  hamburger.src;
  if (src.includes('menu')) {
    hamburger.src = "assets/cancel.png";
  } else {
    hamburger.src = "assets/menu.png";
  }
});

// close mobile menu on menu item click
menuItem.addEventListener("click", () => {
  document.querySelector(".mobile_menu").classList.toggle("active");
  const src =  hamburger.src;
  if (src.includes('menu')) {
    hamburger.src = "assets/cancel.png";
  } else {
    hamburger.src = "assets/menu.png";
  }
});