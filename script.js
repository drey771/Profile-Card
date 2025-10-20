 //Function to update the time every second
      function updateTime() {
        const currentTime = document.querySelector(".time");
        const now = new Date();
        currentTime.textContent =
          now.toLocaleTimeString([], { hour12: false }) +
          ":" +
          now.getMilliseconds();
      }

      updateTime(); 
      setInterval(updateTime, 50);

// Get form and elements
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit",  (e) => {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = document.getElementById("subject").value.trim();


  if (name === "" || email === "" || message === "" || subject === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  if (!email.includes("@")) {
    alert("email must include @");
    return;
  }

  // If everything is filled, show success message
  successMessage.style.display = "block";

  // clears all form fields after successful submission
  form.reset();
});
