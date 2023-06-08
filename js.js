function guessed(){
    var answer = document.getElementById("text").value;
    if (answer = "1000000") {
        document.getElementById("resp").textContent = "Look at our hints page!";
    } else {
        document.getElementById("resp").textContent = "You imposter!";
    }
}