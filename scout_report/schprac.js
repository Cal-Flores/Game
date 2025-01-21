function generateBalancedSchedule(teams) {
    const numTeams = teams.length;
    const numRounds = numTeams - 1; // 13 rounds for 14 teams
    const matchesPerRound = numTeams / 2; // 7 matches per round

    // Create a list of team indices
    const teamIndices = Array.from({ length: numTeams }, (_, i) => i);

    // Create an empty schedule
    const schedule = Array.from({ length: numRounds }, () => []);

    // Generate round-robin schedule
    for (let round = 0; round < numRounds; round++) {
        for (let match = 0; match < matchesPerRound; match++) {
            const home = (round + match) % (numTeams - 1);
            const away = (numTeams - 1 - match + round) % (numTeams - 1);

            // Last team is fixed as "home" or "away" in every round
            const homeTeam = match === 0 ? numTeams - 1 : home;
            const awayTeam = match === 0 ? home : away;

            schedule[round].push([teamIndices[homeTeam], teamIndices[awayTeam]]);
        }
    }

    // Balance home/away matches
    schedule.forEach((round, i) => {
        if (i % 2 === 1) {
            round.forEach(match => match.reverse());
        }
    });

    // Add duplicate matches for each team
    const duplicateMatches = new Set();
    const duplicateRounds = Array.from({ length: numRounds }, () => new Set());

    for (let team = 0; team < numTeams; team++) {
        let duplicateAdded = false;
        while (!duplicateAdded) {
            const opponent = Math.floor(Math.random() * numTeams);
            const round = Math.floor(Math.random() * numRounds);

            if (
                team !== opponent &&
                !duplicateMatches.has(`${team}-${opponent}`) &&
                !duplicateMatches.has(`${opponent}-${team}`) &&
                !duplicateRounds[round].has(team) &&
                !duplicateRounds[round].has(opponent)
            ) {
                duplicateMatches.add(`${team}-${opponent}`);
                duplicateRounds[round].add(team);
                duplicateRounds[round].add(opponent);
                schedule[round].push([team, opponent]);
                duplicateAdded = true;
            }
        }
    }

    // Ensure each team plays exactly once per round
    schedule.forEach((round, i) => {
        const teamsPlaying = new Set();
        schedule[i] = round.filter(([home, away]) => {
            if (teamsPlaying.has(home) || teamsPlaying.has(away)) {
                return false;
            }
            teamsPlaying.add(home);
            teamsPlaying.add(away);
            return true;
        });
    });

    // Convert indices to team names
    return schedule.map(round =>
        round.map(([home, away]) => ({
            home: teams[home],
            away: teams[away],
        }))
    );
}

// Teams
const teams = [
    "Michigan",
    "NC State",
    "Penn State",
    "Lehigh",
    "Missouri",
    "Iowa",
    "Ohio State",
    "Nebraska",
    "Virginia Tech",
    "Iowa State",
    "Minnesota",
    "Stanford",
    "Cornell",
    "Oklahoma State",
];

// Generate schedule
const schedule = generateBalancedSchedule(teams);

// Output schedule
schedule.forEach((round, i) => {
    console.log(`Week ${i + 1}`);
    round.forEach(match => {
        console.log(`${match.home} vs ${match.away}`);
    });
    console.log("");
});

// Week 1
// Oklahoma State vs Michigan
// NC State vs Cornell
// Penn State vs Stanford
// Lehigh vs Minnesota
// Missouri vs Iowa State
// Iowa vs Virginia Tech
// Ohio State vs Nebraska

// Week 2
// NC State vs Oklahoma State
// Michigan vs Penn State
// Cornell vs Lehigh
// Stanford vs Missouri
// Minnesota vs Iowa
// Iowa State vs Ohio State
// Virginia Tech vs Nebraska

// Week 3
// Oklahoma State vs Penn State
// Lehigh vs NC State
// Missouri vs Michigan
// Iowa vs Cornell
// Ohio State vs Stanford
// Nebraska vs Minnesota
// Virginia Tech vs Iowa State

// Week 4
// Lehigh vs Oklahoma State
// Penn State vs Missouri
// NC State vs Iowa
// Michigan vs Ohio State
// Cornell vs Nebraska
// Stanford vs Virginia Tech
// Minnesota vs Iowa State

// Week 5
// Oklahoma State vs Missouri
// Iowa vs Lehigh
// Ohio State vs Penn State
// Nebraska vs NC State
// Virginia Tech vs Michigan
// Iowa State vs Cornell
// Minnesota vs Stanford

// Week 6
// Iowa vs Oklahoma State
// Missouri vs Ohio State
// Lehigh vs Nebraska
// Penn State vs Virginia Tech
// NC State vs Iowa State
// Michigan vs Minnesota
// Cornell vs Stanford

// Week 7
// Oklahoma State vs Ohio State
// Nebraska vs Iowa
// Virginia Tech vs Missouri
// Iowa State vs Lehigh
// Minnesota vs Penn State
// Stanford vs NC State
// Cornell vs Michigan

// Week 8
// Nebraska vs Oklahoma State
// Ohio State vs Virginia Tech
// Iowa vs Iowa State
// Missouri vs Minnesota
// Lehigh vs Stanford
// Penn State vs Cornell
// NC State vs Michigan

// Week 9
// Oklahoma State vs Virginia Tech
// Iowa State vs Nebraska
// Minnesota vs Ohio State
// Stanford vs Iowa
// Cornell vs Missouri
// Michigan vs Lehigh
// NC State vs Penn State

// Week 10
// Iowa State vs Oklahoma State
// Virginia Tech vs Minnesota
// Nebraska vs Stanford
// Ohio State vs Cornell
// Iowa vs Michigan
// Missouri vs NC State
// Lehigh vs Penn State

// Week 11
// Oklahoma State vs Minnesota
// Stanford vs Iowa State
// Cornell vs Virginia Tech
// Michigan vs Nebraska
// NC State vs Ohio State
// Penn State vs Iowa
// Lehigh vs Missouri

// Week 12
// Stanford vs Oklahoma State
// Minnesota vs Cornell
// Iowa State vs Michigan
// Virginia Tech vs NC State
// Nebraska vs Penn State
// Ohio State vs Lehigh
// Iowa vs Missouri

// Week 13
// Oklahoma State vs Cornell
// Michigan vs Stanford
// NC State vs Minnesota
// Penn State vs Iowa State
// Lehigh vs Virginia Tech
// Missouri vs Nebraska
// Iowa vs Ohio State
