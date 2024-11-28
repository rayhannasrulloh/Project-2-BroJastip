// const navbarList = document.querySelector('.navbar-list')

// document.querySelector('#menuButton').onclick = () => {
//     navbarList.classList.toggle('open')
// }

$(document).ready(function () {
    $("#menuButton").on("click", function () {
        $(".navbar-list").toggleClass("open");
    });
});
