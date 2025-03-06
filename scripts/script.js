
// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Scroll Animations
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.classList.add('animate-fade-in');
        }
    });
});

// Dynamic Title Animation
const dynamicTitle = document.getElementById('dynamic-title');
const titles = [
    "Hello, I'm Tanmoy Das",
    "An Automobile Engineer",
    "A Passionate Innovator",
    "Driving the Future"
];
let currentIndex = 0;

function changeTitle() {
    dynamicTitle.textContent = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

// Change title every 3 seconds
setInterval(changeTitle, 3000);