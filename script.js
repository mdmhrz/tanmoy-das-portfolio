// Example: Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});