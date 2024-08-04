document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Validation
  var isValid = true;
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }
  
  // If form is valid, show confirmation
  if (isValid) {
    document.getElementById("contactForm").reset();
    document.getElementById("confirmation").textContent = "Message sent successfully!";

  }
});

function isValidEmail(email) {
  // Very basic email validation, just checking for presence of "@" and "."
  return email.includes("@") && email.includes(".");
}