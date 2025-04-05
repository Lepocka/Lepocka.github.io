document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".fav-btn");

    buttons.forEach(button => {
        button.addEventListener("dblclick", function () {
            const card = this.closest(".game-card");
            card.classList.toggle("favorite");
        });
    });
});