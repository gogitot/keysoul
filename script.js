
emailjs.init("clj3Fq_ElGewSJd3j");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_fbm7d8s", "template_jzaceu8", this)
    .then(function() {
      document.getElementById("form-response").textContent = "Съобщението е изпратено успешно!";
    }, function(error) {
      document.getElementById("form-response").textContent = "Възникна грешка при изпращането.";
      console.error(error);
    });

  this.reset();
});
