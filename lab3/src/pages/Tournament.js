import React from 'react';
import TournamentCard from '../components/TournamentCard';

const tournamentsData = [
  {
    id: 1,
    title: "CS:GO Чемпіонат",
    date: "10 квітня 2025",
    prize: "$5000",
    participants: 32
  },
  {
    id: 2,
    title: "Dota 2 Кубок",
    date: "15 травня 2025",
    prize: "$7000",
    participants: 64
  }
];

const Tournaments = function () {
  return React.createElement(
    "main",
    { className: "container" },
    React.createElement("h2", null, "Турніри"),
    React.createElement(
      "div",
      { className: "tournaments-grid" },
      tournamentsData.map(function (tournament) {
        return React.createElement(TournamentCard, { key: tournament.id, tournament: tournament });
      })
    )
  );
};

export default Tournaments;
