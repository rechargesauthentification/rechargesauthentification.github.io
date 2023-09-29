//=================================EmailJs===========================

const sellForm = document.getElementById("selling-form"),
  formMessage = document.getElementById("form_message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID_templateID_#form_publickey
  emailjs
    .sendForm(
      "service_iuyili9",
      "template_9bq04ia",
      "#selling-form",
      "aNau6CrdMm7ZkRcnR"
    )
    .then(
      () => {
        //show sent messenge
        formMessage.textContent = "les données ont été envoyé avec succès ✅";

        // remove message after five seconds
        setTimeout(function () {
          formMessage.textContent = "";
        }, 5000);

        //clear field

        sellForm.reset();
      },
      () => {
        //show err
        formMessage.textContent = "les données n'ont pas été envoyé ❌";
      }
    );
};

sellForm.addEventListener("submit", sendEmail);
