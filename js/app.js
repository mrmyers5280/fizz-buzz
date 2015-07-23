// app.js
$(document).ready(function(){

    $('body').on('click', '#fizzbuzz-button', function() {
        console.log('fizzbuzz-button clicked');
        var maximum = parseInt($('#fizzbuzz-max').val());
        // console.log(maximum + 10);
        fizzbuzz(maximum);
    });

    function fizzbuzz(max) {
        var result = '';
        for (var i = 1; i <= max; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log('fizzbuzz');
                result = 'fizzbuzz<br />';
            } else if (i % 3 === 0) {
                console.log('fizz');
                result = 'fizz<br />';
            } else if (i % 5 === 0) {
                console.log('buzz');
                result = 'buzz<br />';
            } else {
                console.log(i);
                result = i + '<br />';
            }
            $('body').append(result);
        }
    }

    //fizzbuzz(15);
});
// get max value from user. Check that it's an integer.
