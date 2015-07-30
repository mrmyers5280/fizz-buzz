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
        var resultFizz = 'fizz';
        var resultBuzz = 'buzz';
        for (var i = 1; i <= max; i++) {
            if (i % 15 === 0) {
                // logIt('fizzbuzz');
                result = resultFizz + resultBuzz;
            } else if (i % 3 === 0) {
                // logIt('fizz');
                result = resultFizz;
            } else if (i % 5 === 0) {
                // logIt('buzz');
                result = resultBuzz;
            } else {
                // logIt(i);
                result = i;
            }
            $('body').append(result + '<br />');
        }
    }

    function logIt(message) {
        console.log(message);
    }

});
