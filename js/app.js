// app.js
var counter = 1;

while (counter <= 100) {
    if ((counter % 3) === 0) {
        if ((counter % 5) === 0) {
            console.log('fizz buzz');
        } else {
            console.log('fizz');
        }
    } else if ((counter % 5) === 0) {
        console.log('buzz');
    } else {
        console.log(counter);
    }
    counter++;
}
