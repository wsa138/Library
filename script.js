let myLibrary = [];

//Constructor function for Book
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
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
let submitButton = document.getElementById("submitButton")
let openAddForm= document.getElementById("bookForm");

// When add book button is clicked, run openForm()
openAddForm.addEventListener("click", openForm);

// When the submit button is clicked, run createNewBook()
submitButton.addEventListener("click", createNewBook);

// Function that opens the form to add a book
function openForm() {
    addBookForm.style.display = "block";
}

let newTitle = "";
let newAuthor = "";
let newPages = "";
let newStatus = "";
let addedBook;

// Creates a new book object with info from form and adds to myLibrary
function createNewBook() {
    newTitle = title.value;
    newAuthor = author.value;
    newPages = pages.value;
    newStatus = status.value;
    addedBook = new Book(newTitle, newAuthor, newPages, newStatus);
    console.log(addedBook); //Why cant I access book1
    addBookToLibrary(addedBook);
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
