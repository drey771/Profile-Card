//Function to update the time every second
function updateTime() {
  const currentTime = document.querySelector(".time");
  const now = new Date();
  currentTime.textContent =
    now.toLocaleTimeString([], { hour12: true }) + ":" + now.getMilliseconds();
}

setInterval(updateTime, 50);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = [
      { id: "name", name: "Name" },
      { id: "email", name: "Email" },
      { id: "subject", name: "Subject" },
      { id: "message", name: "Message" }
    ];

    let hasError = false;

    // Clear old errors
    fields.forEach(({ id }) => {
      const input = document.getElementById(id);
      const errorEl = document.getElementById(id + "Error");
      input.classList.remove("error-border");
      errorEl.textContent = "";
    });

    // Validate each field
    fields.forEach(({ id, name }) => {
      const input = document.getElementById(id);
      const errorEl = document.getElementById(id + "Error");
      const value = input.value.trim();

      if (value === "") {
        errorEl.textContent = `${name} is required.`;
        input.classList.add("error-border");
        hasError = true;
      } else if (id === "email" && !value.includes("@")) {
        errorEl.textContent = "Please enter a valid email.";
        input.classList.add("error-border");
        hasError = true;
      }
    });

    if (hasError) return;

    // Success
    console.log("Form submitted successfully!");
    successMessage.style.display = "block";
    form.reset();

    // Hide success after a few seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
});
