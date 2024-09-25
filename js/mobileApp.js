function searchCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const errorMessage = document.getElementById('errorMessage');
    let hasResults = false;

    cards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        if (cardTitle.includes(input)) {
            card.style.display = ''; // Show card
            hasResults = true; // Found a matching card
        } else {
            card.style.display = 'none'; // Hide card
        }
    });

    // Show or hide error message
    if (!hasResults) {
        errorMessage.style.display = 'block'; // Show error message
    } else {
        errorMessage.style.display = 'none'; // Hide error message
    }
}

// Automatically show all cards when the input is cleared
document.getElementById('searchInput').addEventListener('input', function () {
    if (this.value === '') {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.display = ''; // Show all cards
        });
        document.getElementById('errorMessage').style.display = 'none'; // Hide error message
    }
});