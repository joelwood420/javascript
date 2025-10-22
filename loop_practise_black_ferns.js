const blackFernsPlayers = [
  "Alana",
  "Tanya",
  "Jorja",
  "Chelsea",
  "Georgia",
  "aura",
  "ayla",
  "iana",
  "Maiaka",
  "Portia",
  "Ruahei",
  "Vici-Rose",
  "Katelyln",
  "Sylvia",
  "Stacey",
  "Awhina",
  "Chryss",
  "Amy",
  "Atlanta",
  "Braxton",
  "Iritana",
  "Kaipo",
  "Kate"
];



function hasInitialAndLength(names) {
    let hasL = false;
    let has10Characters = false;
    
    for (let i = 0; i < names.length; i++) {
        if (names[i].startsWith("L")) {
            hasL = true;
        }
        if (names[i].length > 10) {
            has10Characters = true;
        }
        
    }
    return hasL && has10Characters;
}

console.log(hasInitialAndLength(blackFernsPlayers));
