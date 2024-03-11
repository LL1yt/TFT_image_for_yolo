$("#likes").click(() => {
  $.ajax({
    url: "/_get_data",
    type: "POST",
    success: (response) => {
      $("div.content").append(response.data);
    },
  });
});
