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
    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
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
    
    // Committee Toggle - Individual sections
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle('collapsed');
            
            // Toggle the icon rotation
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-up');
        });
    });
    
    // Toggle All Committees
    const toggleAllBtn = document.querySelector('.toggle-all-btn');
    let allExpanded = false;
    
    toggleAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Toggle the state
        allExpanded = !allExpanded;
        const toggleAllIcon = this.querySelector('i');
        
        // Get all committee contents and icons
        const committeeContents = document.querySelectorAll('.committee-content');
        const committeeIcons = document.querySelectorAll('.toggle-btn i');
        
        // Update all committee sections based on the state
        committeeContents.forEach(content => {
            if (allExpanded) {
                // Expand all
                content.classList.remove('collapsed');
            } else {
                // Collapse all
                content.classList.add('collapsed');
            }
        });
        
        // Update all toggle button icons
        committeeIcons.forEach(icon => {
            if (allExpanded) {
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
            }
        });
        
        // Toggle the icon on the toggle all button
        toggleAllIcon.classList.toggle('fa-chevron-up');
    });
    
    // Memory Slideshow
    let memorySlideIndex = 0;
    showMemorySlides();
    
    function showMemorySlides() {
        const memorySlides = document.querySelectorAll('.memory-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (memorySlides.length === 0) return;
        
        memorySlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        memorySlideIndex++;
        
        if (memorySlideIndex > memorySlides.length) {
            memorySlideIndex = 1;
        }
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        memorySlides[memorySlideIndex - 1].style.display = 'block';
        dots[memorySlideIndex - 1].classList.add('active');
        
        setTimeout(showMemorySlides, 4000);
    }
    
    // Manual Memory Slideshow Controls
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            changeMemorySlide(-1);
        });
        
        nextBtn.addEventListener('click', function() {
            changeMemorySlide(1);
        });
    }
    
    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentMemorySlide(index + 1);
            });
        });
    }
    
    function changeMemorySlide(n) {
        showMemorySlideManual(memorySlideIndex += n);
    }
    
    function currentMemorySlide(n) {
        showMemorySlideManual(memorySlideIndex = n);
    }
    
    function showMemorySlideManual(n) {
        const memorySlides = document.querySelectorAll('.memory-slide');
        const dots = document.querySelectorAll('.dot');
        
        if (memorySlides.length === 0) return;
        
        if (n > memorySlides.length) {
            memorySlideIndex = 1;
        }
        
        if (n < 1) {
            memorySlideIndex = memorySlides.length;
        }
        
        memorySlides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        memorySlides[memorySlideIndex - 1].style.display = 'block';
        dots[memorySlideIndex - 1].classList.add('active');
    }
});