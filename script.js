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

document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownDate = new Date('November 24, 2025 00:00:00').getTime();
    
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "Conference has started!";
        }
    }, 1000);
    
    // Hero Image Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Committee Toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle('collapsed');
            this.querySelector('i').classList.toggle('fa-chevron-up');
            this.querySelector('i').classList.toggle('fa-chevron-down');
        });
    });
    
    // Toggle All Committees
    const toggleAllBtn = document.querySelector('.toggle-all-btn');
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
        
        const toggleAllIcon = toggleAllBtn.querySelector('i');
        if (isAnyCollapsed) {
            toggleAllIcon.classList.remove('fa-chevron-down');
            toggleAllIcon.classList.add('fa-chevron-up');
        } else {
            toggleAllIcon.classList.remove('fa-chevron-up');
            toggleAllIcon.classList.add('fa-chevron-down');
        }
    });
    
    // Best Memories Slideshow
    let slideIndex = 0;
    const memorySlides = document.querySelectorAll('.memory-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Show the first slide initially
    showMemorySlide(slideIndex);
    
    // Auto advance slides every 4 seconds
    setInterval(function() {
        slideIndex++;
        showMemorySlide(slideIndex);
    }, 4000);
    
    // Next/previous controls
    window.plusSlides = function(n) {
        showMemorySlide(slideIndex += n);
    }
    
    // Thumbnail image controls
    window.currentSlide = function(n) {
        showMemorySlide(slideIndex = n-1);
    }
    
    function showMemorySlide(n) {
        if (n >= memorySlides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = memorySlides.length - 1}
        
        // Hide all slides
        memorySlides.forEach(slide => {
            slide.style.display = "none";
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        
        // Show the current slide and activate the corresponding dot
        memorySlides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active");
    }
});

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