// app.js
$(document).ready(function(){

    $('body').on('click', '#fizzbuzz-button', function() {
        // console.log('fizzbuzz-button clicked');
        var maximum = parseInt($('#fizzbuzz-max').val());
        // console.log(maximum + 10);
        if (isNaN(maximum)) {
            alert('Please enter a whole number for the maiximum value.')
        } else {
            fizzbuzz(maximum);
        }
    });

    function fizzbuzz(max) {
        var result = '';
        for (var i = 1; i <= max; i++) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                // logIt('fizzbuzz');
                result = 'fizzbuzz<br />';
            } else if (i % 3 === 0) {
                // logIt('fizz');
                result = 'fizz<br />';
            } else if (i % 5 === 0) {
                // logIt('buzz');
                result = 'buzz<br />';
            } else {
                // logIt(i);
                result = i + '<br />';
            }
            $('body').append(result);
        }
    }

    function logIt(message) {
        console.log(message);
    }

});
