let persona = {
    vards: "Jānis",       // Vārds
    vecums: 25,           // Vecums
    irStudents: true      // Vai persona ir students
};



// Izmantojot dot notation
console.log(persona.vards);  // Izvade: Jānis

// Izmantojot bracket notation
console.log(persona["vards"]);  // Izvade: Jānis



let pilngadibasVecums = 18;

if (persona.vecums >= pilngadibasVecums) {
    console.log(persona.vards + " ir pilngadīgs.");
} else {
    console.log(persona.vards + " nav pilngadīgs.");
}



// Pievienojam jaunu atribūtu "course" ar vērtību "PT2024"
persona.course = "PT2024";  // Izmantojot dot notation

// Pārbaudām, vai atribūts ir pievienots
console.log(persona);