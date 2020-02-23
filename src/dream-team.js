module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let nameTeam = [];

    members.forEach(nameMember => {
      if(typeof(nameMember) != "string") return;
      nameTeam.push(nameMember.trim()[0].toUpperCase());
    });
    
    return nameTeam.sort().join('');
  }

  return false
};