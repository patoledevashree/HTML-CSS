$(document).ready(function () {
    $('#firstname').on({
        blur: function () {
            var letters = /^[A-Za-z]+$/;
            var text = $('#firstname').val();
            console.log(text)
            if (text.match(letters)) {
                $('#firstname').css('border','1px solid green');
                $('#fname_error').css('visibility','hidden');
            }
            else {
                $('#firstname').css('border','1px solid red');
                $('#fname_error').css('visibility','visible');
            }
        }
    });
    $('#lastname').on({
        blur: function () {
            var letters = /^[A-Za-z]+$/;
            var text = $('#lastname').val();
            console.log(text)
            if (text.match(letters)) {
                $('#lastname').css('border','1px solid green');
                $('#lname_error').css('visibility','hidden');
            }
            else {
                $('#lastname').css('border','1px solid red');
                $('#lname_error').css('visibility','visible');
            }
        }
    });
});