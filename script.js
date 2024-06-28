document.addEventListener('DOMContentLoaded', function() {
    const selector = document.getElementById('content-selector');
    const sections = {
        'home': document.getElementById('home-content'),
        'about': document.getElementById('about-content'),
        'contact': document.getElementById('contact-content')
    };

    // Function to handle dropdown change
    function handleDropdownChange() {
        const selectedOption = selector.value;
        // Hide all sections
        for (let section in sections) {
            sections[section].classList.remove('active');
        }
        // Display the selected section
        sections[selectedOption].classList.add('active');
    }

    // Add event listener to dropdown change
    selector.addEventListener('change', handleDropdownChange);

    // Initialize: Show default selected content
    handleDropdownChange();
});
