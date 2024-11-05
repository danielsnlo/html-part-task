// 1.
function sayMyName() {
    console.log("Jānis");  // Izvada statisku tekstu, piemēram, vārdu "Jānis"
}

sayMyName();  // Izsauc funkciju, lai izvadītu vārdu


// 2.
function sayName(name) {
    console.log(name);  // Izvada parametra "name" vērtību
}

sayName("Jānis");  // Izsauc funkciju, dodot argumentu "Jānis"


// 3.
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);  // Izvada skaitļus no 1 līdz 10
    }
}

printNumbers();  // Izsauc funkciju, kas izvada skaitļus


// 4.
function printRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);  // Izvada skaitļus no "start" līdz "end"
    }
}

printRange(5, 8);  // Izsauc funkciju ar argumentiem 5 un 8, izvadot skaitļus no 5 līdz 8



