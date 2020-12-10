let myLibrary = [];
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
    addBookToLibrary(addedBook);
    createAddedBook();
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


// Check for the position of newly added book to myLibrary and create that book in html
function createAddedBook() {
    //Sets indexNum to array index of recently added book.
    let bookSection = document.getElementById("allBooks");
    let indexNum = myLibrary.length - 1;
    let newElement = document.createElement("div");
    let idNum = (`book${indexNum + 1}`);
    newElement.id = idNum;
    newElement.classname = ("bookNumber");
    newElement.innerHTML = (`#${indexNum + 1}`);
    bookSection.appendChild(newElement);

    let newBookTitle = myLibrary[indexNum].title;
    let newBookAuthor = myLibrary[indexNum].author;
    let newBookPages = myLibrary[indexNum].pages;
    let newBookStatus = myLibrary[indexNum].status;

    let currentBookDiv = document.getElementById(idNum);

    let titleElement = document.createElement("p");
    titleElement.className = ("bookTitle");
    titleElement.innerHTML = newBookTitle;
    currentBookDiv.appendChild(titleElement);
    
    let authorElement = document.createElement("p");
    authorElement.className = ("bookAuthor");
    authorElement.innerHTML = newBookAuthor;
    currentBookDiv.appendChild(authorElement);

    let pagesElement = document.createElement("p");
    pagesElement.className = ("bookPages");
    pagesElement.innerHTML = newBookPages;
    currentBookDiv.appendChild(pagesElement);

    let statusElement = document.createElement("p");
    statusElement.className = ("bookStatus");
    statusElement.innerHTML = newBookStatus;
    currentBookDiv.appendChild(statusElement);
}