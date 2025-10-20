const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];
// ---------------------------------------------------
// Étape 1
console.log("Étape 1 : Trouver tous les livres d'Alice Martin");
let bookList	= books.filter(tempBook => tempBook.author === "Alice Martin");
bookList.forEach(book => {
    console.log(book.title);
});
// ---------------------------------------------------
// Étape 2
console.log("Étape 2 : Calculer la moyenne des pages par genre");
// on récupère chaque genre et on ajoute les pages de chaque livre d'un même genre
// on affiche le genre et son total de page divisé par le nombre de livre de ce genre
// genre / nb de livre / nb de pages
const allBooks = new Object();
books.forEach(book => {
    if (!allBooks.hasOwnProperty(book.genre)) {
        // on référence un nouveau genre
        // en mémorisant un premier livre dans ce genre
        // son nombre de pages
        // et une fonction qui permettra de calculer
        // la moyenne de pages du genre
        allBooks[book.genre] = {
            nbBooks: 1,
            nbPages: book.pages,
            averagePages: function() {
                return this.nbPages / this.nbBooks;
            }
        };
    } else {
        // le genre est déjà référencé :
        // on ajoute un exemplaire de livre et son nombre de page
        allBooks[book.genre].nbBooks++;
        allBooks[book.genre].nbPages += book.pages;
    }
});
Object.keys(allBooks).forEach(genre => {
    console.log(genre, allBooks[genre].averagePages(), "pages en moyenne");
});
// ---------------------------------------------------
// Étape 3
let newestBook = [0, ""];
books.forEach(book => {
    if (book.year > newestBook[0]) {
        newestBook[0] = book.year;
        newestBook[1] = book.title;
    }
});
console.log("Étape 3 : Trouver le livre le plus récent");
console.log(newestBook[1] + " est le livre le plus récent");
// ---------------------------------------------------
// Étape 4 : Créer une liste unique de tous les auteurices
console.log("Étape 4 : Liste des auteurices");
let authorList = new Array();
books.forEach(book => {
    if (!authorList.includes(book.author)) {
        authorList.push(book.author);
    }
});
authorList.forEach(author => {
    console.log(author);
});
// ---------------------------------------------------
// Étape 5 : Grouper les livres par genre
console.log("Étape 5 : Liste des livres par genre");
let bookStyleList = new Object();
books.forEach(book => {
    if (!bookStyleList.hasOwnProperty(book.genre)) {
        bookStyleList[book.genre] = [book.title];
    } else {
        bookStyleList[book.genre].push(book.title);
    }
});
Object.keys(bookStyleList).forEach(genre => {
    console.log(genre + " :", bookStyleList[genre].join(", "));
});
