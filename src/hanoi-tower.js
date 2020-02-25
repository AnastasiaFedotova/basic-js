module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const ONE_HOUR_IN_SECONDS = 3600;
    let minTurns = Math.pow(2, disksNumber) - 1;
    let minSeconds = minTurns / (turnsSpeed / ONE_HOUR_IN_SECONDS);
    return {turns: minTurns, seconds: minSeconds};
}
