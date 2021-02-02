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
        );
    });

    $(".new-form").on("submit", function(event) {
        event.preventDefault();

        var newMovie = { name: $("#film").val().trim() };

        $.ajax("/api/movies", {
            type: "POST",
            data: newMovie
        }).then(function() {
            console.log("New movie! Named: " + newMovie);
            location.reload();
        });
    });
});