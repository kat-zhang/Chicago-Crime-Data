$(document).ready(function() {
  console.log("PAGE LOADED");

  $("#saveButton").click(function() {
    event.preventDefault();
    location.reload();
    // alert("clicked")
    var comment = {
      author: $("#auth").val(),
      comment: $("#quo").val()
    };

    $.ajax({
      url: "/api/comments",
      type: "POST",
      data: comment
    }).then(function(response) {
      // alert("posted")
      location.reload();
    });
  });
});
