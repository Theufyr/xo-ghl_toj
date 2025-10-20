const students = {
    "A001": {
        id: "A001",
        name: "Alice Martin",
        age: 22,
        major: "Computer Science",
        grades: [14, 16, 12, 18, 15],
        absences: 3,
        courses: ["JavaScript", "Algorithms", "Database"]
    },
    "A002": {
        id: "A002",
        name: "Bob Dupont",
        age: 24,
        major: "Mathematics",
        grades: [11, 9, 15, 8, 13],
        absences: 7,
        courses: ["Calculus", "Statistics", "Algebra"]
    },
    "A003": {
        id: "A003",
        name: "Claire Leroy",
        age: 21,
        major: "Computer Science",
        grades: [17, 19, 16, 18, 20],
        absences: 1,
        courses: ["JavaScript", "Web Development", "Data Structures"]
    },
    "A004": {
        id: "A004",
        name: "David Moreau",
        age: 23,
        major: "Phnameysics",
        grades: [12, 14, 11, 10, 13],
        absences: 5,
        courses: ["Mechanics", "Quantum Physics", "Thermodynamics"]
    },
    "A005": {
        id: "A005",
        name: "Emma Bernard",
        age: 22,
        major: "Computer Science",
        grades: [15, 17, 16, 14, 19],
        absences: 2,
        courses: ["JavaScript", "Networks", "Security"]
    }
};
// ---------------------------------------------------
// Étape 1
console.log("Étape 1 : Calculer la moyenne de chaque étudiant·e");
Object.keys(students).forEach(id => {
    // on arrondit les moyennes
    const averageGrade = Math.round(students[id].grades.reduce(
        (accumulator, currentValue) => (accumulator + currentValue), 0,
    ) / students[id].grades.length);
    console.log(students[id].name + " :", averageGrade, "de moyenne");
});
// ---------------------------------------------------
// Étape 2
console.log("\nÉtape 2 : Trouver les étudiant·es d'une filière donnée");
const majorStudents = new Object();
Object.keys(students).forEach(id => {
    if (!majorStudents.hasOwnProperty(students[id].major)) {
        majorStudents[students[id].major] = {
            studentsNumber: 1,
            studentsNames: students[id].name
        };
    } else {
        majorStudents[students[id].major].studentsNumber++;
        majorStudents[students[id].major].studentsNames += ", " + students[id].name; 
    }
});
Object.keys(majorStudents).forEach(major => {
    console.log(majorStudents[major].studentsNumber + " étudiant·es en " + major + " : " + majorStudents[major].studentsNames);
});
// ---------------------------------------------------
// Étape 3
console.log("\nÉtape 3 : Identifier l'étudiante avec la meilleure moyenne");
let bestStudentGrade    = 0;
let bestStudentName     = "";
Object.keys(students).forEach(id => {
    // on calcule la moyenne de chaque étudiant
    const averageGrade = (students[id].grades.reduce(
        (accumulator, currentValue) => (accumulator + currentValue), 0,
    ) / students[id].grades.length);
    // on remplace celle en mémoire par celle qui est meilleure
    if (averageGrade > bestStudentGrade) {
        bestStudentGrade    = averageGrade;
        bestStudentName     = students[id].name;
    }
});
console.log(bestStudentName);
// ---------------------------------------------------
// Étape 4
console.log("\nÉtape 4 : Statistiques par filière (moyenne des moyennes, taux d'absentéisme)");
const allMajors = new Object();
Object.keys(students).forEach(id => {
    // on calcule la moyenne de chaque étudiant
    const averageGrade = (students[id].grades.reduce(
        (accumulator, currentValue) => (accumulator + currentValue), 0,
    ) / students[id].grades.length);
    // on met en mémoire les données par filière
    if (!allMajors.hasOwnProperty(students[id].major)) {
        allMajors[students[id].major] = {
            averageGeneralStudents: 1,
            averageGeneralGrade: averageGrade,
            averageGeneralAbsences: students[id].absences
        };
    } else {
        allMajors[students[id].major].averageGeneralStudents++;
        allMajors[students[id].major].averageGeneralGrade += averageGrade;
        allMajors[students[id].major].averageGeneralAbsences += students[id].absences;
    }
});
Object.keys(allMajors).forEach(major => {
    // on arrondit les moyennes
    console.log("Filière " + major + " :\n- Moyenne des moyennes :", + Math.round(allMajors[major].averageGeneralGrade / allMajors[major].averageGeneralStudents), "\n- Moyenne des absences : ", Math.round(allMajors[major].averageGeneralAbsences / allMajors[major].averageGeneralStudents));
});
// ---------------------------------------------------
// Étape 5
console.log("\nÉtape 5 : Ajouter une nouvelle note à un étudiante");
students["A003"].grades.push(15); // on ajoute une note de 15 à Claire Leroy
// on vérifie en l'affichant :
console.log("Note ajoutée à " + students["A003"].name + " :", students["A003"].grades[students["A003"].grades.length - 1]);
