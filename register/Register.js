$(document).ready(function () {
    // keyup Event 
    $('.first-last-name input').keyup(function () {
        let input = $(this).val();
        $(this).val(input.toUpperCase());
    });

    // clickevent
    $('.email-password input[type="password"]').each(function () {
        $(this).wrap('<div style="position: relative"></div>');
        $(this).after('<span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer">👁️</span>');
    });

    $('.email-password span').click(function () {
        let input = $(this).prev('input');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).text('🔒');
        } else {
            input.attr('type', 'password');
            $(this).text('👁️');
        }
    });

    // focus Event 
    $('input').on('focus', function () {
        $(this).css('background-color', '#e0f7fa');
    }).on('blur', function () {
        $(this).css('background-color', '');
    });

    // keyup Event 
    $('input').keyup(function () {
        if ($(this).val() !== '') {
            $(this).css('border', '2px solid green');
        } else {
            $(this).css('border', '1px solid #ccc');
        }
    });

    // change Event 
    $('input').on('change', function () {
        console.log(`Input changed: ${$(this).attr('placeholder')} => ${$(this).val()}`);
    });

    // keypress Event 
    $('.email-password input').eq(0).on('keypress', function (event) {
        const allowedCharacters = /^[a-zA-Z0-9@.\-_]+$/; // Regex untuk huruf, angka, dan simbol email
        const key = String.fromCharCode(event.which);
        if (!allowedCharacters.test(key)) {
            event.preventDefault();
        }
    });

    // mouse Move
    $(document).on('mousemove', function (event) {
        console.log(`Mouse Position - X: ${event.pageX}, Y: ${event.pageY}`);
    });

    // click Event 
    $('.btn-signup').click(function (e) {
        e.preventDefault();

        let name1 = $('.first-last-name input').eq(0).val();
        let name2 = $('.first-last-name input').eq(1).val();
        let contact = $('.email-password input').eq(0).val();
        let pass1 = $('.email-password input[type="password"]').eq(0).val();
        let pass2 = $('.email-password input[type="password"]').eq(1).val();

        
        if (!name1 || !name2 || !contact || !pass1 || !pass2) {
            alert('Please fill in all fields!');
            return;
        }

        
        if (pass1 !== pass2) {
            alert('Passwords do not match!');
            $('.email-password input[type="password"]').css('border', '2px solid red');
            return;
        }

        $('.email-password input[type="password"]').css('border', '2px solid green');
        alert('Registration successful!');
    });
});
