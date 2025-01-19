document.addEventListener("DOMContentLoaded", () => {
  loadComponent('header', '../components/header.html',() => {
    initMainFeature()
  });
  // loadComponent('nav', '../components/navbar.html', () => {
  //   attachNavCarousel()
  // }); // Pass the callback
  loadComponent('footer', '../components/footer.html');


});

// Function to load a component dynamically
async function loadComponent(id, filePath, callback) {
  const element = document.getElementById(id);
  if (element) {
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        element.innerHTML = await response.text();
        if (typeof callback === 'function') {
          callback(); // Call the callback after the component is loaded
        }
      } else {
        console.error(`Failed to load ${filePath}`);
      }
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
    }
  }
}




// main Features logic

const initMainFeature = () => {
  const loginForm = document.querySelector("#login");
  const closeLoginBtn = document.getElementById("closeLogin");
  const loginContainer = document.querySelector(".login");
  const logoutButton = document.getElementById("logout");
  const headerEdit = document.getElementById("headerEdit");
  const headerPic = document.getElementById("headerPic");

  if (!loginForm || !closeLoginBtn || !loginContainer || !logoutButton || !headerEdit || !headerPic) {
    console.error("Login or user elements not found in the DOM.");
    return;
  }

   // login click
   headerPic.addEventListener("click",() => {
     loginContainer.style.display = "block"
   })

  // Check if user is already logged in
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    // Show the user's profile icon, the edit link, and the logout button
    headerEdit.style.display = "block"; // Show the edit link
    logoutButton.style.display = "block"; // Show logout button
    loginContainer.style.display = "none"; // Hide login form
  } else {
    // Show the login form
    loginContainer.style.display = "block";
    headerEdit.style.display = "none"; // Hide the edit link
    logoutButton.style.display = "none"; // Hide logout button
  }

  // Event Listener: Close Login Form
  closeLoginBtn.addEventListener("click", () => {
    loginContainer.style.display = "none"; // Hide login form
  });

  // Event Listener: Submit Login Form
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Capture Input Values
    const name = loginForm.querySelector("input[type='text']").value.trim();
    const email = loginForm.querySelector("input[type='email']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();

    // Validate Inputs
    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // Save to Local Storage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login successful!");

    // Reset Form and Hide Login
    loginForm.reset();
    loginContainer.style.display = "none";
    headerEdit.style.display = "block"; // Show the edit link
    logoutButton.style.display = "block"; // Show logout button
    headerPic.style.display = "none";
  });

  // Event Listener: Logout Button
  logoutButton.addEventListener("click", () => {
    // Clear user data from local storage and update UI
    localStorage.removeItem("user");
    localStorage.removeItem("NewCard");
    logoutButton.style.display = "none"; // Hide logout button
    headerEdit.style.display = "none"; // Hide the edit link
    loginContainer.style.display = "block"; // Show login form
    headerPic.style.display = "block"; 
  });

  // Helper Function: Validate Email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
 
}