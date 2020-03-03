// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var nowdevour = $(this).data("devour");

        var nowdevourState = {
            devoured: nowdevour
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowdevourState
        }).then(
            function() {
                console.log("changed devour to", nowdevour);
                // Reload  page
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#brgr").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created the burger");
                location.reload();
            }
        );
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted the burger", id);
                location.reload();
            }
        );
    });
});