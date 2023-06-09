// When the 'Guess' button is pressed,
function guessed(){
    var answer = document.getElementById("text").value;
    // the function will check if the user inputs "1000000"
    if (answer.includes(1000000)) {
        //if so, there will be a new message on the web page about the hint
        document.getElementById("resp").textContent = "Look at our hints page!";
    //if not, no information is given.
    } else {
        document.getElementById("resp").textContent = "You imposter!";
    }
}