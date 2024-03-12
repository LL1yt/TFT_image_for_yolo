$(document).ready(function () {
  const likes = document.querySelector("#likes");
  const config = document.querySelector("#config");
  const project1 = document.querySelector("#project1");

  function removeActiveClassFromAll() {
    const allMenuItems = document.querySelectorAll(".menu-item-active");
    allMenuItems.forEach((item) => {
      item.classList.remove("menu-item-active");
    });
  }
  function handleProject1Click() {
    $.post("/_get_data", function (response) {
      $("#content").html(response.data);
      removeActiveClassFromAll();
      project1.classList.add("menu-item-active");
      const project1Parent = project1.closest(".nav-link.has-submenu");
      project1Parent.classList.add("menu-item-active");
    });
  }
  function handleLikesClick() {
    $.post("/_get_data", function (response) {
      $("#content").html(response.data);
      removeActiveClassFromAll();
      likes.classList.add("menu-item-active");
    });
  }

  function handleConfigClick() {
    $.post("/get_config", function (response) {
      $("#content").html(response.config);
      removeActiveClassFromAll();
      config.classList.add("menu-item-active");
    });
  }

  $("#project1").click(handleProject1Click);
  $("#likes").click(handleLikesClick);
  $("#config").click(handleConfigClick);
});
