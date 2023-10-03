document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the credentials are valid (replace with your own validation logic)
    if (username === "admin" && password === "4321") {
        // Redirect to a protected page or perform further actions
        window.location.href = "homepage.html"
        // You can redirect the user to another page using window.location.href
        // Example: window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
