const timer = () => {
    let seconds = 0;

    function showTime() {
        document.body.textContent = `Od wejścia na stronę minęło ${seconds++} sekund`;
    }

    return showTime;
}
const start = timer();

setInterval(start, 1000);