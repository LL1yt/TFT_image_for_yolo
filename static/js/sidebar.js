const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы меню, которые имеют подменю
  const hasSubmenu = document.querySelectorAll(".nav-link.has-submenu");

  // Добавляем обработчик событий для каждого элемента меню с подменю
  hasSubmenu.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Предотвращаем стандартное поведение ссылки
      event.preventDefault();

      // Закрываем все открытые подменю
      hasSubmenu.forEach((item) => {
        if (item !== link) {
          item.classList.remove("submenu-active");
        }
      });

      // Переключаем видимость подменю для текущего элемента меню
      link.classList.toggle("submenu-active");
    });
  });
});

// Закрытие подменю при клике вне меню
document.addEventListener("click", function (event) {
  if (!event.target.closest(".sidebar")) {
    hasSubmenu.forEach((link) => {
      link.classList.remove("submenu-active");
    });
  }
});

$("#likes").click(() => {
  $.ajax({
    url: "/_get_data",
    type: "POST",
    success: (response) => {
      $("div.content").append(response.data);
    },
  });
});
