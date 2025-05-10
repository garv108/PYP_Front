// ✅ Login form handler
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await res.json();
  
      if (res.ok && data.token) {
        // ✅ Save token and redirect
        localStorage.setItem("authToken", data.token);
        alert("✅ Login successful!");
        window.location.href = "/Home/index.html";
      } else {
        alert("❌ Login failed: " + (data.error || "Invalid credentials"));
      }
    } catch (error) {
      console.error("🚨 Login Error:", error);
      alert("🚨 Server error. Please try again later.");
    }
  });
  
  // ✅ Logout function
  function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "/public/Login/login.html";
  }
  