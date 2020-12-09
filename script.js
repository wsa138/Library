let myLibrary = [{title: "testTitle", author: "testAuthor", pages: "testPages",
    status: "testStatus"}];
let addedBook;

//Constructor function for Book
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function createNewBook() {
    addedBook = new Book(newTitle.value, newAuthor.value, newPages.value, newStatus.value);
    console.log(addedBook);
    addBookToLibrary(addedBook);
    createBook();
    closeForm();
}

// Adds new book object to library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

let addBookForm = document.getElementById("addBookForm");
let newTitle = document.getElementById("titleInput")
let newAuthor = document.getElementById("authorInput")
let newPages = document.getElementById("pagesInput")
let newStatus = document.getElementById("statusInput")
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

// Closes the add book form when submit button is clicked
function closeForm() {
    addBookForm.style.display = "none";
} 

// Create a sample element in html
var para = document.createElement("p");
var node = document.createTextNode("All the book elements here")
para.appendChild(node);

var element = document.getElementById("allBooks");
element.appendChild(para);

// Loop through myLibrary and console logs index as well as book information
function createBook() {
    myLibrary.forEach(function(item, index) {
        console.log(index);
        
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                console.log(key, item[key]);
            }
        }
    })  
}