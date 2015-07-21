// app.js
$(document).ready(function(){
    var counter = 1;

    while (counter <= 100) {
        if ((counter % 3) === 0) {
            if ((counter % 5) === 0) {
                //console.log('fizz buzz');
                $('body').append('fizz buzz<br />');
            } else {
                //console.log('fizz');
                $('body').append('fizz<br />');
            }
        } else if ((counter % 5) === 0) {
            //console.log('buzz');
            $('body').append('buzz<br />');
        } else {
            //console.log(counter);
            $('body').append(counter + '<br />');
        }
        counter++;
    }
});
