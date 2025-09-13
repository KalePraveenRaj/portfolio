document.addEventListener('DOMContentLoaded', function () {
  // Initialize with your Public Key (or call emailjs.init earlier)
  emailjs.init('wCzczedoi1tjeKQjz');

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log('Submitting form to EmailJS...');

    // Option A: use sendForm (form element)
    emailjs.sendForm('service_vjl8ox5', 'template_ex5w5pb', this)
      .then(function (response) {
        console.log('EmailJS success', response);
        alert('✅ Message sent successfully!');
        form.reset();
      })
      .catch(function (error) {
        console.error('EmailJS Error:', error);
        // Helpful alert showing status/text if present
        const status = error && error.status ? error.status : '';
        const text   = error && error.text   ? error.text : JSON.stringify(error);
        alert('❌ Failed to send message. ' + status + ' ' + text + '\nCheck DevTools Network tab for details.');
      });

    // Option B (alternative): you can pass publicKey as 4th param instead of calling init:
    // emailjs.sendForm('service_vjl8ox5', 'template_vfchbjt', this, 'wCzczedoi1tjeKQjz')
  });
});