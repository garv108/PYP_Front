
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }

  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }

  function closeMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.remove('active');
  }

  // ✅ FRONTEND (public/scripts.js) -> Handles login check & redirect
  // document.addEventListener("DOMContentLoaded", function () {
  // const token = localStorage.getItem("authToken");
  
  //if (!token) {
    //  setTimeout(() => {
      //    alert("⚠️ Please login to continue.");
        //  window.location.href = "/Home/public/signup/signup.html";
     // }, 5000); // 3 seconds delay
 // }
// });
