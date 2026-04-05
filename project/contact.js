const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
    const email = contactForm.querySelector('input[placeholder="Email Address"]').value;
    const phone = contactForm.querySelector('input[placeholder="Phone Number"]').value;
    const subject = contactForm.querySelector('input[placeholder="Your Subject"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert("Please fill in all required fields (Name, Email, Message).");
        return;
    }

    alert("Thank you! Your message has been captured successfully.");

    contactForm.reset();
});

