(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const sidebar = body.querySelector("nav");
    const sidebarToggle = body.querySelector(".toggle");
    const darkModeToggle = body.querySelector(".toggle-switch");
    const darkModeText = body.querySelector(".mode-text");
    isSidebarClosed = sidebar.classList.contains("close");

    // Toggle sidebar
    sidebarToggle.addEventListener("click", () => {
      isSidebarClosed = sidebar.classList.toggle("close");
    });

    // Toggle dark mode
    darkModeToggle.addEventListener("click", () => {
      isDarkMode = body.classList.toggle("dark");
      darkModeToggle.setAttribute("aria-pressed", isDarkMode);
      darkModeText.innerText = isDarkMode ? "Light mode" : "Dark mode";
    });

    // Delegate submenu toggle to the nav element

    const nav = body.querySelector(".sidebar"); // Assuming your sidebar has a class of sidebar
    nav.addEventListener("click", function (event) {
      if (!isSidebarClosed) {
        const inSubmenu = event.target.closest(".submenu");
        if (inSubmenu) {
          return;
        }
        const hasSubmenu = event.target.closest(".nav-link.has-submenu");
        if (hasSubmenu) {
          event.preventDefault();
          const navLinks = document.querySelectorAll(".nav-link.has-submenu");
          navLinks.forEach((link) => {
            if (link !== hasSubmenu) {
              console.log(link);
              link.classList.remove("submenu-active");
            }
          });
          hasSubmenu.classList.toggle("submenu-active");
        }
      }
    });
  });
})();
