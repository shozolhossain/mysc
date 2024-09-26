function toggleIcons(button) {
    const iconButtons = button.nextElementSibling;
    if (iconButtons.classList.contains('show')) {
        iconButtons.classList.remove('show'); // Remove show class to hide buttons
        button.textContent = "Read More";
        button.style.backgroundColor = "#28a745"; // Default color
    } else {
        iconButtons.classList.add('show'); // Add show class for animation
        button.textContent = "Show Less";
        button.style.backgroundColor = "#dc3545"; // Change to red for "Show Less"
    }
}