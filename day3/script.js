alert("JS is running");

/* ================= FORM VALIDATION ================= */

// Select form and input elements from DOM
const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const formMessage = document.querySelector("#formMessage");

// Attach submit event to form
form.addEventListener("submit", function (event) {

  // Prevent page from reloading on form submit
  event.preventDefault();
  console.log("Form Submitted");
  // Get password value entered by user
  const password = passwordInput.value;

  // Check password length
  if (password.length < 6) {

    // Show error message if password is short
    formMessage.textContent = "Password must be at least 6 characters";
    formMessage.className = "error";

  } else {

    // Show success message if password is valid
    formMessage.textContent = "Login successful";
    formMessage.className = "success";
  }
});


/* ================= FETCH API APP ================= */

// Select elements needed for fetch functionality
const fetchBtn = document.querySelector("#fetchBtn");
const userContainer = document.querySelector("#userContainer");
const fetchMessage = document.querySelector("#fetchMessage");

// Attach click event to fetch button
fetchBtn.addEventListener("click", function () {

  // Clear previous messages and data
  fetchMessage.textContent = "";
  userContainer.innerHTML = "";

  // Call public API using Fetch
  fetch("https://jsonplaceholder.typicode.com/users")
  

    // Convert response to JSON
    .then(response => response.json())

    // Handle received data
    .then(data => {

      // Loop through first 5 users
      data.slice(0, 5).forEach(user => {

        // Create a new div for each user
        const div = document.createElement("div");
        div.className = "userCard";

        // Insert user details inside the div
        div.innerHTML = `
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>City:</strong> ${user.address.city}
        `;

        // Add user card to container
        userContainer.appendChild(div);
      });
    })

    // Handle error if fetch fails
    .catch(error => {
      fetchMessage.textContent = "Failed to fetch user data";
      fetchMessage.className = "error";
    });
});
