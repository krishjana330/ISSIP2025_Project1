// Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
    // Committee section toggle functionality
    const committeeHeaders = document.querySelectorAll('.committee-header');
    const toggleAllBtn = document.querySelector('.toggle-all-btn');
    let isAllExpanded = false;

    // Individual committee toggle
    committeeHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the toggle-all when clicking individual headers
            const content = this.nextElementSibling;
            const toggleBtn = this.querySelector('.toggle-btn i');
            
            content.classList.toggle('collapsed');
            toggleBtn.style.transform = content.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });

    // Toggle all committees
    toggleAllBtn.addEventListener('click', function() {
        const allContents = document.querySelectorAll('.committee-content');
        const allToggleBtns = document.querySelectorAll('.toggle-btn i');
        isAllExpanded = !isAllExpanded;

        allContents.forEach(content => {
            if (isAllExpanded) {
                content.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
            }
        });

        allToggleBtns.forEach(btn => {
            btn.style.transform = isAllExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        // Update main toggle button
        this.querySelector('i').style.transform = isAllExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Set the conference date - November 24, 2025
    const conferenceDate = new Date('November 24, 2025 09:00:00').getTime();
    
    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the conference date
        const distance = conferenceDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "<h3>The Conference Has Started!</h3>";
        }
    }, 1000);
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const header = document.querySelector('header');

    // Mobile menu toggle with animation
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animate nav items when menu opens
        const navItems = document.querySelectorAll('.nav-menu > li');
        navItems.forEach((item, index) => {
            if (navMenu.classList.contains('active')) {
                item.style.animation = `fadeInDown 0.5s ease forwards ${index * 0.1}s`;
            } else {
                item.style.animation = '';
            }
        });
    });

    // Mobile dropdown toggle
    if (window.innerWidth <= 991) {
        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('a');
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                const isOpen = dropdown.classList.contains('active');

                // Close all other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                        d.querySelector('.dropdown-menu').style.maxHeight = '0px';
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
                dropdownMenu.style.maxHeight = isOpen ? '0px' : `${dropdownMenu.scrollHeight}px`;
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only prevent default if it's not a dropdown toggle on mobile
            if (!(this.parentNode.classList.contains('dropdown') && window.innerWidth <= 768)) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                }
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Image Slider for Background Images
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show the current slide
        slides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Start the slider with longer transition time for background images
    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 8000); // Increased from 5000ms to 8000ms for smoother transitions
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For now, just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    });
});