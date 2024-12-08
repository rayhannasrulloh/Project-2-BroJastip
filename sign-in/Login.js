$(document).ready(function() {
    // form submission
    $('.form-register').submit(function(e) {
        e.preventDefault();
        const emailOrPhone = $('input[placeholder="Enter Email / Phone"]').val().trim();
        const password = $('input[placeholder="Password"]').val().trim();

        if (!emailOrPhone || !password) {
            return alert('Please fill in both email/phone and password fields.');
        }
        alert('Login Successful!');
        console.log(```Email/Phone: ${emailOrPhone}, Password: ${password}```);
    });

    // input validation
    $('input').on('input', function() {
        $(this).css('border', $(this).val().trim() ? '2px solid green' : '2px solid red');
    });

    // social media login
    $('.sev-ops a').click(function(e) {
        e.preventDefault();
        const platform = $(this).text().trim().toLowerCase();
        const urls = {
            google: 'https://accounts.google.com/',
            apple: 'https://appleid.apple.com/',
            facebook: 'https://www.facebook.com/login/'
        };

        if (urls[platform]) {
            alert(```Redirecting to ${platform} login...```);
            window.location.href = urls[platform];
        } else {
            alert('Platform not supported!');
        }
    });

    // mouse tracking
    $('body').mousemove(e => console.log(```Mouse: X=${e.pageX}, Y=${e.pageY}```));

    // keypress tracking
    $(document).keypress(e => console.log(```Key pressed: ${String.fromCharCode(e.which)}```));

    // input focus and blur
    $('input').focus(function() {
        $(this).css('background-color', '#f0f8ff');
    }).blur(function() {
        $(this).css('background-color', '');
    });

    // forgot Password
    $('.forget-a').click(function(e) {
        e.preventDefault();
        const emailOrPhone = $('input[placeholder="Enter Email / Phone"]').val().trim();
        alert(```emailOrPhone ? Password reset link sent to ${emailOrPhone}. : 'Please enter your email/phone.'```);
    });
});