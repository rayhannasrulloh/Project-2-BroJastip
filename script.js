// const navbarList = document.querySelector('.navbar-list')

// document.querySelector('#menuButton').onclick = () => {
//     navbarList.classList.toggle('open')
// }

$(document).ready(function () {
    const menu = $("#menuButton");
    const navbarList = $(".navbar-list");

    menu.on("click", function () {
        navbarList.toggleClass("open");
    });

    $(document).on("click", function (e) {
        if (!menu.is(e.target) && !menu.has(e.target).length && 
            !navbarList.is(e.target) && !navbarList.has(e.target).length) {
            navbarList.removeClass("open");
        }
    });
});
