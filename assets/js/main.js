function toggleMenu() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.toggle('nav-show')
}

function closeMenu() {
	const navMenu = document.getElementById('nav-menu')
	console.log('click')
	if (navMenu.classList.contains('nav-show')) {
		navMenu.classList.toggle('nav-show')
	}
}

const navToggle = document.getElementById('nav-toggle')
navToggle.addEventListener('click', toggleMenu)

const bodyElement = document.querySelector('main')
bodyElement.addEventListener('click', closeMenu)
