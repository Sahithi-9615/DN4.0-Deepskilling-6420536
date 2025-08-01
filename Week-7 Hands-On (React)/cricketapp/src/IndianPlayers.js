import React from 'react';

const T20players = ['Virat', 'Rohit', 'Rahul'];
const RanjiTrophy = ['Pujara', 'Rahane', 'Saha'];

// Merging both arrays
const mergedPlayers = [...T20players, ...RanjiTrophy];

const allPlayers = ['Virat', 'Rohit', 'Rahul', 'Jadeja', 'Bumrah', 'Dhawan'];

const IndianPlayers = () => {
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Merged Players List</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
