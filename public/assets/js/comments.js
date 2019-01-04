$(document).ready(function() {

    console.log('PAGE LOADED')

    $('#saveButton').on('click', function() {

        var comment = {
            author: $('#auth').val(),
            comment: $('#quo').val()
        }


        $.ajax({
            url: "/comments",
            type: "post",
            data: comment
          }).then(function(response) {
            console.log("This is the number of crimes with arrrests: ", response);
          });

    })

})