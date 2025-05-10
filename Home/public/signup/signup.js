document.getElementById("signup-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const signupButton = document.getElementById("signup-btn");
  signupButton.disabled = true; // 🔒 Prevent multiple submissions

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // ✅ Validation checks
  if (!fullname || !email || !password || !confirmPassword) {
      alert("⚠️ सभी फ़ील्ड भरें!");
      signupButton.disabled = false;
      return;
  }

  // Password match validation
  if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      signupButton.disabled = false;
      return;
  }

  try {
      const res = await fetch("http://localhost:5000/api/auth/signup", { // ✅ Corrected API route
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname, email, password })
      });

      const data = await res.json();

      if (res.ok) {
          alert("✅ Signup successful! Redirecting to login...");
          window.location.href = "/Home/public/Login/login.html"; // ✅ Redirect to login page
      } else {
          alert(`❌ ${data.message || "Signup failed!"}`);
      }
  } catch (err) {
      console.error("❌ Signup Error:", err);
      alert("🚨 Server error! Try again later.");
  }

  signupButton.disabled = false; // 🔓 Enable button again
});
