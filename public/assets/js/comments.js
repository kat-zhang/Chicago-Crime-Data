$(document).ready(function() {
   
    console.log('PAGE LOADED')

    $('#saveButton').on('click', function() {
        event.preventDefault();
        location.reload();
        var comment = {
            author: $('#auth').val(),
            comment: $('#quo').val(),
        }

        $.ajax({
            url: "/api/comments",
            type: "post",
            data: comment
          }).then(function(response) {

        });
        
        
        
    })


});
