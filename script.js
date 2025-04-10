
(function() {
    emailjs.init("clj3Fq_ElGewSJd3j");

    const form = document.getElementById('contact-form');
    const status = document.getElementById('status-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        emailjs.send("service_fbm7d8s", "template_jzaceu8", data)
            .then(() => {
                status.textContent = "Съобщението е изпратено успешно!";
                form.reset();
            }, (err) => {
                status.textContent = "Възникна грешка. Опитайте отново.";
                console.error(err);
            });
    });
})();
