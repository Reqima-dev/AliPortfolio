const boxes = document.querySelectorAll(".service");
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes();

const galleryes = document.querySelectorAll(".gal");
const checkGallery = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  galleryes.forEach((gal) => {
    const boxTop = gal.getBoundingClientRect().top;
    if (boxTop < triggerBottom) gal.classList.add("show");
    else gal.classList.remove("show");
  });
};
window.addEventListener("scroll", checkGallery);
checkGallery();

/*--------------- CLIC BUTON MENU ---------------*/

const buttonMenu = document.querySelector(".button_menu");
const barMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu_close");

buttonMenu.addEventListener("click", () => {
  barMenu.style.opacity = "1";
  buttonMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  buttonMenu.style.display = "block";
  barMenu.style.opacity = "0";
});
