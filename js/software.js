function searchCards() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const errorMessage = document.getElementById('error-message');
    let found = false;

    cards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'flex'; // কার্ডটি প্রদর্শন করুন
            found = true; // কমপক্ষে একটি কার্ড পাওয়া গেছে
        } else {
            card.style.display = 'none'; // কার্ডটি লুকান
        }
    });

    // যদি কোনো কার্ড না পাওয়া যায়
    if (!found && input) {
        errorMessage.style.display = 'block'; // ত্রুটি বার্তা প্রদর্শন করুন
    } else {
        errorMessage.style.display = 'none'; // ত্রুটি বার্তা লুকান
    }

    // যদি সার্চ বক্স খালি থাকে, সব কার্ড দেখান
    if (input === "") {
        cards.forEach(card => card.style.display = 'flex');
        errorMessage.style.display = 'none'; // ত্রুটি বার্তা লুকান
    }
}