$(document).ready(function() {
   
    console.log('PAGE LOADED')

    $('#saveButton').on('click', function() {
        event.preventDefault();
        var comment = {
            author: $('#auth').val(),
            comment: $('#quo').val(),
        }

        $.ajax({
            url: "/api/comments",
            // url: "/api/comments",
            type: "post",
            data: comment
          }).then(function(response) {
            console.log("Comment posted"); 
        });
        
        
    })

    function getComment () {
        $.a
    }

});
