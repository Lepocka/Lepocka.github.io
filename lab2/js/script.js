document.addEventListener("DOMContentLoaded", function () {

    // === Завдання 1: Керування DOM за допомогою циклів та умовної логіки ===
    // let gameCards = document.querySelectorAll(".game-card");
    // for (let i = 0; i < gameCards.length; i++) {
    //     if (i % 2 === 0) {
    //         gameCards[i].style.backgroundColor = "rgba(255, 204, 0, 0.2)";
    //     } else {
    //         gameCards[i].style.backgroundColor = "rgba(0, 255, 0, 0.2)";
    //     }
    // }

    gameCards.forEach((card, index) => {
        let title = card.querySelector("h3");
        if (index === 0) {
            title.innerText += " (Топ гра!)";
        } else if (index === gameCards.length - 1) {
            title.innerText += " (Останнє доповнення)";
        }
    });

    // === Завдання 2: Обробка подій та динамічні оновлення ===
    
    // let favButtons = document.querySelectorAll(".fav-btn");
    // favButtons.forEach(button => {
    //     button.addEventListener("dblclick", function () {
    //         let card = this.parentElement;
    //         card.classList.toggle("favorite");
    //     });
    // });

    // let navLinks = document.querySelectorAll("nav a");
    // navLinks.forEach(link => {
    //     link.addEventListener("mouseover", function () {
    //         this.style.color = "#ffcc00";
    //         this.style.textDecoration = "underline";
    //     });
    //     link.addEventListener("mouseout", function () {
    //         this.style.color = "";
    //         this.style.textDecoration = "none";
    //     });
    // });

    // === Завдання 3: Динамічне керування контентом ===
    let commentSection = document.createElement("section");
    commentSection.classList.add("comment-section");
    commentSection.innerHTML = `
        <h3>Додати коментар</h3>
        <form id="comment-form">
            <input type="text" id="username" placeholder="Ваше ім'я" required>
            <textarea id="comment-text" placeholder="Ваш коментар" required></textarea>
            <button type="submit">Надіслати</button>
        </form>
        <h3>Коментарі:</h3>
        <ul id="comment-list"></ul>
    `;
    document.body.appendChild(commentSection);

    let commentForm = document.getElementById("comment-form");
    let commentList = document.getElementById("comment-list");
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let userName = document.getElementById("username").value.trim();
        let commentText = document.getElementById("comment-text").value.trim();
        if (userName === "" || commentText === "") {
            alert("Будь ласка, заповніть всі поля!");
            return;
        }
        let commentItem = document.createElement("li");
        commentItem.innerHTML = `<strong>${userName}:</strong> ${commentText}`;
        commentList.appendChild(commentItem);
        document.getElementById("username").value = "";
        document.getElementById("comment-text").value = "";
    });

    // === Варіант 2: Генерація випадкових рекомендованих ігор ===
    const games = [
        { name: "Hearts of iron 4", image: "images/game1.png", genre: "Стратегія", rating: "⭐⭐⭐⭐☆", players: 1200 },
        { name: "Doom Ethernal", image: "images/game2.png", genre: "Шутер", rating: "⭐⭐⭐⭐⭐", players: 950 },
        { name: "Elden Ring", image: "images/game3.png", genre: "RPG", rating: "⭐⭐⭐⭐⭐", players: 1100 },
        { name: "EA FC 25", image: "images/game4.png", genre: "Симулятор", rating: "⭐⭐⭐⭐⭐", players: 980 },
        { name: "Mortal Kombat X", image: "images/game5.png", genre: "Файтинг", rating: "⭐⭐⭐⭐⭐", players: 890 },
        { name: "Resident Evil Village", image: "images/game6.png", genre: "Жахи", rating: "⭐⭐⭐⭐⭐", players: 870 },
        { name: "Call of Duty: Modern Warfare 3", image: "images/game7.png", genre: "Шутер", rating: "⭐⭐⭐⭐⭐", players: 1250 },
        { name: "Crysis", image: "images/game8.png", genre: "Шутер", rating: "⭐⭐⭐⭐⭐", players: 1020 }
    ];
    
        const recommendedGames = document.getElementById("recommended-games");
        if (recommendedGames) {
            let gamestemp = [...games]; // Глибока копія масиву
            recommendedGames.innerHTML = "";
        
            let selectedGames = [];
        
            // Вибір унікальних 4 випадкових ігор
            while (selectedGames.length < 4 && gamestemp.length > 0) {
                let randomIndex = Math.floor(Math.random() * gamestemp.length);
                selectedGames.push(gamestemp[randomIndex]);
                gamestemp.splice(randomIndex, 1); // Видаляємо обрану гру
            }
        
            // Додаємо обрані ігри до DOM
            selectedGames.forEach((game, index) => {
            let div = document.createElement("div");
            div.className = "game-card";
            div.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p>Жанр: ${game.genre}</p>
                <p>Рейтинг: ${game.rating}</p>
                <p>Гравців: ${game.players}</p>
            `;
            recommendedGames.appendChild(div);
    
            // Застосовуємо кольоровий фон
            if (index % 2 === 0) {
                div.style.backgroundColor = "rgba(255, 204, 0, 0.2)";
            } else {
                div.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
            }
            });
        }
    
 
    // === Анімація шкали прогресу у профілі ===
    let progress = document.getElementById("progress");
    let percent = 70;
    progress.style.width = "0%";
    setTimeout(() => {
        progress.style.width = percent + "%";
    }, 500);
});