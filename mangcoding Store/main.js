let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".section2");
let started = false;
let startTime;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            startTime = Date.now();
            nums.forEach((num) => startCount(num, startTime));
        }
        started = true;
    }
};

function startCount(el, startTime) {
    let goal = el.dataset.goal;
    let duration = 2000;

    let count = setInterval(() => {
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;
        let progress = elapsedTime / duration;

        if (progress < 1) {
            let currentValue = Math.floor(progress * goal);
            el.textContent = currentValue;
        } else {
            el.textContent = goal;
            clearInterval(count);
        }
    }, 16);
}
