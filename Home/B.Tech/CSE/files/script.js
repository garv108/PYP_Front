// Smooth Scroll for Navigation Links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target ID
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling effect
            block: 'start' // Align to the start of the section
        });
    });
});

// Accordion Functionality (Exclusive Panel Display)
function setupAccordion() {
    const accordions = document.querySelectorAll('.accordion');
    const panels = document.querySelectorAll('.panel');

    accordions.forEach((accordion, index) => {
        accordion.addEventListener('click', function () {
            // Hide all other panels except the clicked one
            panels.forEach((panel, panelIndex) => {
                if (panelIndex !== index) {
                    panel.style.display = 'none';
                }
            });

            // Toggle the clicked panel
            const panel = panels[index];
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        });
    });
}

// Initialize Accordion
document.addEventListener("DOMContentLoaded", function () {
    setupAccordion();

    // Scroll to Top Button Logic
    const scrollToTopButton = document.getElementById("scrollToTop");
    const semestersSection = document.getElementById("semesters");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        const sectionTop = semestersSection.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY >= sectionTop) {
            scrollToTopButton.style.display = "block"; // Show the button
        } else {
            scrollToTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll smoothly to the top when the button is clicked
    scrollToTopButton.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
