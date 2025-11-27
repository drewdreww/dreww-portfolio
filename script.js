// Select the toggle button and the body element
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggleBtn.querySelector("i");

// Check if user has a saved preference in local storage
const savedTheme = localStorage.getItem("theme");

// If a saved theme exists, apply it
if (savedTheme === "light") {
  body.classList.add("light-mode");
  icon.classList.replace("ri-moon-line", "ri-sun-line");
}

// Add event listener to the button
themeToggleBtn.addEventListener("click", () => {
  // Toggle the 'light-mode' class on the body
  body.classList.toggle("light-mode");

  // Switch the icon (Moon to Sun, Sun to Moon)
  if (body.classList.contains("light-mode")) {
    icon.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "light"); // Save preference
  } else {
    icon.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", "dark"); // Save preference
  }
});

/* --- Copy your existing theme code above this --- */

// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // Optional: Else remove 'show' if you want it to fade out when scrolling up
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
