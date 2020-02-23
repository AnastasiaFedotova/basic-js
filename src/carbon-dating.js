module.exports = function dateSample(sampleActivity) {
  if(!parseFloat(sampleActivity) || +sampleActivity <= 0 || +sampleActivity > 15 || typeof(sampleActivity) != "string") return false;

  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD = 5730;
  const Ln2 = 0.693;
  const reactionRate = Ln2 / HALF_LIFE_PERIOD;
  let infelicity = 0.5;
  let LnN = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));

  return Math.round((LnN/reactionRate) + infelicity);
};
