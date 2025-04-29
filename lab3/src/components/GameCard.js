import React, { useState } from 'react';

const GameCard = function (props) {
  const game = props.game;
  const [favorite, setFavorite] = useState(false);

  const renderStars = function (rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? "½" : "";
    return "★".repeat(fullStars) + halfStar;
  };

  const toggleFavorite = function () {
    setFavorite(!favorite);
  };

  return React.createElement(
    "div",
    { className: "game-card" + (favorite ? " favorite" : "") },
    React.createElement("img", { src: game.image, alt: game.title }),
    React.createElement("h3", null, game.title),
    React.createElement("p", null, "Жанр: ", game.genre),
    React.createElement("p", null, "Рейтинг: ", renderStars(game.rating), " (", game.rating, ")"),
    React.createElement("p", null, "Гравців: ", game.players),
    React.createElement("button", { className: "fav-btn", onDoubleClick: toggleFavorite }, "Додати до улюблених")
  );
};

export default GameCard;
