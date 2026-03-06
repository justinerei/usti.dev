// contact.js

// 1. Initialize EmailJS
(function() {
    emailjs.init("dTk36dTzoFcBZy9xk");
})();

// 2. Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const btnText = document.getElementById('btn-text');
    const originalText = btnText.innerText;
    
    // Change button text to show it's working
    btnText.innerText = 'Sending...';

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send Email
    // REPLACE "YOUR_SERVICE_ID" AND "YOUR_TEMPLATE_ID"
    emailjs.send("service_rzypwl8", "template_450ha3r", {
        from_name: name,
        reply_to: email,
        message: message
    })
    .then(function(response) {
        // Success State
        btnText.innerText = 'Message Sent!';
        document.getElementById('contact-form').reset();
        
        // Revert button text after 3 seconds
        setTimeout(() => {
            btnText.innerText = originalText;
        }, 3000);
    })
    .catch(function(error) {
        // Error State
        alert('Oops! Something went wrong. Please try again.');
        btnText.innerText = originalText;
        console.error("EmailJS Error:", error);
    });
});