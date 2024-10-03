var timer;
var timeLeft = 0;
var running = false;

function startTimer() {
    if (!running) {
        var minutes = parseInt(document.getElementById('minutesInput').value);
        if (isNaN(minutes) || minutes < 0) {
            alert("Please enter a valid number of minutes.");
            return;
        }
        timeLeft = minutes * 60;
        timer = setInterval(updateDisplay, 1000);
        running = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = 0;
    document.getElementById('display').innerText = "00:00";
}

function updateDisplay() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        running = false;
        alert("Time's up!");
        return;
    }

    timeLeft--;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    document.getElementById('display').innerText =
        `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}