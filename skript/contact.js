document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formInfo = new FormData(event.target);
    const firstName = formInfo.get("FirstName");
    const surname = formInfo.get("Surname");
    const email = formInfo.get("Email");
    const username = formInfo.get("username");
    const gender = formInfo.get("gender");
    const message = formInfo.get("message");

    const visaMeddelande = document.getElementById("meddelanden");
    visaMeddelande.innerHTML = `
      <h2>Ett Meddelande:</h2>
      <p>First Name: ${firstName}</p>
      <p>Surname: ${surname}</p>
      <p>Email: ${email}</p>
      <p>Username: ${username}</p>
      <p>Gender: ${gender}</p>
      <p>Message: ${message}</p>
    `;

    const svarTack = document.getElementById("svar")
    svarTack.innerHTML = `<p>Tack för ditt meddelande ${username}</p>`
  });
});