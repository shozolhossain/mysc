function searchCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const errorMessage = document.getElementById('errorMessage');

    let hasResults = false;

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.classList.remove('hidden');
            hasResults = true;
        } else {
            card.classList.add('hidden');
        }
    });

    if (input === '') {
        cards.forEach(card => {
            card.classList.remove('hidden');
        });
        errorMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = hasResults ? 'none' : 'block';
} 