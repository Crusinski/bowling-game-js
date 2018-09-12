const bowlingGame = {
    initialize,
    roll,
    getScore,
    rollMany
};
var totalRolls = []

function initialize() {
    totalRolls = []
}

function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++)
        roll(pins)
}

function getScore() {
    let total = 0

    for (let i = 0; i < totalRolls.length; i+=2) {
        let frame = 0 
        
        const frameIsStrike = totalRolls[i] === 10
        if (frameIsStrike){
            frame += totalRolls[i] + totalRolls [i+1] + totalRolls[i+2]
        }
        else {
            frame = totalRolls[i] + totalRolls[i+1]
            const frameIsSpare = frame === 10
            if (frameIsSpare)
                frame += totalRolls[i+2]
        }
        total += frame
    }

    return total
}

function roll(pins) {
    totalRolls.push(pins)
}


module.exports = bowlingGame
