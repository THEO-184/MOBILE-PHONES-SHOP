const navOpen = document.querySelector(".nav-hamburger");
const navClose = document.querySelector(".close-toggle");
const menu = document.querySelector(".nav-menu");
const navContainer = document.querySelector(".nav-menu");

AOS.init();

navOpen.addEventListener("click", () => {
	menu.classList.add("open");
	document.body.classList.add("active");
	navContainer.style.left = "0";
	navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
	menu.classList.remove("open");
	document.body.classList.remove("active");
	navContainer.style.left = "-30rem";
	navContainer.style.width = "0";
});
