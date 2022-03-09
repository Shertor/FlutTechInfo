// ===================== NAVIGATION =====================
const navItems = document.querySelectorAll('.nav__link[data-goto]')
if (navItems.length > 0) {
	navItems.forEach(item => {
		item.addEventListener('click', onNavItemClick)
	})

	function onNavItemClick(event) {
		const navItem = event.target
		if (navItem.dataset.goto && document.querySelector(navItem.dataset.goto)) {
			const gotoBlock = document.querySelector(navItem.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			event.preventDefault()
		}
	}
}

const gotoAboutBtn = document.getElementById('goto-about')
gotoAboutBtn.addEventListener('click', (event) => {
	event.preventDefault()
	const aboutSection = document.getElementById('about')
	window.scrollTo({
		top: aboutSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
	})
})

const gotoFooterBtn = document.getElementById('goto-footer')
gotoFooterBtn.addEventListener('click', (event) => {
	event.preventDefault()
	const aboutSection = document.getElementById('footer')
	window.scrollTo({
		top: aboutSection.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
	})
})
// ===================== OPEN SHOW NAVIGATION MENU =====================
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close'),
	body = document.getElementById('body'),
	navWrapper = document.getElementById('nav-wrapper')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navWrapper.classList.add('naw__wrapper-show')
		navMenu.classList.add('nav-show')
		body.classList.add('body-hidden')
	})
}

function closeNav() {
	navMenu.classList.remove('nav-show')
	body.classList.remove('body-hidden')
	navWrapper.classList.remove('naw__wrapper-show')
}

if (navClose) {
	navClose.addEventListener('click', closeNav)
}

// ===================== CLOSE MENU ON CLICK =====================
navWrapper.addEventListener('click', closeThis)

function closeThis(event) {
	if (event.eventPhase === 2) {
		closeNav()
	}
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

// ===================== SCROLL ACTION =====================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.scrollY

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop =
				current.offsetTop - document.documentElement.clientHeight / 2,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__link[data-goto=".' + sectionId + '"]')
				.classList.add('active-link')
		} else {
			document
				.querySelector('.nav__link[data-goto=".' + sectionId + '"]')
				.classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)

// ===================== SCROLL UP BUTTON =====================
const scrollTop = document.getElementById('scroll-top')
window.addEventListener('scroll', () => {
	if (this.scrollY > 100) {
		scrollTop.classList.add('show-scroll')
	} else {
		scrollTop.classList.remove('show-scroll')
	}
})
scrollTop.addEventListener('click', () => {
	window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
})
// ===================== THEME CHANGE =====================

const themeBtn = document.getElementById('theme-button')

const darkTheme = 'dark-theme'
const darkIcon = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const isCurrentThemeDark = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const isCurrentIconDark = () =>
	themeBtn.classList.contains(darkIcon) ? 'ri-sun-line' : 'ri-contrast-2-line'

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	)
	themeBtn.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](
		darkIcon
	)
}

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme)
	themeBtn.classList.toggle(darkIcon)

	localStorage.setItem('selected-theme', isCurrentThemeDark)
	localStorage.setItem('selected-icon', isCurrentIconDark)
})
