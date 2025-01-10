const players = [
    { name: 'Messi', goals: 30 },
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { name: 'Mbappé', goals: 25 },
    { name: null, goals: 15 },
    { name: 'Suarez', goals: null },
    { name: 'Griezmann', goals: undefined }
];

// Lọc các cầu thủ có cả name và goals
const filteredPlayers = players.filter(player => player && player.name && player.goals);

console.log(filteredPlayers);
