document.addEventListener('DOMContentLoaded', function() {
    // Get all committee cards
    const committeeCards = document.querySelectorAll('.committee-card');
    const toggleAllBtn = document.querySelector('.toggle-all-btn');
    let allExpanded = false;
    
    // Initialize toggle buttons for each committee card
    committeeCards.forEach(card => {
        const toggleBtn = card.querySelector('.toggle-btn');
        const content = card.querySelector('.committee-content');
        const icon = toggleBtn.querySelector('i');
        
        // Add click event to each toggle button
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle the collapsed class
            content.classList.toggle('collapsed');
            
            // Toggle the icon rotation
            icon.classList.toggle('fa-chevron-up');
        });
    });
    
    // Add click event to the toggle all button
    toggleAllBtn.addEventListener('click', function() {
        const toggleAllIcon = toggleAllBtn.querySelector('i');
        
        // Toggle the state
        allExpanded = !allExpanded;
        
        // Update all committee cards based on the state
        committeeCards.forEach(card => {
            const content = card.querySelector('.committee-content');
            const icon = card.querySelector('.toggle-btn i');
            
            if (allExpanded) {
                // Expand all
                content.classList.remove('collapsed');
                icon.classList.add('fa-chevron-up');
            } else {
                // Collapse all
                content.classList.add('collapsed');
                icon.classList.remove('fa-chevron-up');
            }
        });
        
        // Toggle the icon on the toggle all button
        toggleAllIcon.classList.toggle('fa-chevron-up');
    });
});