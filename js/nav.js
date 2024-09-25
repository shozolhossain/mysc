function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-button');
    navLinks.classList.toggle('active');
    closeButton.classList.toggle('active');
}

function toggleFontSubMenu(event) {
    event.preventDefault(); // Prevent the default link behavior
    const subMenu = event.currentTarget.nextElementSibling;
    subMenu.classList.toggle('active'); // Toggle visibility
}

function toggleNestedMenu(event) {
    event.preventDefault(); // Prevent the default link behavior
    const nestedMenuId = event.currentTarget.nextElementSibling.id;
    const nestedMenu = document.getElementById(nestedMenuId);

    // Hide other nested menus
    const otherNestedMenus = document.querySelectorAll('.nested-dropdown');
    otherNestedMenus.forEach(menu => {
        if (menu.id !== nestedMenuId) {
            menu.classList.remove('active');
        }
    });

    // Toggle the clicked menu
    nestedMenu.classList.toggle('active');
}

function hideOtherMenus(event) {
    event.preventDefault(); // Prevent the default link behavior
    const nestedMenus = document.querySelectorAll('.nested-dropdown');
    nestedMenus.forEach(menu => menu.classList.remove('active')); // Hide all nested menus
}



//futter 
function subscribe() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (email) {
        // Send email to server
        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => {
                if (response.ok) {
                    alert(`Thank you for subscribing with ${email}!`);
                    emailInput.value = ''; // Clear the input
                } else {
                    alert('Subscription failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    } else {
        alert('Please enter a valid email address.');
    }
}


//diagram
let expanded = false;

document.querySelectorAll('.box > a').forEach(item => {
    item.addEventListener('click', event => {
        const parentBox = item.parentElement;
        parentBox.classList.toggle('expanded');
    });
});

document.getElementById('toggleExpand').addEventListener('click', () => {
    expanded = !expanded;
    document.querySelectorAll('.box').forEach(box => {
        if (expanded) {
            box.classList.add('expanded', expanded);
        } else {
            box.classList.remove('expanded');
        }
    });
    // Animate the button text change
    const button = document.getElementById('toggleExpand');
    button.classList.add('changing-text');
    setTimeout(() => {
        button.textContent = expanded ? 'Collapse All' : 'Expand All';
        button.classList.remove('changing-text');
    }, 300); // Match the duration of the animation
});
