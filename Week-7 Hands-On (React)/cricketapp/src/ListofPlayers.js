import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 95 },
  { name: 'KL Rahul', score: 45 },
  { name: 'Hardik Pandya', score: 78 },
  { name: 'Ravindra Jadeja', score: 68 },
  { name: 'Jasprit Bumrah', score: 82 },
  { name: 'Rishabh Pant', score: 65 },
  { name: 'Suryakumar Yadav', score: 72 },
  { name: 'Shubman Gill', score: 50 },
  { name: 'Shikhar Dhawan', score: 80 },
  { name: 'Mohammed Siraj', score: 60 },
];

// Filtering players with score below 70
const filteredPlayers = players.filter(player => player.score < 70);

const ListofPlayers = () => {
  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
