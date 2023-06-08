/*
When the 'Guess' button is pressed, the function will check if the user inputs "1000000" which is
the correct value. If the value is correct, there will be a new message on the web page about
the hint and if not, no information is given.
*/
function guessed(){
    var answer = document.getElementById("text").value;
    if (answer.includes(1000000)) {
        document.getElementById("resp").textContent = "Look at our hints page!";
    } else {
        document.getElementById("resp").textContent = "You imposter!";
    }
}