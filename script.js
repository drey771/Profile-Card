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

// Listen for form submit
form.addEventListener("submit",  (e) => {
  e.preventDefault(); // Stop page reload

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();


  if (name === "" || email === "" || message === "") {
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
