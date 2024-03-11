function handleLikesClick() {
  $.post("/_get_data", function (response) {
    $("#content").html(response.data);
  });
}

function handleConfigClick() {
  $.post("/get_config", function (response) {
    $("#content").html(response.config);
  });
}
$(document).ready(function () {
  $("#likes").click(handleLikesClick);
  $("#config").click(handleConfigClick);
});
