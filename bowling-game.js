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
    let roll = 0 

    for (let frame = 0; frame < 10; frame++) {
        
        const frameIsStrike = totalRolls[roll] === 10
        if (frameIsStrike){
            total += totalRolls[roll] + totalRolls [roll+1] + totalRolls[roll+2]
            roll += 1
        }
        else {
            total += totalRolls[roll] + totalRolls[roll+1]
            const frameIsSpare = totalRolls[roll] + totalRolls [roll+1] === 10
            if (frameIsSpare)
                total += totalRolls[roll+2]
            roll += 2
        }
    }

    return total
}

function roll(pins) {
    totalRolls.push(pins)
}


module.exports = bowlingGame
