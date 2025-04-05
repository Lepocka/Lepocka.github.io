document.addEventListener("DOMContentLoaded", function () {
    function animateProgressBar(current, goal) {
        const progressBar = document.getElementById("progress-bar");

        const target = Math.floor((current / goal) * 100);
        let width = 0;

        function step() {
            if (width < target) {
                width++;
                progressBar.style.width = width + "%";
                progressBar.innerHTML = width + "%";
                setTimeout(step, 20);
            }
        }

        step();
    }

    // 🔢 Наприклад, користувач пройшов 6 з 10 ігор
    animateProgressBar(8.9, 10);
});