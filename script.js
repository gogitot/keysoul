
(function(){
  emailjs.init("clj3Fq_ElGewSJd3j");

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_fbm7d8s", "template_jzaceu8", this)
      .then(() => {
        document.getElementById("form-status").innerText = "Съобщението беше изпратено успешно!";
        form.reset();
      }, (error) => {
        document.getElementById("form-status").innerText = "Грешка при изпращане.";
        console.error(error);
      });
  });
})();
