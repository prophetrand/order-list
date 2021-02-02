$(function() {
    $(".change-watched").on("click", function(event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("watched");

        var watchedState = { watched: newStatus };

        $.ajax("/api/movies/" + id, {
            type: "PUT",
            data: watchedState
        }).then(
            function() {
                console.log("changed watched status to", newStatus);

                location.reload();
            }
        )
    });

    // POST method on the Form, find its class name.

});