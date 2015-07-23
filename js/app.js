// app.js
$(document).ready(function(){

    function fizzbuzz(max) {
        for (var i = 1; i <= max; i++) {
            if ((i % 3) === 0) {
                if ((i % 5) === 0) {
                    console.log('fizz buzz');
                    $('body').append('fizz buzz<br />');
                } else {
                    console.log('fizz');
                    $('body').append('fizz<br />');
                }
            } else if ((i % 5) === 0) {
                console.log('buzz');
                $('body').append('buzz<br />');
            } else {
                console.log(i);
                $('body').append(i + '<br />');
            }
        }
    };
    fizzbuzz(15);
});
// get max value from user. Check that it's an integer.
// function fizzbuzz(max) {
//     //for loop until max reached
//     for (var i = 0; i <= max; i++) {
//         var result = '';
//         if ((i % 3) === 0) {
//             result = 'fizz';
//         }
//     }
// }
