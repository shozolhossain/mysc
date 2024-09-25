function searchCards() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const errorMessage = document.getElementById('error-message');
    let found = false;

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = ''; // Show card
            found = true; // Found a matching card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });

    // Show or hide the error message
    if (found) {
        errorMessage.style.display = 'none'; // Hide error message
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }

    // If input is cleared, show all cards
    if (input === '') {
        cards.forEach(card => {
            card.style.display = ''; // Show all cards
        });
        errorMessage.style.display = 'none'; // Hide error message
    }
}