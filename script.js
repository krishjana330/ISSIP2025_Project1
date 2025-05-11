// Initialize sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.display = 'block';
});

// Initialize image slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize countdown timer
function updateCountdown() {
    const conferenceDate = new Date('November 24, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = conferenceDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Toggle committee content
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.nextElementSibling;
        content.classList.toggle('collapsed');
        this.querySelector('i').classList.toggle('fa-chevron-up');
        this.querySelector('i').classList.toggle('fa-chevron-down');
    });
});

// Toggle all committees
const toggleAllBtn = document.querySelector('.toggle-all-btn');
if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', function() {
        const allContents = document.querySelectorAll('.committee-content');
        const isAnyCollapsed = Array.from(allContents).some(content => content.classList.contains('collapsed'));
        
        allContents.forEach(content => {
            if (isAnyCollapsed) {
                content.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
            }
        });
        
        const allIcons = document.querySelectorAll('.toggle-btn i');
        allIcons.forEach(icon => {
            if (isAnyCollapsed) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
        
        const toggleAllIcon = this.querySelector('i');
        if (isAnyCollapsed) {
            toggleAllIcon.classList.remove('fa-chevron-down');
            toggleAllIcon.classList.add('fa-chevron-up');
        } else {
            toggleAllIcon.classList.remove('fa-chevron-up');
            toggleAllIcon.classList.add('fa-chevron-down');
        }
    });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
}

// Handle mobile dropdowns
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 991 && e.target.tagName === 'A' && e.target.parentElement.classList.contains('dropdown')) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 991 && !e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle')) {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    }
});