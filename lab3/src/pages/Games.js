import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import RecommendedGames from '../components/RecommendedGames';

const initialGamesData = [
  {
    id: 1,
    title: "Hearts of Iron 4",
    genre: "Стратегія",
    rating: 4.3,
    players: 1200,
    image: "/images/hoi4.png"
  },
  {
    id: 2,
    title: "Doom Eternal",
    genre: "Шутер",
    rating: 4.8,
    players: 950,
    image: "/images/doom.png"
  },
  {
    id: 3,
    title: "Elden Ring",
    genre: "RPG",
    rating: 4.9,
    players: 1100,
    image: "/images/er.png"
  },
  {
    id: 4,
    title: "EA FC 25",
    genre: "Симулятор",
    rating: 4.5,
    players: 800,
    image: "/images/eafc.png"
  },
  {
    id: 5,
    title: "Mortal Kombat X",
    genre: "Файтинг",
    rating: 4.7,
    players: 700, 
    image: "/images/mkx.png"
  }
];

const Games = function () {
  const [games, setGames] = useState(initialGamesData);
  const [ascending, setAscending] = useState(true); // Додано для зберігання стану сортування

  const sortGamesByRating = function () {
    const sortedGames = games.slice().sort(function (a, b) {
      // Якщо ascending === true, сортуємо за зростанням (мінімальний рейтинг спочатку)
      // Інакше сортуємо за спаданням
      return ascending ? a.rating - b.rating : b.rating - a.rating;
    });
    setGames(sortedGames);
    setAscending(!ascending); // перемикаємо порядок для наступного натиснення
  };

  return React.createElement(
    "main",
    { className: "container" },
    
    
    
    // Секція рекомендованих ігор
    React.createElement("section", { className: "recommended-games" },
      React.createElement(RecommendedGames, { games: games })
    ),

    // Секція всіх ігор
    React.createElement("section", { className: "all-games" },
      React.createElement("h2", null, "Ігри"),
      React.createElement("button", {className: "sort-btn", onClick: sortGamesByRating }, "Сортувати за рейтингом"),
      React.createElement(
        "div",
        { className: "games-grid" },
        games.map(function (game) {
          return React.createElement(GameCard, { key: game.id, game: game });
        })
      )
    )
  );
};

export default Games;
