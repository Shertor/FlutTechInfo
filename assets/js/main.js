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
