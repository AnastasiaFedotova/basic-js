module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD = 5730;
  if(typeof(sampleActivity) != "string" || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;

  const Ln2 = 0.693;
  const reactionRate = HALF_LIFE_PERIOD / Ln2;
  let LnN = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));

  return LnN ? Math.ceil(LnN * reactionRate) : false;
};