// Fade-in effect when page loads
window.onload = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 500);  // Staggered fade-in effect
    });
};
