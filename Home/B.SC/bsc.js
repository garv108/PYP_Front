// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Typing Animation for Heading (Optional)
const heading = document.getElementById('main-heading');
const text = "Bachelor of Science (B.Sc)";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heading.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Smooth Scroll and Hover Animations
const buttons = document.querySelectorAll('.branch-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
    button.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none';
  });
});