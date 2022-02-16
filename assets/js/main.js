// OPEN SHOW NAVIGATION MENU
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('nav-show')
	})
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('nav-show')
	})
}

// CLOSE MENU ON MOBILE
const navLinks = document.querySelectorAll('.nav__link')

if (navLinks) {
	navLinks.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			navMenu.classList.remove('nav-show')
		})
	})
}
