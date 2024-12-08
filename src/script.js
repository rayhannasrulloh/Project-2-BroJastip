// const navbarList = document.querySelector('.navbar-list')

// document.querySelector('#menuButton').onclick = () => {
//     navbarList.classList.toggle('open')
// }

// smooth scrolling
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

// humberger menu
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

// search
$(document).ready(function () {
    const searchBtn = $("#searchButton");
    const input = $("#searchInput");

    searchBtn.on("click", function (e) {
        e.stopPropagation();
        if (input.hasClass("active")) {
            input.removeClass("active").fadeOut();
        } else {
            input.addClass("active")
                .fadeIn().focus();
        }
    });

    input.on("click", function (e) {
        e.stopPropagation();
    });

    $(document).on("click", function () {
        $("#search-input")
            .removeClass("active")
            .fadeOut();
    });
});

// select menu
$(document).ready(function () {
    const menuData = {
        menu1: {
            name: "Pancong",
            image: "../img/pancong-lumer.png",
            toppings: ["Chocolate", "Cheese + Milk", "Sugar + Milk"],
            price: "Rp 10.000"
        },
        menu2: {
            name: "Martabak",
            image: "../img/martabak1.png",
            toppings: ["Chocolate", "Milk", "Strawberry"],
            price: "Rp 12.000"
        },
        menu3: {
            name: "Kebab",
            image: "../img/kebab1.png",
            toppings: ["Chicken", "Beef", "Vegetables Only"],
            price: "Rp 10.000"
        }
    };

    $('#menuSelect').change(function () {
        const selectedMenu = $(this).val();

        if (selectedMenu && menuData[selectedMenu]) {
            const menu = menuData[selectedMenu];
            $('#menuImage').attr('src', menu.image);
            $('#menuName').text(menu.name);
            $('#menuToppings').html(menu.toppings.map(topping => `<li> - ${topping}</li>`).join(''));
            $('#menuPrice').text(menu.price);
            $('#menuDetail').show();
        } else {
            $('#menuDetail').hide();
        }
    });
});

// contact us
$(document).ready(function () {
    $("#sendToWhatsApp").on("click", function () {
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            $("#responseMessage").text("All fields are required.").css("color", "red").show();
            return;
        }

        const whatsappNumber = "6282278989976";
        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I have a message: ${message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

        $("#responseMessage").text("Redirecting you to WhatsApp...").css("color", "green").show();
    });

    // default
    $("#contactForm").on("submit", function (e) {
        e.preventDefault(); 

        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            $("#responseMessage").text("All fields are required.").css("color", "red").show();
            return;
        }

        setTimeout(function () {
            $("#responseMessage")
                .text("Thank you for your message, " + name + "! We will get back to you soon.")
                .css("color", "green")
                .show();

            $("#contactForm")[0].reset();
        }, 1000);
    });
});

