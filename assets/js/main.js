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

// ===================== QUESTIONS ACCORDION =====================
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.questions__header')

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.questions__content')

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}
