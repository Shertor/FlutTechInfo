// ===================== OPEN SHOW NAVIGATION MENU =====================
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('nav-show')
	})
}

function closeNav() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('nav-show')
}

if (navClose) {
	navClose.addEventListener('click', closeNav)
}

// ===================== CLOSE MENU ON MOBILE =====================
const navLinks = document.querySelectorAll('.nav__link')

if (navLinks) {
	navLinks.forEach((navItem) => navItem.addEventListener('click', closeNav))
}

// ===================== CHANGE HEADER COLOR =====================
function headerScroll() {
	const header = document.getElementById('header')

	if (this.scrollY >= 80) {
		header.classList.add('header-scroll')
	} else {
		header.classList.remove('header-scroll')
	}
}

window.addEventListener('scroll', headerScroll)
