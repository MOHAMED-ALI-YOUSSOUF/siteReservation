function countSatisfyingTeams(skillList) {
  // Créer un tableau pour compter le nombre de compétences de chaque type
  let skillCount = {
    P: 0, // Physique
    C: 0, // Chimie
    M: 0, // Mathématiques
    B: 0, // Botanique
    Z: 0, // Zoologie
  };

  // Parcourir la liste des compétences des élèves et compter les compétences de chaque type
  for (let i = 0; i < skillList.length; i++) {
    let skill = skillList[i];

    // Incrémenter le compteur correspondant à la compétence
    skillCount[skill]++;
  }

  // Calculer le nombre d'équipes possibles en utilisant les compétences disponibles
  let totalTeams = 0;
  for (let p = 0; p <= skillCount.P; p++) {
    for (let c = 0; c <= skillCount.C; c++) {
      for (let m = 0; m <= skillCount.M; m++) {
        for (let b = 0; b <= skillCount.B; b++) {
          for (let z = 0; z <= skillCount.Z; z++) {
            // Vérifier si le nombre total d'élèves dans l'équipe est égal à 5
            if (p + c + m + b + z === 5) {
              totalTeams++;
            }
          }
        }
      }
    }
  }

  return totalTeams;
}

// Exemple d'utilisation du code avec une liste de compétences d'élèves
let skillList = ["P", "C", "M", "B", "Z", "P", "C", "M", "B", "Z"];
let teamsCount = countSatisfyingTeams(skillList);
console.log("Nombre total d'équipes satisfaisantes : " + teamsCount);
