
 const SERVICE_ID = 'service_frcvtlh';
 const TEMPLATE_ID = 'template_i4pocqa';
 const API_KEY = 'Y5rlObMfN9KhULi9x';  

 const nameField = document.getElementById('name');
 const emailField = document.getElementById('email');
 const messageField = document.getElementById('message');
 const sendButton = document.getElementById('send-button');

 function checkFormFields() {
     if (nameField.value && emailField.value && messageField.value) {
         sendButton.disabled = false;
     } else {
         sendButton.disabled = true;
     }
 }

 nameField.addEventListener('input', checkFormFields);
 emailField.addEventListener('input', checkFormFields);
 messageField.addEventListener('input', checkFormFields);

 document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();

     emailjs.init(API_KEY);

     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
         .then(function() {
             document.getElementById('form-status').innerText = 'Message sent successfully!';
         }, function(error) {
             document.getElementById('form-status').innerText = 'Failed to send message. Please try again.';
         });
 });