const getBtn = document.getElementById("log-button");

getBtn.addEventListener("click", function() {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const passw = document.getElementById("passw").value;

    if (email === "" || passw === "") {
        alert("All fields are required");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(function(user) {
        return user.email === email && user.pass === passw;
    });

    if (matchedUser) {
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
});