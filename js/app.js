// The MIT License (MIT)

// Copyright (c) 2015 Mike Myers

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
