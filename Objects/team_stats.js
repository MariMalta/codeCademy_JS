const team = {
    _players: [
        {
            firstName: 'Luka',
            lastName: 'Sanchez',
            age: 21
        },
        {
            firstName: 'Marco',
            lastName: 'Santos',
            age: 24
        },
        {
            firstName: 'Pablo',
            lastName: 'Diaz',
            age: 22
        },
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Vermelhos',
            teamPoints: 47,
            opponentPoints: 37
        },
        {
            opponent: 'Glitter',
            teamPoints: 44,
            opponentPoints: 40
        }
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(opponentsName, teamPoints, oppTeamPoints) {
        const game = {
            opponent: opponentsName,
            teamPoints: teamPoints,
            opponentPoints: oppTeamPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 100, 88);
team.addGame('Purple', 120, 68);
team.addGame('Pink', 89, 120);


console.log(team.players);
console.log('\n');
console.log(team.games);
