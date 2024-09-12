document.getElementById('appraisal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Here you would typically send the data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted with data:', data);

    // Show a success message
    alert('Thank you! We have received your appraisal request and will get back to you soon.');

    // Reset the form
    this.reset();
});

// Simple form validation
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('invalid', function (e) {
        e.preventDefault();
        this.classList.add('error');
    });

    input.addEventListener('input', function (e) {
        if (this.validity.valid) {
            this.classList.remove('error');
        }
    });
});