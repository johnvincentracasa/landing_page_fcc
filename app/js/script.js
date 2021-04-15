const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.header__menu');
const overlayLinks = document.querySelector('.overlay');

mobileMenuBtn.onclick = function () {
	header.classList.toggle('open');
};
