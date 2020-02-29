// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#eatButton").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevouredState = $(this).data("devoured");

        var nowDevouredState = {
            devoured: newDevouredState
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: nowDevouredState
        }).then(
            function() {
                console.log("burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),

        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function() {
                console.log("add new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // eat burger event and PUT request


    $(".trashBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");



        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});