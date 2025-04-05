document.addEventListener("DOMContentLoaded", function () {
    const games = [
        {
            title: "Hearts of iron 4",
            genre: "Стратегія",
            rating: "⭐⭐⭐⭐☆",
            players: 1200,
            image: "images/game1.png"
        },
        {
            title: "Doom Ethernal",
            genre: "Шутер",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game2.png"
        },
        {
            title: "Elden Ring",
            genre: "RPG",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game3.png"
        },
        {
            title: "EA FC 25",
            genre: "Симулятор",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game4.png"
        },
        {
            title: "Mortal Combat X",
            genre: "Файтинг",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game5.png"
        },
        {
            title: "Resident Evil Village",
            genre: "Жахи",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game6.png"
        },
        {
            title: "Call of Duty: MW 3",
            genre: "Шутер",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game7.png"
        },
        {
            title: "Crysis",
            genre: "Шутер",
            rating: "⭐⭐⭐⭐⭐",
            players: 950,
            image: "images/game8.png"
        }
    ];

    const selectedGames = [];
    let count = 0;

    while (count < 4) {
        const randomGame = games[Math.floor(Math.random() * games.length)];
        if (!selectedGames.includes(randomGame)) {
            selectedGames.push(randomGame);
            count++;
        }
    }

    const grid = document.querySelector(".games-container");

    selectedGames.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>Жанр: ${game.genre}</p>
            <p>Рейтинг: ${game.rating}</p>
            <p>Гравців: ${game.players}</p>
            <button class="play-btn">Грати</button>
        `;
        grid.appendChild(card);
    });
});