const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showLoginBtn = document.getElementById("showLogin");
const showRegisterBtn = document.getElementById("showRegister");

showLoginBtn.onclick = (e) => {
  e.preventDefault();
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
};

showRegisterBtn.onclick = (e) => {
  e.preventDefault();
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
};

registerForm.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(registerForm);
  formData.append("action", "register");

  fetch("auth.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      if (data.trim() === "success") {
        alert("Registered successfully!");
        showLoginBtn.click();
      } else {
        alert("Registration failed: " + data);
      }
    });
};

loginForm.onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  formData.append("action", "login");

  fetch("auth.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      if (data.trim() === "login_success") {
        window.location.href = "ui.html";
      } else {
        alert("Invalid credentials.");
      }
    });
};
