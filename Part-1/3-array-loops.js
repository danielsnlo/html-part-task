// 1. Izvada skaitļus no 11 līdz 20
for (let i = 11; i <= 20; i++) {
    console.log(i);
  }
  

  // 2. Izvada skaitļus no 20 līdz 11
  for (let i = 20; i >= 11; i--) {
    console.log(i);
  }
  

  // 3. Izveido masīvu ar 5 draugu vārdiem
  let draugi = ["Jānis", "Antra", "Māris", "Ilze", "Andris"];
  

  // 4. Izvadi pirmo un trešo draugu
  console.log(draugi[0]);
  console.log(draugi[2]);
  
  
  // 5. Izvada visus draugu vārdus ar numerāciju
  for (let i = 0; i < draugi.length; i++) {
    console.log((i + 1) + ". " + draugi[i]);
  }