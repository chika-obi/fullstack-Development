// Handle theme switching and save preference
const themeSelect = document.getElementById("themeSelect");
const root = document.body;

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("cs_theme") || "emerald";
  root.classList.remove("theme-emerald", "theme-mint", "theme-forest");
  root.classList.add(`theme-${savedTheme}`);
  themeSelect.value = savedTheme;
});

// Listen for changes
themeSelect.addEventListener("change", (e) => {
  const theme = e.target.value;
  root.classList.remove("theme-emerald", "theme-mint", "theme-forest");
  root.classList.add(`theme-${theme}`);
  localStorage.setItem("cs_theme", theme);
});
