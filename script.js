let myLibrary = [];

//Constructor function for Book
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// Add info function to Book object
Book.prototype.info = function() {
    console.log(`${this.title}, ${this.author}, ${this.pages}, ${this.status}`);
    console.log("running info().")
}

// Adds new book object to library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

let addBookForm = document.getElementById("addBookForm");
let title = document.getElementById("titleInput");
let author = document.getElementById("authorInput");
let pages = document.getElementById("pagesInput");
let status = document.getElementById("statusInput");

// Function that opens the form to add a book
function openForm() {
    addBookForm.style.display = "block";
}

let newTitle = "";
let newAuthor = "";
let newPages = "";
let newStatus = "";

// Creates a new book object with info from form
function createNewBook() {
    newTitle = title.value;
    newAuthor = author.value;
    newPages = pages.value;
    newStatus = status.value;
    let book1 = new Book(newTitle, newAuthor, newPages, newStatus);
    console.log(book1);
    addBookToLibrary(book1);
    console.log(myLibrary);
    closeForm();
}

// Returns elements value.
function getInput(element) {
    return element.value;
}

// Closes the add book form when submit button is clicked
function closeForm() {
    addBookForm.style.display = "none";
} 
