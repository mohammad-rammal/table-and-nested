document.addEventListener("DOMContentLoaded", function () {
    const tableRows = document.querySelectorAll("#invoiceTable tr");
    const sound = document.getElementById("sound");
    animateTableRows(tableRows, sound);
});

function animateTableRows(tableRows, sound) {
    let delay = 0;

    tableRows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = 1;
            row.style.transform = "translateX(0)";
            playSound(sound);
        }, delay);
        delay += 200;
    });
}

function playSound(sound) {
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}
