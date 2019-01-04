$.ajax({
  url: "/api/theft-2017",
  type: "post",
  data: answers
}).then(function(response) {
  console.log("This is the number of crimes with arrrests: ", response);
});
