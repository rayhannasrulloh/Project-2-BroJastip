$(document).ready(function () {
    $("#navContainer").load("../src/index.html nav", function (response, status, xhr) {
        if (status === "error") {
            console.log("Error loading nav: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Navigation loaded successfully.");
        }
    });
});