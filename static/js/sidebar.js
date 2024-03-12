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
      if (isSidebarClosed) {
        const allHasSubmenu = document.querySelectorAll(
          ".nav-link.has-submenu"
        );
        allHasSubmenu.forEach((link) => {
          link.classList.remove("submenu-active");
        });
      }
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
          const navLinksI = document.querySelectorAll(".nav-link.has-submenu");
          navLinksI.forEach((link) => {
            if (link !== hasSubmenu) {
              link.classList.remove("submenu-active");
            }
          });
          hasSubmenu.classList.toggle("submenu-active");
        }
      }
    });
    const navLinks = document.querySelectorAll(".nav-link.has-submenu");
    navLinks.forEach((link) => {
      const menuContainer = link;
      const dashboardLink = link.querySelector(".nav-link.has-submenu > a");
      //const dashboardLink = document.querySelector(".nav-link.has-submenu > a");
      const submenu = link.querySelector(".submenu");

      const mouseOverHandler = function () {
        submenu.classList.add("show");
      };

      const mouseOutHandler = function () {
        if (!menuContainer.contains(event.relatedTarget)) {
          submenu.classList.remove("show");
        }
      };

      dashboardLink.addEventListener("mouseover", mouseOverHandler);

      menuContainer.addEventListener("mouseout", mouseOutHandler);
    });
  });
})();
